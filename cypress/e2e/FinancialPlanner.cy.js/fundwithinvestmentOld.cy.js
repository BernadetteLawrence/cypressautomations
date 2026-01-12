import Login from "../../PageObjects/FinancialPlannerPOM/LoginPage";
import Planner from "../../PageObjects/FinancialPlannerPOM/PlannerPage";
import Personal from "../../PageObjects/FinancialPlannerPOM/PersonalPage";
//import MedicarePage from "../../PageObjects/FinancialPlannerPOM/MedicarePage";
//import PreMedicare from "../../PageObjects/FinancialPlannerPOM/PreMedicarePage";
import fundwithinvestment from "../../PageObjects/FinancialPlannerPOM/fundwithinvestmentPage";
import { setPersonalData } from "../../support/personalProfileSetup";
// let LoginPage, PlannerPage, PersonalPage, fundwithinvestmentPage;

describe("Fund With Investment", () => {
  //("should login, execute planner, personal, and fundwithinvestment steps", function () {
  const dataSetup = () => {
    const LoginPage = new Login();
    //const plannerPage = new Planner();
    //const PersonalPage = new Personal();
    //const MedicarePage = new Medicare();
    cy.visit(
      "https://publicplan.aivante.net/New_FP/Dzee/financial_planner/planner"
    );
    cy.fixture("FinancialPlanner").then((data) => {
      // Step 1: Login

      cy.visit(data.Login_Url);
      LoginPage.setEMailUserID(data.UserID);
      LoginPage.setPassword(data.Password);
      LoginPage.clickLogin();

      cy.log("fixture loaded", data);
      // Step 2: Planner Page
      const plannerPage = new Planner();
      cy.visit(data.Planner_Url);
      cy.wait(2000);
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
      cy.visit(
        "https://publicplan.aivante.net/New_FP/Dzee/financial_planner/planner#create_new_plan"
      );
    });
  };
  beforeEach(() => {
    cy.session("predefinedData", dataSetup, {
      validate: () => {
        cy.url().should("not.include", "/login");
      },
    });

    cy.visit(
      "https://publicplan.aivante.net/New_FP/Dzee/financial_planner/planner#fund_with_investment"
    );
    cy.wait(5000);
  });
  /*LoginPage = new Login();
    PlannerPage = new Planner();
    PersonalPage = new Personal();
    fundwithinvestmentPage = new fundwithinvestment();
    cy.visit(
      "https://publicplan.aivante.net/New_FP/Dzee/financial_planner/planner#fund_with_investment"
    );
    cy.wait(5000);*/

  /*it("TC_FP_FundwithInvest_01 - Verify Title", function () {
    const fundwithinvestmentPage = new fundwithinvestment();
    //fundwithinvestmentPage.fundWithInvestmentClick();
    cy.contains("FUND WITH INVESTMENT").should("be.visible");
    cy.wait(5000);
  });*/
  it("TC_FP_FundwithInvest_02 - Verify View Expenses Dropdown Options", () => {
    const fundwithinvestmentPage = new fundwithinvestment();
    //fundwithinvestmentPage.setViewExpensesDropdownOption();
    cy.log("Dropdown options verified");
  });

  /*it("TC_FP_FundwithInvest_02 - Verify View Expenses Dropdown Options", function () {
    const fundwithinvestmentPage = new fundwithinvestment();
    //fundwithinvestmentPage.fundWithInvestmentClick();
    fundwithinvestmentPage.setViewExpensesDropdown();
    cy.get("#healthcareExpensesType").should("be.visible").select("Spouse"); // or .select('moderate') if using value

    cy.wait(4000);
  });*/
});
