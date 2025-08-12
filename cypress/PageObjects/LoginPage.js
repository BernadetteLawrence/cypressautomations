/* Method 1 class Login
{
setUsername(username) 
    {
        cy.get("input[placeholder='Username']").type("Admin");
    }
setPassword(password)
{
    cy.get("input[placeholder='Password']").type("admin123");
}
clickLogin()
{
    cy.get("button[type='submit']").click();
}
verifyLogin()
{
    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text","Dashboard");
}
}
export default Login;*/
//Method 2
class Login
{
txtusername=("input[placeholder='Username']");
txtpassword=("input[placeholder='Password']");
btnlogin=("button[type='submit']");
lblmsg=(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module");

setUsername(username) 
    {
        cy.get(this.txtusername).type("Admin");
    }
setPassword(password)
{
    cy.get(this.txtpassword).type("admin123");
}
clickLogin()
{
    cy.get(this.btnlogin).click();
}
verifyLogin()
{
    cy.get(this.lblmsg).should("have.text","Dashboard");
}
}
export default Login;