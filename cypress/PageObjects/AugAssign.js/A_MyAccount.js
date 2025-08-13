class MyAccount     
{
setEdityouraccountinformation(Edityouraccountinformation)
{
cy.get('a[href$="route=account/edit"]').first().click()
}//href="https://ecommerce-playground.lambdatest.io/index.php?route=account/edit"
clickContinue(Continue)
{
    cy.get("input[value='Continue']").click()


}

}
export default MyAccount;