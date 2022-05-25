
import usersForSwaglabs from "../../data/urersForSwaglabs";
import {LoginPageSwaglabs} from "../../support/pages/swaglabsPagesTheLastVersion/loginPageSwaglabs";
import { ProductPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/productPageSwaglabs";

const l = new LoginPageSwaglabs();
const p = new ProductPageSwaglabs();

describe ("Test suite 5", function () {
    beforeEach(function () {
        l.open()
        .loginToTheApp(usersForSwaglabs.standardUser)
        p.puroductLabelChecking()
    });

     it('Test 1 "Checking links of products"', function () {
        p.productLinkSouseLabsCheck()

    });
    
    afterEach(function () {
        cy.log("after Each");
    });
});