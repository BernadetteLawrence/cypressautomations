import { forOwnRight } from "lodash";

class ForgotPassword
{
setChangeyourpassword(Changeyourpassword)
{
    cy.get('a[href$="route=account/password"]').first().click()
}
setPassword(Password)
{
    cy.get('[id="input-password"]').type("1111")
}
setPasswordConfirm(PasswordConfirm)
{
    cy.get('#input-confirm').type("1111")
}
clickContinue(Continue)
{
    cy.get("input[value='Continue']").click()


}
}
export default ForgotPassword;