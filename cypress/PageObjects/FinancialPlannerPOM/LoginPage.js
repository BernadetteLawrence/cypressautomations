class Login
{
    AivanteLogoEle="img[alt='logo']";
    EMailUserIDEle='[id="email"]';
    PasswordEle='[id="password"]';
    LoginEle='[id="submit"]';
    
setAivanteLogo(AivanteLogo)
    {
cy.get(this.AivanteLogoEle).should("be.visible")
    }
setEMailUserID(EMailUserID)
{
cy.get(this.EMailUserIDEle).type("newteamfp@gmail.com");
}
setPassword(Password)
{
cy.get(this.PasswordEle).type("test");
}
clickLogin(Login)
{
    cy.get(this.LoginEle).click()
}
}  

export default Login;