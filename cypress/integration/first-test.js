describe ("First test", function () {
   it("Login", function () {

      cy.visit("https://www.saucedemo.com/");

      cy.xpath('//*[@id="user-name"]').type('standard_user');
      cy.get("input[name='password']").type("secret_sauce");
      cy.get("input[data-test='login-button']");
      cy.contains('Login')
      .click();

      cy.get("#header_container .title").then(element => 
      cy.log(element.text() )
       );
       
   });
   it("Invalid passvord", function () {

       cy.visit("https://www.saucedemo.com/");

       cy.xpath('//*[@id="user-name"]').type("standard_user");
       cy.xpath("//input[@placeholder='Password']").type("secret_sauce123");
       cy.xpath("//input[contains(@id, 'login-button')]");
       cy.contains('Login')
       .click()
       cy.get('[data-test="error"]').then( label => {
           expect(label.text()).to.equal('Epic sadface: Username and password do not match any user in this service');
         });
    });

    it('Adding/deleting the item to/from the "Shopping cart"', function () {

       cy.visit("https://www.saucedemo.com/");

       cy.xpath('//*[@id="user-name"]').type("standard_user");
       cy.xpath("//input[@placeholder='Password']").type("secret_sauce");
       cy.get("input[data-test='login-button']");
       cy.contains('Login')
       .click()

       cy.get("#add-to-cart-sauce-labs-backpack").click();
       cy.xpath("//div[@id='shopping_cart_container']").click();
       cy.xpath("//div[@class='bm-burger-button']").click();
       cy.contains("All Items").click();


       cy.xpath("//button[@id='remove-sauce-labs-backpack']").click();

       cy.get("div .shopping_cart_link").click();

    });
    it('Adding/deleting the item to/from the "Shopping cart - Another way"', function () {

       cy.visit("https://www.saucedemo.com/");

       cy.xpath('//*[@id="user-name"]').type("standard_user");
       cy.get("input[name='password']").type("secret_sauce");
       cy.get("input[data-test='login-button']");
       cy.contains('Login')
       .click();

       cy.get("#add-to-cart-sauce-labs-backpack").click();
       cy.get(".shopping_cart_badge").click();
       cy.xpath("//div[@class='header_secondary_container']").then( label => {
       expect(label.text()).to.equal('Your Cart');
       cy.get("button[name='remove-sauce-labs-backpack']").click();
       cy.xpath("//button[@id='continue-shopping']").click();
    });
});
});
