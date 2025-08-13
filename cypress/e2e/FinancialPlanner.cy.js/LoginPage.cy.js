import Login from "../../PageObjects/FinancialPlannerPOM/LoginPage";
describe("Login POM", ()=> {
    const login=new Login();
   beforeEach(() => {
    // Load the fixture file
 cy.fixture('FinancialPlanner').then((data) => { 
 cy.visit('https://publicplan.aivante.net/New_FP/Dzee/financial_planner/login')
 })

 it("TC_FP_Login_01: Verify Aivante logo is visible", () => {
 login.setAivanteLogo()
 })
    it("TC_FP_Login_02: Verify email input field", () => {
 login.setEMailUserID("data.UserID")
    })
 it("TC_FP_Login_03: Verify password input field", () => {    
 login.setPassword("data.Password")
 })
    it("TC_FP_Login_04: Verify login button is clickable", () => {
 login.clickLogin()
    })
    it("TC_FP_Login_05: Verify successful login", () => {
        cy.url().should('include', '/Planner'); 
    })

    })
})
