
import usersForSwaglabs from "../../data/usersForSwaglabs";
import {LoginPageSwaglabs} from "../../support/pages/swaglabsPagesTheLastVersion/loginPageSwaglabs";
import { ProductPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/productPageSwaglabs";

const l = new LoginPageSwaglabs();
const p = new ProductPageSwaglabs();

describe ("Test suite 5", function () {
    beforeEach(function () {
        l.open()
        .loginToTheApp(usersForSwaglabs.standardUser)
        p.productLabelChecking()
    });

     it('Test 1 "Checking links of products"', function () {
        p.productLinkSouseLabsCheck()
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