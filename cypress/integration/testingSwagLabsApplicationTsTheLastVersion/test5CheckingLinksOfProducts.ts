
import usersForSwaglabs from "../../data/usersForSwaglabs";
import { LoginPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/loginPageSwaglabs";
import { ProductPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/productPageSwaglabs";

const loginPage = new LoginPageSwaglabs();
const productPage = new ProductPageSwaglabs();

describe("Test suite 5", function () {
    beforeEach(function () {
        loginPage.open()
            .loginToTheApp(usersForSwaglabs.standardUser)
        productPage.checkProductsLabelInTheProductPage().should("contain", "Products")
    });

    it('Test 1 "Checking links of products Souse Labs Check"', function () {
        productPage.clickOnProductLinkSouseLabsCheck()
            .clickButtonBackToProducts()
    });

    it('Test 2 "Checking links of products Sauce Labs Bolt T-Shirt"', function () {
        productPage.clickOnProductLinkSauceLabsBoltTShirt()
            .clickButtonBackToProducts()
    });

    it('Test 4 "Checking links of products Sauce Labs Fleece Jacket"', function () {
        productPage.clickOnProductLinkSauceLabsFleeceJacket()
            .clickButtonBackToProducts()
    });

    it('Test 5 "Checking links of products Sauce Labs Onesie"', function () {
        productPage.clickOnProductLinkSauceLabsOnesie()
            .clickButtonBackToProducts()
    });

    it.only('Test 6 "Checking links of products Test All The Things T-Shirt Red"', function () {
        productPage.clickOnProductLinkTestAllTheThingsTShirtRed()
            .clickButtonBackToProducts()
    })
    afterEach(function () {
        cy.log("after Each");
    });
})