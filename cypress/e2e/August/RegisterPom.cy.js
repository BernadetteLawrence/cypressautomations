import Register from "../../PageObjects/AugAssign.js/A_RegisterPage";
describe("Register Pom", ()=> {
    it("Register Pom", () => {
 cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register')
 const ln=new Register();
 ln.setFirstName("Ben")
 ln.setLastName("Alex")
 ln.setEMail("benalex@gmail.com")
 ln.setTelephone('1234567890')
 ln.setPassword("1111")
 ln.setPasswordConfirm("1111")
 ln.clickSubmit()
 ln.clickAgree()
 ln.verifyAccount()

    })
})