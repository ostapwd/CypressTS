
import usersForSwaglabs from "../../data/urersForSwaglabs";
import {LoginPageSwaglabs} from "../../support/pages/swaglabsPagesTheLastVersion/loginPageSwaglabs";
import { ProductPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/productPageSwaglabs";

const l = new LoginPageSwaglabs();
const p = new ProductPageSwaglabs();

describe ("Test suite 2", function () {
    beforeEach(function () {
        l.open()
        .loginToTheApp(usersForSwaglabs.standardUser)
        p.puroductLabelChecking()
    });

     it('Test 1 "Adding/deleting one product to/from the Shopping cart"', function () {

        p.addToCardOneProduct()
        .clickOnTheShoppingCartContainer() 
        .clickOnTheBurgerButton()
        .clickOnTheAllItemsButton()
        .puroductLabelChecking()
        .removeItemFromTheCard()
        p.clickOnTheShoppingCartContainer()
        .shoppingCardLableShouldContainText()

    });
 
     it('Test 2 "Adding/deleting the item to/from the Shopping cart - Another way"', function () {
 
        p.addToCartAllProducts()
        .clickOnTheShoppingCartContainer()
        .shoppingCardLableShouldContainText()
        .removeOneProductFromTheContainer()
        .clickOnTheButtonContinueShopping()
        .puroductLabelChecking()

    });
    
 
    it('Test 3 "Verify that a user can add/delete all products to/from the Shopping cart"', function () {
 
        p.addToCartAllProducts()
        .clickOnTheShoppingCartContainer()
        .shoppingCardLableShouldContainText()
        .allChoosedProductsShouldContainNumber()
        .qualityOfItemsInTheCartMustBee()
        .removeFromCardAllProducts()
        .clickOnTheButtonContinueShopping()
        .puroductLabelChecking()
        
    });

    
       it.only('Test 4 "Reduced test adding/deleting all products to/from the Shopping cart "', function () {
 
        p.addToCartAllProducts()
        .clickOnTheShoppingCartContainer()
        .logAllProducts()
        .verifyThatNumbersOfSelectedProductsEquals('6')
        .removeFromCardAllProducts()
        .clickOnTheButtonContinueShopping()

    });
    
    afterEach(function () {
        cy.log("after Each");
    });
});