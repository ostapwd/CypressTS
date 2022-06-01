import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

import loginPageTs from "../support/pages/loginPageTs"
import users from "../data/users"
import registrationPage from "../support/pages/registrationPage"

Given(/^user navigate to the application$/, function () {
    new loginPageTs.open();
});
When(/^user login to the application$/, function () {
    new loginPageTs.loginUser(users.standardUser);
});
When(/^user add product$/, function () {
    new loginPageTs.addProduct.click()
});
When(/^user go to cart$/, function () {
   new loginPageTs.goToCart()
});
When(/^user choose product$/, function () {
   new loginPageTs.checkOut()
 });

Then(/^user regisatration on the site$/, function () {
    new registrationPage.registrationUser('Paraniak','Nataliia','79491')
    });
