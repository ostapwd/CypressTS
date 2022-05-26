import shoppersForSwaglabs from "../../data/shoppersForSwaglabs";
import usersForSwaglabs from "../../data/usersForSwaglabs";
import { LoginPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/loginPageSwaglabs";
import { ProductPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/productPageSwaglabs";
import { CheckoutPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/checkoutPageSwaglabs";
import { YourCardPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/yourCardPageSwaglabs"

const l = new LoginPageSwaglabs();
const p = new ProductPageSwaglabs();
const c = new CheckoutPageSwaglabs();
const y = new YourCardPageSwaglabs();

describe ("Test suite 4", function () {

    beforeEach(function () {
        l.open()
        .loginToTheApp(usersForSwaglabs.standardUser)
        p.productLabelChecking()
    });

    it('Test 1 "Adding to the cart all products and buying the products"', function () {
 
        p.addToCartAllProducts()
        .clickOnTheShoppingCartContainer()
        .logAllProducts()
        y.verifyThatNumbersOfSelectedProductsEquals('6');
        y.checkoutButtonClick()
        c.checkoutLabelShouldContain()
        .inputInformationAboutBuyer(shoppersForSwaglabs.standartShopper);
        c.buttonContinueClick()
        .checkoutOverviewShouldContain()
        .buttonFinishClick()
        .checkoutCompleteShouldContainText()
        .buttonBackHomeClick()
        p.productLabelChecking()
    
    });

    it('Test 2 "Adding to the cart one product, checout it and then cancel"', function () {
        
        p.addToCardOneProduct()
        .clickOnTheShoppingCartContainer()
        p.logAllProducts()
        y.verifyThatNumbersOfSelectedProductsEquals('1');
        y.checkoutButtonClick()
        c.checkoutLabelShouldContain()
        .clickOnTheButtonCancel()
        p.shoppingCardLableShouldContainText()
  
    });

    afterEach(function () {
        cy.log("after Each");
    });
 
 });