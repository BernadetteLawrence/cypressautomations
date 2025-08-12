describe("Web Element Open Cart",()=>{
    beforeEach ("Login", ()=>  {
        cy.visit("https://demo3x.opencartreports.com/admin/index.php");
        
        cy.get('#input-username').type("demo")
        cy.get('#input-password').type("demo")
        cy.get("button[type='submit']").click()
        cy.get('#menu-sale>a').click()
        cy.get('[href="#collapse4"]').click()// main sales
    
})
 it.skip("ALl rows and columns", ()=>{
   cy.get('#collapse4 a').contains('Orders').click();
   cy.get('#collapse4 > .active > a').click();     //main orders
    cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length',20)
    cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length',8)

  })
it("Specific Row and Column", ()=>{
 cy.get('#collapse4 a').contains('Orders').click();
 cy.get('table.table.table-bordered.table-hover')
    .should('exist');

    cy.get(':nth-child(4) > :nth-child(3) > a')
      .should('have.text', 'Christine Swanson').click();

})
})
