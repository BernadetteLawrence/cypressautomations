import Login from "../../PageObjects/FinancialPlannerPOM/LoginPage";
import Planner from "../../PageObjects/FinancialPlannerPOM/PlannerPage";

let fp;
let LoginPage;
let PlannerPage;

describe('Planner Page Tests', () => {
  before(() => {
    cy.fixture('FinancialPlanner').then(d => { fp = d; });
  });

  before(() => {
    LoginPage = new Login();
    PlannerPage = new Planner();
  });

  // cache the login once per spec run
  beforeEach(() => {
    cy.session(['fp', fp?.UserID], () => {
      cy.visit(fp.Login_Url);
      LoginPage.setEMailUserID(fp.UserID);
      LoginPage.setPassword(fp.Password);
      LoginPage.clickLogin();
      cy.url().should('include', '/planner');
    });

    // land on the planner page for each test
    cy.visit(fp.Planner_Url);
    PlannerPage.waitForLoad(); // optional guard if you added it
  });
  it('TC_FP_Planner_01: Search', () => {
    PlannerPage.typeSearch();
  });
  it('TC_FP_Planner_02: Compare', () => {
    PlannerPage.clickCompare();
  });
  it('TC_FP_Planner_03: open Create Plan', () => {
    PlannerPage.setClient();  // no param needed
  });
  it('TC_FP_Planner_04: Home', () => {
    PlannerPage.clickHome();  // no param needed
  });
  it('TC_FP_Planner_05: HelpIcon', () => {
    PlannerPage.clickHelpIcon();  // no param needed
  });
  it('TC_FP_Planner_06: Settings', () => {
    PlannerPage.clickSetting();  // no param needed
  });
  it('TC_FP_Planner_07: ChangePassword', () => {
     PlannerPage.clickSetting();
    PlannerPage.clickChangePassword();  // no param needed
  });
  it('TC_FP_Planner_08: EditProfile', () => {
     PlannerPage.clickSetting();
    PlannerPage.clickEditProfile();  // no param needed
  });
  it('TC_FP_Planner_09: Logout', () => {
    PlannerPage.clickLogout();  // no param needed
  });
  it('TC_FP_Planner_10: ExpandPlan', () => {
    PlannerPage.clickExpandPlan();  // no param needed
  });
  it('TC_FP_Planner_11: CollapsePlan', () => {
    PlannerPage.clickExpandPlan();
    PlannerPage.clickCollapsePlan();  // no param needed
  });
  it('TC_FP_Planner_12: FirstPage', () => {
    PlannerPage.clickFirstPage();
  });
it('TC_FP_Planner_13: PreviousPage', () => {
    PlannerPage.clickPreviousPage();
});
it('TC_FP_Planner_14: NextPage', () => { 
  PlannerPage.clickNextPage();
});
it('TC_FP_Planner_15: LastPage', () => { 
  PlannerPage.clickLastPage();
});
it('TC_FP_Planner_16: DeleteClientPlan', () => {
    PlannerPage.clickDeleteClientPlan();
});
it('TC_FP_Planner_17: PlanCreate', () => {
    PlannerPage.clickPlanCreate();
});
it('TC_FP_Planner_18: ViewPlan', () => {
  PlannerPage.clickExpandPlan();  
  PlannerPage.clickViewPlan();
});
it('TC_FP_Planner_19: DeleteIndividualPlan', () => {
  PlannerPage.clickExpandPlan();  
  PlannerPage.clickDeleteIndividualPlan();
});
it('TC_FP_Planner_20: editPrimaryFirstName', () => {
  PlannerPage.clickExpandPlan();  
  PlannerPage.clickPlanCreate();
  PlannerPage.clickeditPrimaryFirstName();
});
});