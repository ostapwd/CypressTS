import shoppersForSwaglabs from "../../data/shoppersForSwaglabs";
import usersForSwaglabs from "../../data/usersForSwaglabs";
import { LoginPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/loginPageSwaglabs";
import { ProductPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/productPageSwaglabs";
import { CheckoutPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/checkoutPageSwaglabs";
import { YourCardPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/yourCardPageSwaglabs"



const checkoutPage = new CheckoutPageSwaglabs();
const yourCardPage = new YourCardPageSwaglabs();
const loginPage = new LoginPageSwaglabs();
const productPage = new ProductPageSwaglabs();

describe("Test suite 4 for hecking and buying the products", function () {

    beforeEach(function () {
        loginPage.open()
            .loginToTheApp(usersForSwaglabs.standardUser)
        productPage.checkProductsLabelInTheProductPage().should("contain", "Products")
    });

    it('Test 1 "Adding to the cart all products and buying the products"', function () {

        productPage.addToCartAllProducts().each(item => {
            item.click()
        })
        productPage.clickOnTheShoppingCartContainer()
            .logAllProducts()
        yourCardPage.verifyThatNumbersOfSelectedProductsEquals().then(element => {
            expect(element.text()).to.be.equal('6')
        });
        yourCardPage.checkoutButtonClickOnPageYourCard()
        checkoutPage.checkoutLabelShouldContainInThePageCheckout().should("contain", "Checkout: Your Information")
        checkoutPage.inputInformationAboutBuyer(shoppersForSwaglabs.standartShopper);
        checkoutPage.buttonContinueClick()
            .checkoutOverviewShouldContain().should("contain", "Checkout: Overview")
        checkoutPage.buttonFinishClick()
            .checkoutCompleteShouldContainText().should("contain", "Checkout: Complete!")
        checkoutPage.buttonBackHomeClick()
        productPage.checkProductsLabelInTheProductPage().should("contain", "Products")

    });

    it('Test 2 "Adding to the cart one product, checout it and then cancel"', function () {

        productPage.addToCardOneProductandClick()
            .clickOnTheShoppingCartContainer()
            .logAllProducts().each(item => {
                cy.log(item.text())
            })
        yourCardPage.verifyThatNumbersOfSelectedProductsEquals().then(element => {
            expect(element.text()).to.be.equal('1')
        });
        yourCardPage.checkoutButtonClickOnPageYourCard()
        checkoutPage.checkoutLabelShouldContainInThePageCheckout().should("contain", "Checkout: Your Information")
        checkoutPage.clickOnTheButtonCancel()
        productPage.shoppingCardLableShouldContainText().should("contain", "Your Cart");

    });

    afterEach(function () {
        cy.log("after Each");
    });

});