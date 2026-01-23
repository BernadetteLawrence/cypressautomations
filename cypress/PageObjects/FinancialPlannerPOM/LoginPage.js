class Login
{
    AivanteLogoEle="img[alt='logo']";
    UserIDEle='[id="email"]';
    PasswordEle='[id="password"]';
    LoginEle='[id="submit"]';
    PlannerPage='[id="logged_in_user_name"]'
    
setAivanteLogo(AivanteLogo)
    {
cy.get(this.AivanteLogoEle).should("be.visible");
cy.wait(1000);
    }
setEMailUserID(UserID)
{
cy.get(this.UserIDEle).should("be.visible").type(UserID,{force:true})//.and("not.be.disabled").type("auto1@gmail.com");
cy.wait(1000);
}
setPassword(Password)
{
cy.get(this.PasswordEle).should("be.visible").type(Password,{force:true})//and("not.be.disabled").type("dzee123");
cy.wait(1000);
}
clickLogin(Login)
{
    cy.get(this.LoginEle).should("be.visible").and("not.be.disabled").click()
    cy.wait(1000);
}
verifyPlannerPage()
{
    cy.get(this.PlannerPage).should("be.visible").and('have.text', "Welcome, Financial Planner");
   
}
}

export default Login;