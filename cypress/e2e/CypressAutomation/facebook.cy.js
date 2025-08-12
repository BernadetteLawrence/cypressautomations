//This test will include dropdown, checkbox and radiobutton
 
describe('Checkbox and Radio Button', ()=>{
 
 
    it('Checkbox and Radio Button', ()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
 
 
           cy.get('[id="sunday"]').check();
 
           cy.wait(2000);
 
           cy.get('[id="sunday"]').check();
 
           cy.wait(2000);
 
           cy.get('[id="sunday"]').uncheck();
 
           cy.wait(2000);
 
           cy.get('#female').check();
 
           cy.wait(2000);
 
           cy.get('#male').check();
 
           cy.get('[type="checkbox"]').check();
 
           cy.get('[type="checkbox"]').uncheck();
 
           cy.get('[id="sunday"]').check();
 
           cy.get('[id="sunday"]').should('be.checked');
 
           cy.get('#male').should('be.checked');
 
           cy.get('#female').should('not.be.checked');
 
 
 
})
 
 
 
    it.only('handling Dropdown', ()=>{
 
        cy.visit('https://www.facebook.com/',{failOnStatusCode: false})
 
        cy.get('[id="day"]').select('25').should('have.value','25')
 
        cy.get('[id="month"]').select("Jan").should('have.value','Jan')
       
 
    
})
 
})