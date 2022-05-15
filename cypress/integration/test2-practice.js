import loginPage from "../support/pages/loginPage-practice";
import productPagePractice from "../support/pages/productPage-practice";
import users from "../data/users";

describe ("Test suite 2", function () {

     it('Test 1 "Adding/deleting one product to/from the Shopping cart"', function () {

        loginPage.open();
        loginPage.loginToTheApp(users.standardUser);
        productPagePractice.productsLabel.should("contain", "Products");
        productPagePractice.addToCard.click();
        productPagePractice.shoppingCartContainer.click();
        productPagePractice.burgerButton.click();
        productPagePractice.allItemsButton.click();
        productPagePractice.productsLabel.should("contain", "Products");
        productPagePractice.removeFromTheCard.each(item =>
            cy.log(item.text()).click()
        );
        productPagePractice.shoppingCartContainer.click();
        productPagePractice.shoppingCardLable.should("contain", "Your Cart");
        
     });
 
 
     it('Test 2 "Adding/deleting the item to/from the Shopping cart - Another way"', function () {
 
        loginPage.open();
        loginPage.loginToTheApp(users.standardUser);
        productPagePractice.productsLabel.should("contain", "Products");
        productPagePractice.addToCardAll.each(item => {
            item.click();
        });
        productPagePractice.shoppingCartContainer.click();
        productPagePractice.shoppingCardLable.should("contain", "Your Cart");
        productPagePractice.remoutProductFromTheContainer.click();
        productPagePractice.buttonContinueShopping.click();
        productPagePractice.productsLabel.should("contain", "Products");
       });
    
 
 
    it('Test 3 "Verify that a user can add/delete all products to/from the Shopping cart"', function () {
 
        loginPage.open();
        loginPage.loginToTheApp(users.standardUser);
        productPagePractice.productsLabel.should("contain", "Products");
        productPagePractice.addToCartAllProducts();
        productPagePractice.shoppingCartContainer.click();
        productPagePractice.shoppingCardLable.should("contain", "Your Cart");
        productPagePractice.allChosedProducts.should("contain", "1");
        productPagePractice.CualityOfItemsInTheCart.then(element => {
            expect(element.text()).to.be.equal('6');
        });
        productPagePractice.removeFromCardAllProducts();
        productPagePractice.buttonContinueShopping.click();
        productPagePractice.productsLabel.should("contain", "Products");
        
       });

    

       it('Test 4 "Reduced test adding/deleting all products to/from the Shopping cart "', function () {
 
        loginPage.open()
        .loginToTheApp(users.standardUser)
        .addToCartAllProducts();
        productPagePractice.shoppingCartContainer.click();
        productPagePractice.logAllProducts()
        .verifyThatNumbersOfSelectedProductsEquals('6');
        productPagePractice.removeFromCardAllProducts();
        productPagePractice.buttonContinueShopping.click();

       });

       it.only('Test 5 "Testing Pseudo CSS selector "::after" ', function () {

        loginPage.open()
        .loginToTheApp(users.standardUser)
        .propertyValue();

        cy.xpath("//span[@class='select_container']")
        .debug().invoke('show').click();
        cy.get(".select_container").should("be.visible").click();
        cy.get("span[class='active_option']").should("be.visible").should('have.length', 1).contains('Name (A to Z)').click({force: true})
        cy.get(".product_sort_container option").not(':visible').should('have.length', 4);
        cy.get("span[class='active_option']").should('not.have.css', 'content', '""');
        cy.get(".select_container")
             .should($priceEl => {    
              expect(Cypress.dom.isVisible($priceEl)).to.eq(true);
            });
        cy.get("span[class='active_option']").contains('Name (A to Z)').click({force: true}); 
        cy.xpath('//span[@class="active_option"]').should('contain', 'Name (A to Z)').click({force: true});
        cy.get('span[class="select_container"]').find('[value="az"]')
        .should('contain', 'Name (A to Z)').click({force: true});
        cy.contains('Name (Z to A)').click({force: true});
 
 });
 

});
    