
import usersForSwaglabs from "../../data/usersForSwaglabs";
import { LoginPageSwaglabs } from "../../support/pages/swaglabsPagesMoreSensitive/loginPageSwaglabs";
import { ProductPageSwaglabs } from "../../support/pages/swaglabsPagesMoreSensitive/productPageSwaglabs";

const login = new LoginPageSwaglabs();
const product = new ProductPageSwaglabs();

describe("Test suite 5", function () {
    beforeEach(function () {
        login.open()
            .loginToTheApp(usersForSwaglabs.standardUser)
        product.productLabelChecking()
    });

    it('Test 1 "Checking the link of SouseLabsCheck "', function () {
        product.productLinkSouseLabsCheck()
            .clickButtonBackToProducts()


    });
    it('Test 2 "Checking the link of Sauce Labs Bike Light"', function () {
        product.clickProductLinkSauceLabsBikeLight()
            .clickButtonBackToProducts()
            .clickProductLinkSauceLabsBikeLight()

    });

    it('Test 3 "Checking the link of Sauce Labs Bolt T-Shirt "', function () {
        product.clickProductLinkSauceLabsBoltTShirt()
            .clickButtonBackToProducts()


    });

    it('Test 3 "Checking the link of Sauce Labs Fleece Jacket"', function () {
        product.clickProductLinkSauceLabsFleeceJacket()
            .clickButtonBackToProducts()

    });

    it('Test 4 "Checking the link of Sauce Labs Onesie"', function () {
        product.clickProductLinkSauceLabsOnesie()
            .clickButtonBackToProducts()

    });

    it('Test 5 "Checking the link of All The Things T-Shirt Red "', function () {
        product.clickProductLinkTestAllTheThingsTShirtRed()
            .clickButtonBackToProducts()

    });

    it('Test 6 "Checking all links of products ane by one "', function () {
        product.productLinkSouseLabsCheck()
            .clickButtonBackToProducts()
            .clickProductLinkSauceLabsBikeLight()
            .clickButtonBackToProducts()
            .clickProductLinkSauceLabsBoltTShirt()
            .clickButtonBackToProducts()
            .clickProductLinkSauceLabsFleeceJacket()
            .clickButtonBackToProducts()
            .clickProductLinkSauceLabsOnesie()
            .clickButtonBackToProducts()
            .clickProductLinkTestAllTheThingsTShirtRed()
            .clickButtonBackToProducts()

    });



    afterEach(function () {
        cy.log("after Each");
    });
});