
import usersForSwaglabs from "../../data/usersForSwaglabs";
import { LoginPageSwaglabs } from "../../support/pages/swaglabsPages/loginPageSwaglabs";
import { ProductPageSwaglabs } from "../../support/pages/swaglabsPages/productPageSwaglabs";

describe("Test suite 5", function () {
    beforeEach(function () {
        new LoginPageSwaglabs().open()
            .loginToTheApp(usersForSwaglabs.standardUser)
        new ProductPageSwaglabs().checkProductsLabelInTheProductPage().should("contain", "Products")
    });

    it('Test 1 "Checking links of products Souse Labs Check"', function () {
        new ProductPageSwaglabs().clickOnProductLinkSouseLabsCheck()
            .clickButtonBackToProducts()
    });

    it('Test 2 "Checking links of products Sauce Labs Bolt T-Shirt"', function () {
        new ProductPageSwaglabs().clickOnProductLinkSauceLabsBoltTShirt()
            .clickButtonBackToProducts()
    });

    it('Test 4 "Checking links of products Sauce Labs Fleece Jacket"', function () {
        new ProductPageSwaglabs().clickOnProductLinkSauceLabsFleeceJacket()
            .clickButtonBackToProducts()
    });

    it('Test 5 "Checking links of products Sauce Labs Onesie"', function () {
        new ProductPageSwaglabs().clickOnProductLinkSauceLabsOnesie()
            .clickButtonBackToProducts()
    });

    it.only('Test 6 "Checking links of products Test All The Things T-Shirt Red"', function () {
        new ProductPageSwaglabs().clickOnProductLinkTestAllTheThingsTShirtRed()
            .clickButtonBackToProducts()
    })
    afterEach(function () {
        cy.log("after Each");
    });
})