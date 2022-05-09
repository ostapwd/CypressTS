/// <reference types="Cypress" />

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
      cy.log(element.text() ));
       
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


   it('Test 5 "Adding/deleting 4 items to/from the Shopping cart"', function () {

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


   it('Test 6 "Sampling testing"', function () {

      cy.get("input[name='password']").type("secret_sauce");
      cy.get("input[data-test='login-button']");
      cy.contains('Login')
      .click();

      cy.xpath("//select[@class='product_sort_container']").then( listValues => {
         expect(listValues[0]).to.contain('Name (A to Z)');
         expect(listValues[0]).to.contain('Name (Z to A)');
         expect(listValues[0]).to.contain('Price (low to high)');
         expect(listValues[0]).to.contain('Price (high to low)')
         cy.xpath('//span[@class="active_option"]').then( label => {
            expect(label.text()).to.equal('Name (A to Z)')

         })
            cy.get('.active_option').click(({force:true}))

      })
      
   })
   it('Test 7 "Testing Pseudo CSS selector "::after" ', function () {

      cy.get("input[name='password']").type("secret_sauce");
      cy.contains('Login')
      .click();
      
      cy.get(".select_container")
      .then($els => {
         const win = $els[0].ownerDocument.defaultView;
         const after = win.getComputedStyle($els[0], 'after');
         const contentValue = after.getPropertyValue('content');
         expect(contentValue).to.eq('""');
      });
 
      cy.xpath('//span[@class="active_option"]').should('contain', 'Name (A to Z)').click({force: true})
      cy.get('span[class="select_container"]').find('[value="az"]').should('contain', 'Name (A to Z)').click({force: true})
      cy.contains('Name (Z to A)').click({force: true});
   })

})
