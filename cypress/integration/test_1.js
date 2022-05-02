describe('Test suite Swaglabs', () => {
   
    it ('Authorization of the created user on the site', () => {
        cy.visit('https://www.saucedemo.com');
        cy.wait(500);
        cy.get('#user-name').should('be.visible').type('standard_user');
        cy.wait(200);
        cy.get("input[id='password']").type('secret_sauce');
        cy.wait(500);
        cy.get("input[id='login-button']").click();
    });

    it("I do something", () => {
        cy.wait(2000);
        cy.get("#header_container .title").then(element => 
            cy.log(element.text()));
        cy.contains("Add to cart").should("be.visible");
        cy.get("#header_container .title").should('contain', "Products");
        cy.xpath("//*[@id='react-burger-menu-btn']").click();
        cy.get("#header_container .title").then((element) => {
            expect(element.text()).to.equal('Products')
        })
        cy.wait(1000);
        cy.get("#react-burger-cross-btn").click();
        cy.xpath("//*[@class='inventory_item_name']").each( item => {
            cy.log(item.text())
        })

        cy.get("[id*='add-to-cart']").each( item => {
            item.click();
        })
    });
});