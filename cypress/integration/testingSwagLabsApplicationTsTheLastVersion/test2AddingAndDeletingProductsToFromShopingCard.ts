
import usersForSwaglabs from "../../data/usersForSwaglabs";
import {LoginPageSwaglabs} from "../../support/pages/swaglabsPagesTheLastVersion/loginPageSwaglabs";
import { ProductPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/productPageSwaglabs";
import { YourCardPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/yourCardPageSwaglabs";
import { BurgerMenuPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/burgerMenuPageSwaglabs"

const l = new LoginPageSwaglabs();
const p = new ProductPageSwaglabs();
const y = new YourCardPageSwaglabs();
const b = new BurgerMenuPageSwaglabs();

describe ("Test suite 2", function () {
    beforeEach(function () {
        l.open()
        .loginToTheApp(usersForSwaglabs.standardUser)
        p.productLabelChecking()
    });

     it('Test 1 "Adding/deleting one product to/from the Shopping cart"', function () {

        p.addToCardOneProduct()
        .clickOnTheShoppingCartContainer() 
        b.clickOnTheBurgerButton()
        .clickOnTheAllItemsButton()
        p.productLabelChecking()
        y.removeItemFromTheCard()
        p.clickOnTheShoppingCartContainer()
        .shoppingCardLableShouldContainText()

    });
 
     it('Test 2 "Adding/deleting the item to/from the Shopping cart - Another way"', function () {
 
        p.addToCartAllProducts()
        .clickOnTheShoppingCartContainer()
        .shoppingCardLableShouldContainText()
        y.removeOneProductFromTheContainer()
        .clickOnTheButtonContinueShopping()
        p.productLabelChecking()

    });
    
 
    it('Test 3 "Verify that a user can add/delete all products to/from the Shopping cart"', function () {
 
        p.addToCartAllProducts()
        .clickOnTheShoppingCartContainer()
        .shoppingCardLableShouldContainText()
        y.allChoosedProductsShouldContainNumber()
        .qualityOfItemsInTheCartMustBee()
        .removeFromCardAllProducts()
        .clickOnTheButtonContinueShopping()
        p.productLabelChecking()
        
    });

    
       it('Test 4 "Reduced test adding/deleting all products to/from the Shopping cart "', function () {
 
        p.addToCartAllProducts()
        .clickOnTheShoppingCartContainer()
        .logAllProducts()
        y.verifyThatNumbersOfSelectedProductsEquals('6')
        .removeFromCardAllProducts()
        .clickOnTheButtonContinueShopping()

    });
    
    afterEach(function () {
        cy.log("after Each");
    });
});