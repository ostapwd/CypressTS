describe ("First test", function () {
    it("Login", function () {

       cy.visit("https://www.saucedemo.com/");

       cy.get("#user-name").type("standard_user");
       cy.get("#password").type("secret_sauce");
       cy.get("#login-button");
       cy.contains('Login')
       .click();

       cy.get("#header_container .title").then(element => 
       cy.log(element.text() )
        );
        
    });
    it("Invalid passvord", function () {

        cy.visit("https://www.saucedemo.com/");

        cy.get("#user-name").type("standard_user");
        cy.get("#password").type("secret_sauce123");
        cy.get("#login-button");
        cy.contains('Login')
        .click()
        cy.get('[data-test="error"]').then( label => {
            expect(label.text()).to.equal('Epic sadface: Username and password do not match any user in this service');
          });
     });

     it('Adding/deleting the item to/from the "Shopping cart"', function () {

        cy.visit("https://www.saucedemo.com/");

        cy.get("#user-name").type("standard_user");
        cy.get("#password").type("secret_sauce");
        cy.get("#login-button");
        cy.contains('Login')
        .click()

        cy.get("#add-to-cart-sauce-labs-backpack").click();
        cy.get(".shopping_cart_badge").click();
        cy.get(".bm-burger-button").click();
        cy.contains("All Items").click();


        cy.get("#remove-sauce-labs-backpack").click();

        cy.get("#shopping_cart_container").click();

     });
     it('Adding/deleting the item to/from the "Shopping cart - Another way"', function () {

        cy.visit("https://www.saucedemo.com/");

        cy.get("#user-name").type("standard_user");
        cy.get("#password").type("secret_sauce");
        cy.get("#login-button");
        cy.contains('Login')
        .click();

        cy.get("#add-to-cart-sauce-labs-backpack").click();
        cy.get(".shopping_cart_badge").click();
        cy.get('.header_secondary_container').then( label => {
        expect(label.text()).to.equal('Your Cart');
        cy.get("#remove-sauce-labs-backpack").click();
        cy.get("#continue-shopping").click();
     });
});
});


