import shoppersForSwaglabs from "../../data/shoppersForSwaglabs";
import usersForSwaglabs from "../../data/usersForSwaglabs";
import { LoginPageSwaglabs } from "../../support/pages/swaglabsPagesMoreSensitive/loginPageSwaglabs";
import { ProductPageSwaglabs } from "../../support/pages/swaglabsPagesMoreSensitive/productPageSwaglabs";
import { CheckoutPageSwaglabs } from "../../support/pages/swaglabsPagesMoreSensitive/checkoutPageSwaglabs";
import { YourCardPageSwaglabs } from "../../support/pages/swaglabsPagesMoreSensitive/yourCardPageSwaglabs"

const login = new LoginPageSwaglabs();
const product = new ProductPageSwaglabs();
const checkout = new CheckoutPageSwaglabs();
const yourCard = new YourCardPageSwaglabs();

describe("Test suite 4", function () {

    beforeEach(function () {
        login.open()
            .loginToTheApp(usersForSwaglabs.standardUser)
        product.productLabelChecking()
    });

    it('Test 1 "Adding to the cart all products and buying the products"', function () {

        product.addToCartAllProducts()
            .clickOnTheShoppingCartContainer()
            .logAllProducts()
        yourCard.verifyThatNumbersOfSelectedProductsEquals('6');
        yourCard.checkoutButtonClick()
        checkout.checkoutLabelShouldContain()
            .inputInformationAboutBuyer(shoppersForSwaglabs.standartShopper);
        checkout.buttonContinueClick()
            .checkoutOverviewShouldContain()
            .buttonFinishClick()
            .checkoutCompleteShouldContainText()
            .buttonBackHomeClick()
        product.productLabelChecking()

    });

    it('Test 2 "Adding to the cart one product, checout it and then cancel"', function () {

        product.addToCardOneProduct()
            .clickOnTheShoppingCartContainer()
        product.logAllProducts()
        yourCard.verifyThatNumbersOfSelectedProductsEquals('1');
        yourCard.checkoutButtonClick()
        checkout.checkoutLabelShouldContain()
            .clickOnTheButtonCancel()
        product.shoppingCardLableShouldContainText()

    });

    afterEach(function () {
        cy.log("after Each");
    });

});