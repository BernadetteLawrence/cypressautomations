describe("Add and Delete User", () => {
    it("Add and Delete User", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
        // Login
        cy.get('[name="username"]').type("Admin");
        cy.get('[name="password"]').type("admin123");
        cy.get('[type="submit"]').click();

        // Navigate to Admin section
        cy.contains('Admin').click();
        cy.contains('Add').click();

        // Enter Username
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type("BenTomm");

        // Open 'User Role' dropdown
        cy.get('.oxd-select-text').eq(0).click();  // this targets the first dropdown

        // Select 'ESS' from dropdown
        cy.get('.oxd-select-dropdown').should('be.visible').contains('ESS').click();
        //Open Status Dropdown
        cy.get(".oxd-select-text-input").eq(1).click();
        // Select Enable from Dropdown
        cy.get(".oxd-select-dropdown").should('be.visible').contains("Enabled").click();
        //Employee Hint
        cy.get('[placeholder="Type for hints..."]').type("B", { force: true });
        cy.contains('James Butler').click({ force: true });
        cy.get('.oxd-button--secondary').click();
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type("a12345678");
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("a12345678");
         cy.get('.oxd-button--secondary').should('contain.text', 'Save').click();
    });
});
//cy.contains('button', 'Save').click();
        



