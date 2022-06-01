import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

import {LoginPage} from "../support/pages/loginPage";
import users from "../data/customers";
import {CustomerPage} from "../support/pages/customerPage";

let loginPage;
Given(/^Existing user navigates to the app$/, function () {
    loginPage = new LoginPage().open();
});
When(/^They provide correct credentials$/, function () {
    loginPage.loginToTheApp(users.standardUser);
});
When(/^They add all products to the cart$/, function () {
    new CustomerPage().addToCartAllProducts()
});
Then(/^All products should be in the cart$/, function () {
    new CustomerPage().cartNumberLabel().then(label => {
        expect(label.text()).to.be.equal("5");
    });
});

When(/^They provide login (.*)$/, function (username: string) {
    loginPage.setUsername(username);
});
When(/^They provide password (.*)$/, function (password) {
    loginPage.setPassword(password);
});
When(/^Click on Login button$/, function () {
    loginPage.clickLoginButton();
});
Then(/^An error message should appear (.*)$/, function (errorMessage) {
    loginPage.loginErrorMessage().then(element => {
        expect(element.text()).to.be.equal(errorMessage);
    })
});