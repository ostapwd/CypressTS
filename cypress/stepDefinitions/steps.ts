import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import users from '../data/SwagLabs/users';
import { LoginPageSwagLabsTS } from '../support/pagesSwagLabs/loginPageSwagLabsTS';
import { ProductPageSwagLabsTS } from '../support/pagesSwagLabs/productPageSwagLabsTS';

let loginPage = new LoginPageSwagLabsTS();
let productsCart = new ProductPageSwagLabsTS();

Given(/^Existing user navigates to the app$/, function () {
    loginPage.open();
});
When(/^They provide correct credentials$/, function () {
    loginPage.loginToTheApp(users.standardUser);
});
When(/^Click on Login button/, function () {
    loginPage.clickOnButtonLogin()
});
When(/^They add all products to the cart$/, function () {
    productsCart.addToCartAllproducts()
});
Then(/^All products should be in the cart$/, function () {
   productsCart.getQuantityProductsInCart().then(elem => {
        expect(elem.text()).to.be.equal("6");
    });
});


