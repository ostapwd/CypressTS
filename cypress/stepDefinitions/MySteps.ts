import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

import {LoginPage} from "../support/pages/loginPage";
import users from "../data/users";
import {InventoryPage} from "../support/pages/inventoryPage";

Given(/^Existing user navigates to the app$/, function () {
    new LoginPage().open();
});
When(/^They provide correct credentials$/, function () {
    new LoginPage().loginToTheApp(users.standardUser);
});
When(/^They add all products to the cart$/, function () {
    new InventoryPage().addToCartAllProducts()
});
Then(/^All products should be in the cart$/, function () {
    new InventoryPage().cartNumberLabel().then(label => {
        expect(label.text()).to.be.equal("5");
    });
});
