describe('Second Xpath Case', () => {
  it('Xpath Test Case', () => {
    cy.visit("http://www.automationpractice.pl/index.php");
    cy.xpath("//ul[@class='product_list grid row']").should('exist');
  });
});