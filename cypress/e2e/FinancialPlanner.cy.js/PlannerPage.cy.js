import Login from "../../PageObjects/FinancialPlannerPOM/LoginPage";
import Planner from "../../PageObjects/FinancialPlannerPOM/PlannerPage";

let LoginPage, PlannerPage;

describe('Planner Page Tests', () => {
  beforeEach(() => {
    LoginPage = new Login();
    PlannerPage = new Planner();
  });

  it("Login using fixture data", () => {
    cy.fixture('FinancialPlanner').then((data) => {
      // Visit the login page (IMPORTANT)
      cy.visit('https://publicplan.aivante.net/New_FP/Dzee/financial_planner/login');

      // Use POM methods
      LoginPage.setEMailUserID(data.UserID);
      LoginPage.setPassword(data.Password);
      LoginPage.clickLogin();

      // Optional: Verify redirection to /planner
      cy.url().should('include', '/planner');
    });
  });

  it("should set client", () => {
    cy.fixture('FinancialPlanner').then((data) => {
      // Visit login first
      cy.visit('https://publicplan.aivante.net/New_FP/Dzee/financial_planner/login');
      LoginPage.setEMailUserID(data.UserID);
      LoginPage.setPassword(data.Password);
      LoginPage.clickLogin();

      // Ensure the page loads
      cy.url().should('include', '/planner');
      
      // Then call planner page method
      PlannerPage.setClient();
    });
  });
});