import Login from "../../PageObjects/FinancialPlannerPOM/LoginPage";
import Planner from "../../PageObjects/FinancialPlannerPOM/PlannerPage";

let data;          // one row from CSV
let LoginPage;
let PlannerPage;

describe('Planner Page Tests', () => {

  // Load CSV once (replaces fixture)
  before(() => {
    return cy.task('csv:parseFromDropbox').then((d) => {
      data = d[0];                 // or filter a specific row
      //expect(data).to.include.keys('Login_Url', 'UserID', 'Password');
    });
  });

  // Create page objects once
  before(() => {
    LoginPage = new Login();
    PlannerPage = new Planner();
  });

  // Cache the login once per spec run and land on planner each test
  beforeEach(() => {
    cy.session(['login', data.UserID], () => {
      cy.visit(data.Login_Url);                 // <-- from CSV
      LoginPage.setEMailUserID(data.UserID);    // <-- from CSV
      LoginPage.setPassword(data.Password);     // <-- from CSV
      LoginPage.clickLogin();
      cy.url().should('include', '/planner');
    });

    // Start each test on Planner page (adjust if you navigate elsewhere)
    cy.visit(data.Login_Url.replace('/login', '/planner'));
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
it('TC_FP_Planner_20: ComparePlanDetails', () => {
    PlannerPage.clickCompare();   
    PlannerPage.clickExpandPlan();               //added new
    PlannerPage.clickcheckbox();
    PlannerPage.clickCompare();
  });
it('TC_FP_Planner_21: editPrimaryFirstName', () => {
  PlannerPage.clickExpandPlan();  
  PlannerPage.clickPlanCreate();
  PlannerPage.clickeditPrimaryFirstName();
});
});