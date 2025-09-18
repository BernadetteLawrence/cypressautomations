class Login
{
    AivanteLogoEle="img[alt='logo']";
    EMailUserIDEle='[id="email"]';
    PasswordEle='[id="password"]';
    LoginEle='[id="submit"]';
    PlannerPage='[id="logged_in_user_name"]'
    
setAivanteLogo(AivanteLogo)
    {
cy.get(this.AivanteLogoEle).should("be.visible");
    }
setEMailUserID(EMailUserID)
{
cy.get(this.EMailUserIDEle).should("be.visible").and("not.be.disabled").type("newteamfp@gmail.com");
}
setPassword(Password)
{
cy.get(this.PasswordEle).should("be.visible").and("not.be.disabled").type("test");
}
clickLogin(Login)
{
    cy.get(this.LoginEle).should("be.visible").and("not.be.disabled").click()
}
verifyPlannerPage()
{
    cy.get(this.PlannerPage).should("be.visible").and('have.text', "Welcome, Financial Planner");
}
}

export default Login;