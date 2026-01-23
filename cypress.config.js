const { defineConfig } = require("cypress");
const xlsx = require("xlsx");
const fs = require("fs");
const axios = require("axios");
const Papa = require("papaparse");

module.exports = defineConfig({
  e2e: {
    supportFile: "cypress/support/e2e.js",
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 120000,
    requestTimeout: 20000,
    responseTimeout: 30000,
    retries: { runMode: 2, openMode: 0 },

    screenshotOnRunFailure: true,
    video: true,
    includeShadowDom: true,
    watchForFileChanges: false,

    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/results/mochawesome",
      overwrite: false,
      html: false,
      json: true,
    },

    trashAssetsBeforeRuns: false,

    specPattern: [
      "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
      "!cypress/e2e/1-getting-started/**",
      "!cypress/e2e/2-advanced-examples/**",
    ],

    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php",

    env: {
      USE_TESTCONTROL: false,

      RESULTS_WEBAPP_URL:
        "https://script.google.com/macros/s/AKfycbylx6ZqTAcuiP_GQfyXZDje4kD_BTGITME6fdYJfe6d7MFrBtUWAJ9ZvncMKsWNaML42w/exec",

      //  MUST be the CSV export link for the tab that contains:
     
      SHEET_CSV_URL:
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTGKgdBgzNHWcAjXeE2UhIkYCs5iE9j9tgTUjGoibunOQJJFAYcfx69x8h9jF-sfChDysPy2BKSzPUl/pub?gid=0&single=true&output=csv",
    },

    async setupNodeEvents(on, config) {
      // =========================
      // ✅ Tasks
      // =========================
      on("task", {
        async "csv:parseFromDropbox"() {
          const url =
            "https://www.dropbox.com/scl/fi/46bnjn4btiamipzq9yfjs/CSVfileFP-Sheet1-5.csv?rlkey=0ka7k0tj5omtdswsr0ktijkr7&st=b7l679kw&dl=1";

          const response = await axios.get(url, { responseType: "text" });
          const neatCSV = (await import("neat-csv")).default;
          return await neatCSV(response.data);
        },

        readExcel({ filePath, sheetName }) {
          const workbook = xlsx.readFile(filePath);
          const worksheet = workbook.Sheets[sheetName];
          return xlsx.utils.sheet_to_json(worksheet);
        },

        writeExcel({ filePath, sheetName, jsonData }) {
          const workbook = fs.existsSync(filePath)
            ? xlsx.readFile(filePath)
            : xlsx.utils.book_new();

          const worksheet = xlsx.utils.json_to_sheet(jsonData);

          if (workbook.Sheets[sheetName]) delete workbook.Sheets[sheetName];

          xlsx.utils.book_append_sheet(workbook, worksheet, sheetName);
          xlsx.writeFile(workbook, filePath);
          return null;
        },
         



        //Results in Google Sheet
        async pushResultsToSheet({ url, rows }) {
          const res = await axios.post(
            url,
            { rows },
            { headers: { "Content-Type": "application/json" } }
          );
          return res.data;
        },
      });

      // =========================
      // 3) PUSH RESULTS TO GOOGLE SHEET (after each spec)
      // =========================
      on("after:spec", async (spec, results) => {
        const url = config.env.RESULTS_WEBAPP_URL;
        if (!url) return;

        const runTime = results?.stats?.startedAt || new Date().toISOString();

        const rows = (results?.tests || []).map((t) => {
          const title = Array.isArray(t.title)
            ? t.title.join(" ")
            : String(t.title || "");

          const testId = title.split(":")[0].trim();

          return {
            runTime,
            spec: spec.name,
            testId,
            title,
            status: t.state || "pending",
            durationMs: t.attempts?.[0]?.duration ?? t.duration ?? 0,
          };
        });

        if (!rows.length) return;

        try {
          await axios.post(
            url,
            { rows },
            { headers: { "Content-Type": "application/json" } }
          );
          console.log(`✅ Pushed ${rows.length} results to sheet for spec: ${spec.name}`);
        } catch (err) {
          console.log("❌ Failed to push results:", err.message);
        }
      });




      // =========================
      // 1. TESTCONTROL SWITCH
      // =========================
      const useTestControl =
        String(config.env.USE_TESTCONTROL).toLowerCase() === "true";

      console.log("✅ USE_TESTCONTROL =", useTestControl);

      if (!useTestControl) return config;

      const sheetUrl = config.env.SHEET_CSV_URL;
      if (!sheetUrl) throw new Error("❌ SHEET_CSV_URL missing in env");

      // cache-bust so you always get the latest checkbox values
      const cacheBust =
        (sheetUrl.includes("?") ? "&" : "?") + "cacheBust=" + Date.now();

      const response = await axios.get(sheetUrl + cacheBust, {
        responseType: "text",
      });

      const parsed = Papa.parse(response.data, {
        header: true,
        skipEmptyLines: true,
      });

      const rawRows = Array.isArray(parsed.data) ? parsed.data : [];

      // normalize headers: "Dependency " -> "Dependency"
      const rows = rawRows.map((r) => {
        const clean = {};
        for (const k of Object.keys(r || {})) {
          clean[String(k).trim()] = r[k];
        }
        return clean;
      });




      // =========================
      // 2. DEPENDENCY LOGIC (GENERIC)
      // =========================

      // safely get dependency cell even if header varies
      function getDependencyCell(row) {
        if (!row) return "";

        if (row.Dependency != null) return row.Dependency;
        if (row.DependsOn != null) return row.DependsOn;

        const depKey = Object.keys(row).find(
          (k) => String(k).trim().toLowerCase() === "dependency"
        );
        return depKey ? row[depKey] : "";
      }

      // supports newline OR comma separated dependencies
      function parseDeps(cell) {
        if (!cell) return [];
        return String(cell)
          .split(/\r?\n|,/g)
          .map((s) => s.trim())
          .filter(Boolean);
      }

      // checkbox column might be named "Select" or blank header ""
      function isChecked(row) {
        const v = row.Select ?? row[""] ?? row.Checked ?? "";
        return String(v).trim().toUpperCase() === "TRUE";
      }

      function expandWithDependencies(allRows, selectedIds) {
        const byId = new Map(
          allRows.map((r) => [String(r?.Test_ID ?? "").trim(), r])
        );

        const result = new Set(selectedIds);
        const stack = [...selectedIds];

        while (stack.length) {
          const id = stack.pop();
          const row = byId.get(id);
          if (!row) continue;

          const deps = parseDeps(getDependencyCell(row));

          for (const depId of deps) {
            if (!result.has(depId)) {
              result.add(depId);
              stack.push(depId);
            }
          }
        }

        return [...result];
      }

      // =========================
      //  Selected IDs from checkboxes
      // =========================
      const selectedRows = rows.filter(isChecked);

      const selectedIds = selectedRows
        .map((r) => String(r?.Test_ID ?? "").trim())
        .filter(Boolean);

      console.log("✅ Selected Test_IDs =", selectedIds);

      // expand dependencies
    const enabledIds = expandWithDependencies(rows, selectedIds);
   // ✅ Only run selected tests

      console.log("✅ Enabled Test_IDs (with dependencies) =", enabledIds);
      

      // pass enabled IDs to runtime (support/e2e.js)
      config.env.ENABLED_TEST_IDS = enabledIds;
      console.log("✅ ENABLED_TEST_IDS =", config.env.ENABLED_TEST_IDS);

      // if nothing checked → run everything
      if (enabledIds.length === 0) {
        console.log("⚠️ No tests selected. Cypress will run ALL tests.");
        return config;
      }

      // =========================
      //  Filter specs using ENABLED rows (selected + dependencies)
      // =========================
      const enabledSet = new Set(enabledIds);

      const enabledRows = rows.filter((r) =>
        enabledSet.has(String(r?.Test_ID ?? "").trim())
      );

      const enabledComponents = [
        ...new Set(
          enabledRows
            .map((r) => String(r?.Component_List ?? "").trim())
            .filter(Boolean)
        ),
      ];

      console.log("✅ Enabled Components =", enabledComponents);

    const globs = enabledComponents
  .flatMap((name) => {
    const value = String(name).trim();

    // If Component_List is a spec filename like "MedicarePage.cy.js"
    if (/\.cy\.(js|jsx|ts|tsx)$/i.test(value)) {
      return [
        `cypress/e2e/**/${value}`,     // exact match (if file exists)
        `cypress/e2e/**/*_${value}`,   // match prefixed file like "04_MedicarePage.cy.js"
      ];
    }

    // If Component_List is just a keyword like "MedicarePage"
    return [`cypress/e2e/**/*${value}*.cy.js`];
  })
  .filter(Boolean);

if (globs.length > 0) {
  config.specPattern = globs;          // ✅ must be array of strings
  console.log("✅ Final specPattern =", config.specPattern);
}

return config;
    },
  },
});
