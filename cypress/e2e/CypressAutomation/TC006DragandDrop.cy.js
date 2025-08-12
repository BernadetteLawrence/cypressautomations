describe("Drag and Drop", () => {
it ("drag and drop tests", () => {
    cy.visit("https://demo.automationtesting.in/Static.html");
    cy.wait(3000);
    cy.get("#angular").drag("#droparea")
    cy.wait(3000);
    cy.get("#mongo").drag("#droparea")    

})
})