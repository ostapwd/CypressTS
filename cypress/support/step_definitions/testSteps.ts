import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';


import {LoginPageTS} from "../pages/loginPageTS";
//import users from "../../data/users";
import {ProductPageTS} from "../pages/productPageTS";
//import {Singleton} from "../support/Singleton";

//let loginPage:{};
Given(/^Existing user navigates to the app$/, function () {
     new LoginPageTS().open();
  
});
When(/^They provide correct credentials$/, function () {
    new LoginPageTS().loginToTheApp("standard_user", "secret_sauce");
});
When(/^They add all products to the cart$/, function () {
    new ProductPageTS().addToCardAllProducts()
});
Then(/^All products should be in the cart$/, function () {
    new ProductPageTS().verifyQuantityOfproducts(5);
});

/* When(/^They provide login (.*)$/, function (username: string) {
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
}); */