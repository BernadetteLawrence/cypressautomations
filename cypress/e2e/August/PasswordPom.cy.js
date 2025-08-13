import Login from "../../PageObjects/AugAssign.js/A_LoginPage.js";
import MyAccount from "../../PageObjects/AugAssign.js/A_MyAccount.js";
import ForgotPassword from "../../PageObjects/AugAssign.js/A_ForgotPas.js";
let loginPage, myAccount, forgotPassword;
beforeEach(() => {
    loginPage = new Login();
    myAccount = new MyAccount();
    forgotPassword = new ForgotPassword();

    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
    loginPage.setEMailAddress("benalex@gmail.com");
    loginPage.setPassword("1111");
    loginPage.clickLogin();
  });

  it("should log in and access account info", () => {
    myAccount.setEdityouraccountinformation();
    myAccount.clickContinue();
    
  });
  it("ForgotPassword",()=>{
    forgotPassword.setChangeyourpassword();
    forgotPassword.setPassword("1111");
    forgotPassword.setPasswordConfirm("1111");
    forgotPassword.clickContinue();
  });
