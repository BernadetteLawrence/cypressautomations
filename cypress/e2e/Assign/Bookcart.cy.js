describe("Bookcart", () => {
    it("Test Case for Book Categories", () => {
        cy.visit("https://bookcart.azurewebsites.net/");

        // Assert visible sections
        cy.xpath("//div[@class='col-md-3 col-sm-12']").should('be.visible');
        cy.xpath("//div[@class='filter-container']").should('be.visible');

        // Loop through category list items
        cy.get('[class="mat-mdc-list-item-unscoped-content mdc-list-item__primary-text"]').each(($el, index) => {
            const text = $el.text().trim();

            // Check for known categories
            if (text === "Biography") {
                cy.xpath("//span[contains(text(),'Biography')]").should('be.visible');
            } else if (text === "Fiction") {
                cy.xpath("//span[contains(text(),'Fiction')]").should('be.visible');
            } else if (text === "Mystery") {
                cy.xpath("//span[contains(text(),'Mystery')]").should('be.visible');
            } else if (text === "Fantasy") {
                cy.xpath("//span[contains(text(),'Fantasy')]").should('be.visible');
            } else if (text === "Romance") {
                cy.xpath("//span[contains(text(),'Romance')]").should('be.visible');
            }
        });
    });
});