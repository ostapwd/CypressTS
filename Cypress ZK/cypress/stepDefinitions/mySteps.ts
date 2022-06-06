import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import loginPageTs from "../support/pages/loginPageTs"
import users from "../data/users"
import registrationPage from "../support/pages/registrationPage"

Given(/^user navigate to the application$/, function () {
     loginPageTs.open()
});
When(/^user login to the application$/, function () {
   loginPageTs.loginUser(users.standardUser);
});

When(/^user add product$/, function () {
     loginPageTs.addProduct().click()
});
When(/^user go to cart$/, function () {
    loginPageTs.goToCart()
});
When (/^user choose product$/, function () {
   loginPageTs.checkOut().click()
 });

Then(/^user regisatration on the site$/, function () {
     registrationPage.registrationUser('Korets','Zoriana','79000')
    });
