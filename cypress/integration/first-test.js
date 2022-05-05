describe ("First test", function () {

   beforeEach(function () {
      cy.log("Main before each");
      cy.visit("https://www.saucedemo.com/");
      cy.xpath('//*[@id="user-name"]').type('standard_user');
      });


   it("Test 1 'Login test'", function () {
   
      cy.get("input[name='password']").type("secret_sauce");
      cy.get("input[data-test='login-button']");
      cy.contains('Login')
      .click();

      cy.get("#header_container .title").then(element => 
      cy.log(element.text() )
       );
       
   });


   it("Test 2 'Invalid password'", function () {
     
       cy.xpath("//input[@placeholder='Password']").type("secret_sauce123");
       cy.xpath("//input[contains(@id, 'login-button')]");
       cy.contains('Login')
       .click()
       cy.get('[data-test="error"]').then( label => {
           expect(label.text()).to.equal('Epic sadface: Username and password do not match any user in this service');
         });
      });
  

    it('Test 3 "Adding/deleting the item to/from the Shopping cart"', function () {

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


    it('Test 4 "Adding/deleting the item to/from the Shopping cart - Another way"', function () {

       cy.get("input[name='password']").type("secret_sauce");
       cy.get("input[data-test='login-button']");
       cy.contains('Login')
       .click();

       cy.get("button[data-test='add-to-cart-sauce-labs-backpack']").click();
       cy.xpath("//span[@class='shopping_cart_badge']").click();
       cy.xpath("//div[@class='header_secondary_container']").then( label => {
       expect(label.text()).to.equal('Your Cart');
       cy.get("button[name='remove-sauce-labs-backpack']").click();
       cy.xpath("//button[@id='continue-shopping']").click();
      });
   });


   it.only('Test 5 "Adding/deleting 4 items to/from the Shopping cart"', function () {

       cy.get("input[name='password']").type("secret_sauce");
       cy.get("input[data-test='login-button']");
       cy.contains('Login')
       .click();

       cy.get("button[data-test='add-to-cart-sauce-labs-backpack']").click();
       cy.get("button[name='add-to-cart-sauce-labs-bolt-t-shirt']").click();
       cy.get("button[name='add-to-cart-sauce-labs-bike-light']").click();
       cy.xpath("//button[@name='add-to-cart-sauce-labs-fleece-jacket']").click();

       cy.xpath("//span[@class='shopping_cart_badge']").click();
       cy.xpath("//div[@class='header_secondary_container']").then( label => {
       expect(label.text()).to.equal('Your Cart');
       
       cy.xpath("//div[@class='cart_list']");
       cy.xpath("//a[@id='item_1_title_link']").then( label => {
         expect(label.text()).to.equal('Sauce Labs Bolt T-Shirt');
       
       cy.wait(500)
       
       cy.get("button[name='remove-sauce-labs-backpack']").click();
       cy.xpath("//button[@id='continue-shopping']").click();
      });
   });

})
})