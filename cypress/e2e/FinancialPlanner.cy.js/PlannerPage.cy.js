import Login from "../../PageObjects/FinancialPlannerPOM/LoginPage";
import Planner from "../../PageObjects/FinancialPlannerPOM/PlannerPage";

let fp;
let loginPage;
let plannerPage;

describe('Planner Page Tests', () => {
  before(() => {
    cy.fixture('FinancialPlanner').then(d => { fp = d; });
  });

  before(() => {
    loginPage = new Login();
    plannerPage = new Planner();
  });

  // cache the login once per spec run
  beforeEach(() => {
    cy.session(['fp', fp?.UserID], () => {
      cy.visit(fp.Login_Url);
      loginPage.setEMailUserID(fp.UserID);
      loginPage.setPassword(fp.Password);
      loginPage.clickLogin();
      cy.url().should('include', '/planner');
    });

    // land on the planner page for each test
    cy.visit(fp.Planner_Url);
    plannerPage.waitForLoad(); // optional guard if you added it
  });

  it('TC_FP_Planner_01: open Create Plan', () => {
    plannerPage.clickClient();  // no param needed
  });

  /*it('TC_FP_Planner_02: search and compare', () => {
    plannerPage.typeSearch('Retirement Plan');
    plannerPage.clickCompare();
  });*/
});
