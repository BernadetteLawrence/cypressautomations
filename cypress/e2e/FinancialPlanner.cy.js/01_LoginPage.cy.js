import Login from "../../PageObjects/FinancialPlannerPOM/LoginPage";
describe("Login POM", () => {
  let login;
  let data;

  before(() => {
    //cy.fixture("FinancialPlanner").then((d) => { data = d; });    //from fixture data
    return cy.task('csv:parseFromDropbox').then((d) => {
            data = d[0];
     
    });
  });

  beforeEach(() => {
    login = new Login();  // ✅ assign to the outer variable
    cy.visit("http://169.61.105.110/New_FP/Dzee/financial_planner/login");
    //cy.then(() => {
    //const url=data.Login_Url;
    //cy.visit(url);
  //});
});

   it("TC_FP_Login_01: Verify Aivante logo is visible", () => {

   login.setAivanteLogo()
   
   })
    it("TC_FP_Login_02: Verify email input field", () => {
    login.setEMailUserID(data.UserID)
    
    })
   it("TC_FP_Login_03: Verify password input field", () => {    
   login.setPassword(data.Password)
   
   })
    it("TC_FP_Login_04: Verify login button is clickable", () => {
    login.setEMailUserID(data.UserID);
    login.setPassword(data.Password);
    login.clickLogin();
    login.verifyPlannerPage(data.FirstName);
    })
   })

/*import Login from "../../PageObjects/FinancialPlannerPOM/LoginPage";

describe("Login POM", () => {
  let login;
  let testData;

  before(function () {
    // ✅ Return so Cypress waits
    return cy.task("csv:parseFromDropbox").then((data) => {
      testData = data;   // data is an array of rows from CSV
      cy.log("Loaded test data:", JSON.stringify(testData));
    });
  });

  beforeEach(function () {
    login = new Login();

    // ✅ Now testData is ready
    const row = testData[0];  
    cy.visit(row.Login_Url);

    
  });

  it('TC_FP_Login_01 - Verify logo', () => {
    login.setAivanteLogo();
  });

  it('TC_FP_Login_02 - Enter userid', () => {
    const row = testData[0];
    login.setEMailUserID(row.UserID);
  });

  it('TC_FP_Login_03 - Enter password', () => {
    const row = testData[0];
    login.setPassword(row.Password);
  });

  it('TC_FP_Login_04 - Full login flow', () => {
    const row = testData[0];
    login.setEMailUserID(row.UserID);
    login.setPassword(row.Password);
    login.clickLogin();
    login.verifyPlannerPage(row.FirstName);
  });
});
*/