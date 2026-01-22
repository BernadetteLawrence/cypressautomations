import Login from "../../PageObjects/FinancialPlannerPOM/LoginPage";
import Planner from "../../PageObjects/FinancialPlannerPOM/PlannerPage";
import Personal from "../../PageObjects/FinancialPlannerPOM/PersonalPage";
import Medicare from "../../PageObjects/FinancialPlannerPOM/MedicarePage";
import PreMedicare from "../../PageObjects/FinancialPlannerPOM/PreMedicarePage";
import Longtermcare from "../../PageObjects/FinancialPlannerPOM/LongTermCarePage";
import HealthExpenses from "../../PageObjects/FinancialPlannerPOM/HealthExpensesPage";
import Medicarebundle from "../../PageObjects/FinancialPlannerPOM/MedicareBundlePage";
import FundWithInvestment from "../../PageObjects/FinancialPlannerPOM/fundwithinvestmentPage";
import LongTermCareExpenses from "../../PageObjects/FinancialPlannerPOM/LongTermCareExpenses";
import Reportbuilder from "../../PageObjects/FinancialPlannerPOM/ReportBuilderPage";

describe("Smoke test", () => {
  const loginOnly = () => {
    const LoginPage = new Login();
    const PlannerPage = new Planner();

    // (other POM objects not used here, but keeping your structure)
    const PersonalPage = new Personal();
    const MedicarePage = Medicare;
    const PreMedicarePage = new PreMedicare();
    const LongTermCarePage = new Longtermcare();
    const HealthExpensesPage = new HealthExpenses();
    const MedicarebundlePage = new Medicarebundle();
    const FundWithInvestmentPage = new FundWithInvestment();
    const LongTermCareExpensePage = new LongTermCareExpenses();
    const ReportbuilderPage = new Reportbuilder();

    cy.visit("http://169.61.105.110/New_FP/Dzee/financial_planner/planner");

    return cy.fixture("FinancialPlanner").then((data) => {
      LoginPage.setEMailUserID(data.UserID);
      LoginPage.setPassword(data.Password);
      LoginPage.clickLogin();
      cy.url().should("include", "/financial_planner/planner");
    });
  };

  // ✅ Captures planId + timestamp from the same row (Option A)
  const capturePlanIdFromGrid = () => {
    const PlannerPage = new Planner();

    // expand grid
    PlannerPage.clickExpandPlan();

    const labelSel = '#displayPlanContainer label[for^="checkbox-AiVantePlan-"]';

    cy.get("#displayPlanContainer", { timeout: 15000 }).should("be.visible");

    cy.get(labelSel, { timeout: 15000 })
      .filter(":visible")
      .should(($els) => {
        expect($els.length, "visible plan checkboxes").to.be.greaterThan(0);
      })
      .first()
      .scrollIntoView()
      .click({ force: true })
      .invoke("attr", "for")
      .then((inputId) => {
        // ✅ FIX: id contains @ and . (email), so use attribute selector
        const checkboxSel = `[id="${inputId}"]`;

        // verify checked
        cy.get(checkboxSel).should("be.checked");

        // extract hex id from the tail
        const m = inputId.match(/([a-f0-9]{24,36})$/i);
        const planId = m ? m[1] : inputId.split("-").pop();

        Cypress.env("planId", planId);
        cy.wrap(planId).as("planId");
        cy.log(`✅ Captured planId: ${planId}`);

        // ✅ OPTION A: Capture timestamp from SAME ROW as the checkbox
        cy.get(checkboxSel)
          .closest('tr, mat-row, div[role="row"], .mat-row, .mdc-data-table__row')
          .should("exist")
          .within(() => {
            cy.get(
              'td.mat-column-modified, td.mat-column-date, td.modified, td.date, [class*="modified"], [class*="date"]'
            )
              .first()
              .invoke("text")
              .then((t) => t.trim())
              .then((timestamp) => {
                Cypress.env("planTimestamp", timestamp);
                cy.wrap(timestamp).as("planTimestamp");
                cy.log(`✅ Captured timestamp: ${timestamp}`);
              });
          });
      }); // ✅ closes .then((inputId) => {...})
  }; // ✅ closes capturePlanIdFromGrid

  beforeEach(() => {
    cy.session("login", loginOnly, {
      validate: () => cy.url().should("not.include", "/login"),
    });

    const existingId = Cypress.env("planId");
    const existingTs = Cypress.env("planTimestamp");

    if (existingId && existingTs) {
      cy.wrap(existingId).as("planId");
      cy.wrap(existingTs).as("planTimestamp");
    } else {
      cy.visit("http://169.61.105.110/New_FP/Dzee/financial_planner/planner");
      capturePlanIdFromGrid();
    }
  });

  it("TC_FP_01_Capture Plan ID + Timestamp", () => {
    cy.get("@planId").then((id) => {
      cy.log(`Using planId in test: ${id}`);
      expect(id).to.match(/^[a-f0-9]{24,36}$/i);
    });

    cy.get("@planTimestamp").then((ts) => {
      cy.log(`Using timestamp in test: ${ts}`);
      expect(ts).to.not.be.empty;
    });

    cy.visit(
      "http://169.61.105.110/New_FP/Dzee/financial_planner/planner#pdf_generator_option_page"
    );
    cy.get("#pdf_generator_option_page", { timeout: 15000 }).should("exist");
  });
}); // ✅ closes describe
