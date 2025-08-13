class Login
{
    setEMailAddress(EMailAddress)
{
cy.get('[id="input-email"]').type("benalex@gmail.com");
}
setPassword(Password)
{
cy.get('[id="input-password"]').type("1111");
}
clickLogin(Login)
{
    cy.get("input[value='Login']").click()
}
}  

export default Login;