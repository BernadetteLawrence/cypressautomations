const { defineConfig } = require("cypress");
const xlsx = require("xlsx");
const fs = require("fs");
 
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement Excel utility tasks
      on("task", {
        readExcel({ filePath, sheetName }) {
          try {
            const workbook = xlsx.readFile(filePath);
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = xlsx.utils.sheet_to_json(worksheet);
            return jsonData;
          } catch (err) {
            throw new Error(`Failed to read Excel file: ${err.message}`);
          }
        },
 
        writeExcel({ filePath, sheetName, jsonData }) {
          try {
            const workbook = fs.existsSync(filePath)
              ? xlsx.readFile(filePath)
              : xlsx.utils.book_new();
 
            const worksheet = xlsx.utils.json_to_sheet(jsonData);
            xlsx.utils.book_append_sheet(workbook, worksheet, sheetName);
            xlsx.writeFile(workbook, filePath);
            return null;
          } catch (err) {
            throw new Error(`Failed to write Excel file: ${err.message}`);
          }
        },
      });
    },
 
    screenshotOnRunFailure: true, // This is for headless mode
    video: true,
    includeShadowDom: true, // This is for shadow DOM
    retries: 0,
    watchForFileChanges: false,
    env: {
      foo: 'bar',
      baz: 'quux',
    },
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',
  },
});
