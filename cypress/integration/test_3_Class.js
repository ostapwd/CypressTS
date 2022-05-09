import loginPage from "../support/pages/loginPage";

describe('Test suite', function () {

    it('Test 1', function () {

        loginPage.open();
        loginPage.loginToTheApp("standard_user", "secret_sauce");

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
});