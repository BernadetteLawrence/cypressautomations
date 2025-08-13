class Register     
{
setFirstName(FirstName)
{
cy.get('[id="input-firstname"]').type("Ben");
}
setLastName(LastName)
{
    cy.get('[id="input-lastname"]').type("Alex")
}
setEMail(Email)
{
cy.get('[id="input-email"]').type("benalex@gmail.com")
}
setTelephone(Telephone)
{
  cy.get('[id="input-telephone"]').type("1234567890")  
}
setPassword(Password)
{
cy.get('[id="input-password"]').type("1111")  
}
setPasswordConfirm(PasswordConfirm)
{
    cy.get('[id="input-confirm"]').type("1111")  
}
clickSubmit(Submit)
{
    cy.get("input[value='Continue']").click()
}
clickAgree(Agree)
{
cy.get("label[for='input-agree']").click()
}
verifyAccount(verifyAccount)
    {
cy.get('.float-right > .btn').click();


}
}

export default Register;