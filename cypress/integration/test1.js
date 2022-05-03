describe('Test suite', function () {

    it.only('Test 1', function () {

        cy.visit("https://www.saucedemo.com/");

        cy.wait(2000);

        //cy.xpath("//form/div").click({ multiple: true });

        cy.wait(2000);
        cy.get("#user-name" ,{timeout:25000}).type("standard_user").click();
        cy.get("#password").type("secret_sauce");

        cy.get("#login-button").click();

        cy.get("#header_container .title").then(element =>
            cy.log(element.text())
        );

        cy.get("#header_container .title").should('contain', "Product");

        cy.wait(3000);
        cy.contains("Add to cart").click();

        cy.wait(2000);

        cy.get(".inventory_item_name").each(item => {
            cy.log(item.text())
        });

        cy.get("[id*='add-to-cart']").each(item => {
            item.click();
        });

        cy.xpath("//*[@id='react-burger-menu-btn']").click();



    });

    it.skip('Test 1', function () {

        cy.visit("https://www.google.com/");

        cy.get("[name='q']").type("what is Cypress").blur();
    });
});