import shopersForSwaglab from "../../data/shopersSwaglabs";
import usersForSwaglabs from "../../data/urersForSwaglabs";
import { LoginPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/loginPageSwaglabs";
import { ProductPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/productPageSwaglabs";
import { CheckoutPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/checkoutPageSwaglabs";

const l = new LoginPageSwaglabs();
const p = new ProductPageSwaglabs();
const c = new CheckoutPageSwaglabs();

describe ("Test suite 4", function () {

    beforeEach(function () {
        l.open()
        .loginToTheApp(usersForSwaglabs.standardUser)
        p.puroductLabelChecking()
    });

    it('Test 1 "Adding to the cart all products and buying the products"', function () {
 
        p.addToCartAllProducts()
        .clickOnTheShoppingCartContainer()
        .logAllProducts()
        .verifyThatNumbersOfSelectedProductsEquals('6');
        c.checkoutButtonClick()
        .checkoutLabelShouldContain()
        .inputInformationAboutBuyer(shopersForSwaglab.standartShoper);
        c.buttonContinueClick()
        .checkoutOverviewShouldContain()
        .buttonFinishClick()
        .checkoutCompleteShouldContainText()
        .buttonBackHomeClick()
        p.puroductLabelChecking()
    
    });

    it('Test 2 "Adding to the cart one prodact, checout it and then cancel"', function () {
        
        p.addToCardOneProduct()
        .clickOnTheShoppingCartContainer()
        p.logAllProducts()
        .verifyThatNumbersOfSelectedProductsEquals('1');
        c.checkoutButtonClick()
        .checkoutLabelShouldContain()
        .clickOnTheButtonCancel()
        p.shoppingCardLableShouldContainText()
  
    });

    afterEach(function () {
        cy.log("after Each");
    });
 
 });