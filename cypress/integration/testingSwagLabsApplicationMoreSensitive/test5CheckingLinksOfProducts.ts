
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

    it('Test 1 "Checking links of products"', function () {
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