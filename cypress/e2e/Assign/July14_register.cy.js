describe("lambdatest login flow", () => {

    it("lambdatest login flow",() =>{
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
        cy.xpath("//div[@id='account-register']").should('be.visible');
        cy.xpath('//input [@id="input-firstname"]').type('Benny');
        cy.xpath('//input [@id="input-lastname"]').type('Alex');
        cy.xpath('//input [@id="input-email"]').type('benny@gmail.com');
        cy.xpath('//input [@id="input-telephone"]').type('1234567890');
        cy.xpath('//input [@id="input-password"]').type('benny123');
        cy.xpath('//input [@id="input-confirm"]').type('benny123');
    }
        )
    })
