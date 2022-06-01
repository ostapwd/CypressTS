import shoppersForSwaglabs from "../../data/shoppersForSwaglabs";
import usersForSwaglabs from "../../data/usersForSwaglabs";
import { LoginPageSwaglabs } from "../../support/pages/swaglabsPages/loginPageSwaglabs";
import { ProductPageSwaglabs } from "../../support/pages/swaglabsPages/productPageSwaglabs";
import { CheckoutPageSwaglabs } from "../../support/pages/swaglabsPages/checkoutPageSwaglabs";
import { YourCardPageSwaglabs } from "../../support/pages/swaglabsPages/yourCardPageSwaglabs"


describe("Test suite 4 for hecking and buying the products", function () {

    beforeEach(function () {
        new LoginPageSwaglabs().open()
            .loginToTheApp(usersForSwaglabs.standardUser)
        new ProductPageSwaglabs().checkProductsLabelInTheProductPage().should("contain", "Products")
    });

    it('Test 1 "Adding to the cart all products and buying the products"', function () {

        new ProductPageSwaglabs().addToCartAllProducts().each(item => {
            item.click()
        })
        new ProductPageSwaglabs().clickOnTheShoppingCartContainer()
            .logAllProducts()
        new YourCardPageSwaglabs().verifyThatNumbersOfSelectedProductsEquals().then(element => {
            expect(element.text()).to.be.equal('6')
        });
        new YourCardPageSwaglabs().checkoutButtonClickOnPageYourCard()
        new CheckoutPageSwaglabs().checkoutLabelShouldContainInThePageCheckout().should("contain", "Checkout: Your Information")
        new CheckoutPageSwaglabs().inputInformationAboutBuyer(shoppersForSwaglabs.standartShopper);
        new CheckoutPageSwaglabs().buttonContinueClick()
            .checkoutOverviewShouldContain().should("contain", "Checkout: Overview")
        new CheckoutPageSwaglabs().buttonFinishClick()
            .checkoutCompleteShouldContainText().should("contain", "Checkout: Complete!")
        new CheckoutPageSwaglabs().buttonBackHomeClick()
        new ProductPageSwaglabs().checkProductsLabelInTheProductPage().should("contain", "Products")

    });

    it('Test 2 "Adding to the cart one product, checout it and then cancel"', function () {

        new ProductPageSwaglabs().addToCardOneProductandClick()
            .clickOnTheShoppingCartContainer()
            .logAllProducts().each(item => {
                cy.log(item.text())
            })
        new YourCardPageSwaglabs().verifyThatNumbersOfSelectedProductsEquals().then(element => {
            expect(element.text()).to.be.equal('1')
        });
        new YourCardPageSwaglabs().checkoutButtonClickOnPageYourCard()
        new CheckoutPageSwaglabs().checkoutLabelShouldContainInThePageCheckout().should("contain", "Checkout: Your Information")
        new CheckoutPageSwaglabs().clickOnTheButtonCancel()
        new ProductPageSwaglabs().shoppingCardLableShouldContainText().should("contain", "Your Cart");

    });

    afterEach(function () {
        cy.log("after Each");
    });

});