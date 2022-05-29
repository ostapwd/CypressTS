import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

import {LoginPage} from "../support/pages/loginPage";
import users from "../data/users";
import {InventoryPage} from "../support/pages/inventoryPage";

let loginPage;
Given(/^Login page is open$/, function () {
    loginPage = new LoginPage().open();
});
When(/^They provide correct credentials$/, function () {
    loginPage.loginToTheApp(users.standardUser);
});

When(/^They input (.*) credentials$/, function (usertype) {
    loginPage.inputCreds(users[usertype]);
});

When(/^They add all products to the cart$/, function () {
    new InventoryPage().addToCartAllProducts()
});
Then(/^All products should be in the cart$/, function () {
    new InventoryPage().cartNumberLabel().then(label => {
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
Then(/^Inventory page is displayed$/, function () {
    new InventoryPage().productsLabel().then(label => {
        expect(label).to.exist;
    });
});
When(/^Press the Enter key in the password field$/, function () {
    loginPage.passwordPressEnter();
});