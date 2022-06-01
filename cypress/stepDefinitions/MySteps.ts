import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

import {LoginPage} from "../support/pages/loginPage";
import users from "../data/customers";
import {CustomerPage} from "../support/pages/customerPage";

Given(/^Existing user navigates to the app$/, function () {
    new LoginPage().open();
});
When(/^They provide correct credentials$/, function () {
    new LoginPage().loginToTheApp(users.standardUser);
});
When(/^They add all products to the cart$/, function () {
    new CustomerPage().addToCartAllProducts()
});
Then(/^All products should be in the cart$/, function () {
    new CustomerPage().cartNumberLabel().then(label => {
        expect(label.text()).to.be.equal("5");
    });
});
