import Login from "../../PageObjects/AugAssign.js/A_LoginPage.js";
describe("Login Pom", ()=> {
    it("Login Pom", () => {
 cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
 const login=new Login();
 login.setEMailAddress("benalex@gmail.com")
 login.setPassword("1111")
 login.clickLogin()

    })
})
