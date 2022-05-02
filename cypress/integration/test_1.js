describe('Test suite Swaglabs', () => {
    beforeEach('Authorization of the created user on the site',() => {
        cy.visit('https://www.saucedemo.com');
        cy.wait(700);
        cy.get('#user-name').should('be.visible').type('standard_user');
        cy.wait(700);
        cy.get("input[id='password']").type('secret_sauce');
        cy.wait(500);
        cy.get("input[id='login-button']").click();
    });

    // it("The burger menu is displayed on the screen", () => {
    //     cy.wait(1000);
    //     cy.xpath("//*[@id='react-burger-menu-btn']").click();
    //     cy.wait(3000);
    //     cy.get("#react-burger-cross-btn").click();
    // });

    // it("Adding products to cart", () => {
    //     cy.wait(1000);
    //     cy.get("[id*='add-to-cart']").should('be.visible').each( item => {
    //         item.click();
    //     });
    //     cy.get("#shopping_cart_container .shopping_cart_badge").should('be.visible').then(element => 
    //         cy.log(element.text()));
    // });

    it("Remove products from the shopping cart", () => {
        cy.wait(1000);
        cy.get("[id*='add-to-cart']").should('be.visible').each( item => {
            item.click();
        });
        cy.get("#shopping_cart_container .shopping_cart_badge").should('be.visible').then(element => 
            cy.log(element.text())).click();
        cy.wait(1000);
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html')
        cy.wait(1000);
        cy.xpath("//*[@id='item_2_title_link']").get("#remove-sauce-labs-onesie").click();
        cy.wait(1000);
        cy.xpath("//*[@id='item_4_title_link']").get("#remove-sauce-labs-backpack").click();
        cy.get("#shopping_cart_container .shopping_cart_badge").should('be.visible').then(element => 
            cy.log(element.text())).click();
    });


    // it("I do something", () => {
    //     cy.wait(2000);
    //     cy.get("#header_container .title").then(element => 
    //         cy.log(element.text()));
    //     cy.contains("Add to cart").should("be.visible");
    //     cy.get("#header_container .title").should('contain', "Products");
    //     cy.xpath("//*[@id='react-burger-menu-btn']").click();
    //     cy.get("#header_container .title").then((element) => {
    //         expect(element.text()).to.equal('Products')
    //     })
    //     cy.wait(1000);
    //     cy.get("#react-burger-cross-btn").click();
    //     cy.xpath("//*[@class='inventory_item_name']").each( item => {
    //         cy.log(item.text())
    //     })
    // });
})