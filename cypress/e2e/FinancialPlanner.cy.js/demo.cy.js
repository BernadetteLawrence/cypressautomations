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
describe("View and Reopen Latest Plan", () => {
  let data;
  const healthExpenseValues = {};

  before(() => {
    cy.task("csv:parseFromDropbox").then((d) => {
      data = d;
    });
  });

  it("should create, capture, and verify latest plan", () => {
    const LoginPage = new Login();
    const PlannerPage = new Planner();
    const PersonalPage = new Personal();
    const PreMedicarePage = new PreMedicare();
    const LongTermCarePage = new Longtermcare();
    const HealthExpensesPage = new HealthExpenses();
    const MedicarebundlePage = new Medicarebundle();
    const fundwithinvestmentPage = new FundWithInvestment();
    const LongTermCareExpensePage = new LongTermCareExpenses();
    const ReportBuilderPage = new Reportbuilder();

    cy.visit("https://publicplan.aivante.net/New_FP/Dzee/financial_planner/planner");
    LoginPage.setEMailUserID(data.UserID);
    LoginPage.setPassword(data.Password);
    LoginPage.clickLogin();
    PlannerPage.setClient();
    cy.wait(500);
    PersonalPage.setClientEmail(data.ClientEmail);
    PersonalPage.setFirstName(data.FirstName);
    PersonalPage.setLastName(data.LastName);
    PersonalPage.setGender(data.Gender);
    PersonalPage.setMonthofBirth(data.MonthofBirth);
    PersonalPage.setYearofBirth(data.YearofBirth);
    PersonalPage.setHealthProfile(data.HealthProfile);
    PersonalPage.setLifeExpectancy(data.LifeExpectancy);
    PersonalPage.setTobaccoUser(data.TobaccoUser);
    PersonalPage.setRetirementAge(data.RetirementAge);
    PersonalPage.setCurrentZipCode(data.CurrentZipcode);
    PersonalPage.setRetirementZipCode(data.RetirementZipcode);
    PersonalPage.setTaxFilingStatus(data.TaxFilingStatus);
    PersonalPage.clickIncludeSpouse();
    PersonalPage.setSpouseFirstName(data.SpouseFirstName);
    PersonalPage.setSpouseLastName(data.SpouseLastName);
    PersonalPage.setSpouseGender(data.SpouseGender);
    PersonalPage.setSpouseMonthofBirth(data.SpouseMonthofBirth);
    PersonalPage.setSpouseYearofBirth(data.SpouseYearofBirth);
    PersonalPage.setSpouseHealthProfile(data.SpouseHealthProfile);
    PersonalPage.setSpouseLifeExpectancy(data.SpouseLifeExpectancy);
    PersonalPage.setSpouseTobaccoUser(data.SpouseTobaccoUser);
    PersonalPage.setSpouseRetirementAge(data.SpouseRetirementAge);
    PersonalPage.setSpouseCurrentZipCode(data.SpouseCurrentZipcode);
    PersonalPage.setSpouseRetirementZipCode(data.SpouseRetirementZipcode);

    
    PersonalPage.clickMedicare();
    PersonalPage.setTaxfillingstatusAlert();
    PreMedicarePage.clickpremedicarepage();
    LongTermCarePage.setlongtermcare();
    LongTermCarePage.clickrunanalysis();
    LongTermCarePage.clickrunanalysisbutton();

    HealthExpensesPage.clickhealthcareexpenses();
    cy.wait(2000);

    cy.get("#pv_at_retirement", {
        timeout: 20000
      })
      .should("not.have.text", "$ 0")
      .invoke("text")
      .then((val) => (healthExpenseValues.pvAtRetirement = val.trim()));

    cy.get("#yearly_total_expenses", {
        timeout: 20000
      })
      .should("not.have.text", "$ 0")
      .invoke("text")
      .then((val) => (healthExpenseValues.yearlyTotalExpenses = val.trim()));

    cy.get("#yearly_total_expenses_expense_projection", {
        timeout: 30000
      })
      .should("not.have.text", "$ 0")
      .invoke("text")
      .then((val) => (healthExpenseValues.expenseProjection = val.trim()));

    cy.then(() => {
      cy.log("✅ Captured Healthcare Expense Values:");
      cy.log(`PV at Retirement: ${healthExpenseValues.pvAtRetirement}`);
      cy.log(`Yearly Total Expenses: ${healthExpenseValues.yearlyTotalExpenses}`);
      cy.log(`Expense Projection: ${healthExpenseValues.expenseProjection}`);
    });

    
    /* MedicarebundlePage.clickmedicarebundlelink();
     cy.wait(1000);
     FundwithinvestPage.clickfundpage();
     cy.wait(500);
     LongTermCareExpensePage.clicklongtermcareexpenseslink();
     cy.wait(500);*/
    cy.get(".icon.icon-home").click();

    // --- Reopen latest plan ---
    const targetName = `${data.FirstName} ${data.LastName}`.trim();

    cy.get("tbody tr").then(($rows) => {
      const rows = [];

      $rows.each((_, row) => {
        const name = Cypress.$(row).find(".ellipsis-email").text().trim();
        const timestampText = Cypress.$(row).find(".getDatePlan").text().trim();
        const match = timestampText.match(/\d{4}-\d{2}-\d{2}\s*\d{2}:\d{2}:\d{2}/);
        if (!name || !match) return;

        const timestamp = new Date(match[0]);
        if (name === targetName) rows.push({
          row,
          timestamp
        });
      });

      if (!rows.length) {
        cy.log(`❌ No matching rows found for: ${targetName}`);
        return;
      }

      rows.sort((a, b) => b.timestamp - a.timestamp);
      const latestRow = rows[0].row;

      cy.wrap(latestRow).within(() => {
        cy.get("label[for^='checkbox-AiVantePlan-']").click({
          force: true
        });
        cy.get("i[id^='viewPlan-']").scrollIntoView().click({
          force: true
        });
      });

      cy.log(`✅ Opened latest plan for ${targetName}`);
    });


    // --- Verify values after reopening ---
    cy.get("#pv_at_retirement", {
        timeout: 20000
      })
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(`PV Check: ${text.trim()} vs ${healthExpenseValues.pvAtRetirement}`);
        expect(text.trim()).to.eq(healthExpenseValues.pvAtRetirement);
      });

    cy.get("#yearly_total_expenses", {
        timeout: 20000
      })
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(`Yearly Check: ${text.trim()} vs ${healthExpenseValues.yearlyTotalExpenses}`);
        expect(text.trim()).to.eq(healthExpenseValues.yearlyTotalExpenses);
      });

    cy.get("#yearly_total_expenses_expense_projection", {
        timeout: 20000
      })
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(`Projection Check: ${text.trim()} vs ${healthExpenseValues.expenseProjection}`);
        expect(text.trim()).to.eq(healthExpenseValues.expenseProjection);
      });

    cy.log("✅ Verified Healthcare Expense values match after reopening latest plan");
  });
});  