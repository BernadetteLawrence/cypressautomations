describe("PDP Test Case", () => {
    it("PDP Application", () =>{
        cy.visit("http://169.61.105.110/medicareAdvantage_sandbox/login");
        cy.get('[formcontrolname="userName"]').type('testuser@gmail.com');
        cy.get('[formcontrolname="password"]').type('user123');
       cy.get('.mat-button-wrapper').click();
      
      
});
});


