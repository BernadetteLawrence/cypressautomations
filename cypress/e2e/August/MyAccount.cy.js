import MyAccount from "../../PageObjects/AugAssign.js/A_MyAccount.js";
import Login from "../../PageObjects/AugAssign.js/A_LoginPage.js";

describe("Login and My Account", () => {
  let loginPage;
  let myAccount;

  beforeEach(() => {
    loginPage = new Login();
    myAccount = new MyAccount();

    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
    loginPage.setEMailAddress("benalex@gmail.com");
    loginPage.setPassword("1111");
    loginPage.clickLogin();
  });

  it("should log in and access account info", () => {
    myAccount.setEdityouraccountinformation();
    myAccount.clickContinue();
    
  });
});