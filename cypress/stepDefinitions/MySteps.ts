import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

import customers from "../data/customers";
import bills from "../data/bills";
import contacts from "../data/contacts";

import {RegisterPage} from "../support/pages/registerPage";
import {BillPage} from "../support/pages/billPage";
import {ContactsPage} from "../support/pages/contactsPage";

let registerPage;
let customerPage;

// Case #1: successful registration
Given(/^A customer navigates to the registration page$/, function () {
    registerPage = new RegisterPage().open();
});

When(/^They provide correct registration details$/, function () {
    customerPage = registerPage.registerCustomer(customers.validCustomer_1).waitForPageToBeLoaded();
});

Then(/^New customer is successfully registered$/, function () {
    customerPage.welcomeHeader().then(header => {
        expect(header.text()).to.be.equal(`Welcome ${customers.validCustomer_1.username}`);
    });
});

// Case #2: form validation error
Given(/^A customer navigates to the registration page$/, function () {
    registerPage = new RegisterPage().open();
});

When(/^They provide incorrect registration details$/, function () {
    registerPage.registerCustomer(customers.invalidCustomer).waitForPageToBeLoaded();
});

Then(/^Customer recieve error message$/, function () {
    cy.get("#customer\\.lastName\\.errors").then(span => {
        expect(span.text()).to.be.equal("Last name is required.");
    });
});

// Case #3: registration of existing user
Given(/^A customer navigates to the registration page$/, function () {
    registerPage = new RegisterPage().open();
});

When(/^They provide correct registration details$/, function () {
    registerPage.registerCustomer(customers.validCustomer_1).waitForPageToBeLoaded();
});

When(/^They go to the registration page again$/, function () {
    registerPage.open();
});

Then(/^Customer recieve error message that such username already exists$/, function () {
    cy.get("#customer\\.username\\.errors").then(span => {
        expect(span.text()).to.be.equal("This username already exists.");
    });
});
