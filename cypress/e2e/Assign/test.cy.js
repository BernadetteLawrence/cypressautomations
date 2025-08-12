/// <reference types="cypress" /
describe("Login Orange Hrms",()=>{
    it("login with credentials"=()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("admin")
        cy.get()

 
    })
})