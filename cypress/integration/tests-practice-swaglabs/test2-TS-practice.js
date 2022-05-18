//import loginPage from "../support/pages/loginPage-practice";
//import productPagePractice from "../support/pages/productPage-practice";
import users from "../../data/users";
import {LoginPageTs} from "../../support/pages/loginPageTS-practice";
import { ProductPageTs } from "../../support/pages/productPageTS-practice";

const p = new ProductPageTs();
const l = new LoginPageTs();

describe ("Test suite 2", function () {
    
    before(function () {
        cy.log("Main before");
    });

    beforeEach(function () {
        l.open()
        .loginToTheApp(users.standardUser)
        .productsLabel.should("contain", "Products");
    });

     it('Test 1 "Adding/deleting one product to/from the Shopping cart"', function () {
      
         p.addToCard.click();
         p.shoppingCartContainer.click();
         p.burgerButton.click();
         p.allItemsButton.click();
         p.productsLabel.should("contain", "Products");
         p.removeOneProductFromTheCard()
         .shoppingCartContainer.click();
         p.shoppingCardLable.should("contain", "Your Cart");
        
     });
 
 
     it('Test 2 "Adding/deleting the item to/from the Shopping cart - Another way"', function () {
 
        p.addToCard.click();
        p.shoppingCartContainer.click();
        p.shoppingCardLable.should("contain", "Your Cart");
        p.removeOneProductFromTheCard()
        .buttonContinueShopping.click();
        p.productsLabel.should("contain", "Products");

       });
    
 
 
    it('Test 3 "Verify that a user can add/delete all products to/from the Shopping cart"', function () {
 
        p.addToCartAllProducts()
        .shoppingCartContainer.click();
        p.shoppingCardLable.should("contain", "Your Cart");
        p.allChosedProducts.should("contain", "1");
        p.verifyThatNumbersOfSelectedProductsEquals('6');
        p.removeFromCardAllProducts()
        .buttonContinueShopping.click();
        p.productsLabel.should("contain", "Products");
        
       });

    
       it('Test 4 "Reduced test adding/deleting all products to/from the Shopping cart "', function () {
 
        p.addToCartAllProducts()
        .shoppingCartContainer.click();
        p.logAllProducts()
        .verifyThatNumbersOfSelectedProductsEquals('6');
        p.removeFromCardAllProducts();
        p.buttonContinueShopping.click();

       });
       

    afterEach(function () {
        cy.log("after Each");
    });
 
    after(function () {
        cy.log("Main after");

    });
 
 });
 


    