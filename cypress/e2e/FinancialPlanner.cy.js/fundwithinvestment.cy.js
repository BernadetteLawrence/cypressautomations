import Login from "../../PageObjects/FinancialPlannerPOM/LoginPage";
import Planner from "../../PageObjects/FinancialPlannerPOM/PlannerPage";
import Personal from "../../PageObjects/FinancialPlannerPOM/PersonalPage";
import fundwithinvestment from "../../PageObjects/FinancialPlannerPOM/fundwithinvestmentPage";
import { setPersonalData } from "../../support/personalProfileSetup";
let LoginPage, PlannerPage, PersonalPage, fundwithinvestmentPage;

describe("Fund With Investment", () => {
  it("should login, execute planner, personal, and fundwithinvestment steps", function () {
    cy.fixture("FinancialPlanner").then((data) => {
      // Step 1: Login
      const loginPage = new Login();
      cy.visit(data.Login_Url);
      loginPage.setEMailUserID(data.UserID);
      loginPage.setPassword(data.Password);
      loginPage.clickLogin();

      cy.log("fixture loaded", data);
      // Step 2: Planner Page
      const plannerPage = new Planner();
      cy.visit(data.Planner_Url);
      plannerPage.clickClient();

      // Step 3: Personal Page
      const personalPage = new Personal();
      cy.visit(data.CreatePlan_Url);
      setPersonalData(personalPage, data);

      // Step 4: Fund With Investment
      const fundwithinvestmentPage = new fundwithinvestment();

      cy.wait(2000);
      fundwithinvestmentPage.clickPreMedicare();
      fundwithinvestmentPage.clickLongTermCare();
      fundwithinvestmentPage.runAnalysisButtonClick();
      fundwithinvestmentPage.clickRunAnalysisPopup();
      fundwithinvestmentPage.medicareBundlesClick();
      cy.wait(5000);
      //fundwithinvestmentPage.fundWithInvestmentClick();
      cy.visit(
        "https://publicplan.aivante.net/New_FP/Dzee/financial_planner/planner#fund_with_investment"
      );
      // fundwithinvestmentPage.fundWithInvestmentClick();
      cy.wait(5000);

      //cy.wait(4000);
      // fundwithinvestmentPage.setViewExpensesDropdown();
      // Add more fundwithinvestment steps as needed using fixture data/results
    });
  });
});
