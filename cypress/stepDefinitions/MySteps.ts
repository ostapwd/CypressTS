import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

import customers from "../data/customers";
import bills from "../data/bills";
import contacts from "../data/contacts";

import {RegisterPage} from "../support/pages/registerPage";
import {BillPage} from "../support/pages/billPage";
import {ContactsPage} from "../support/pages/contactsPage";

let registerPage;

Given(/^A customer navigates to the registration page$/, function () {
    registerPage = new RegisterPage().open();
});

When(/^They provide correct registration details$/, function () {
    registerPage.registerCustomer(customers.validCustomer).waitForPageToBeLoaded();
});

Then(/^New customer is successfully registered$/, function () {
    registerPage.registerCustomer(customers.validCustomer).waitForPageToBeLoaded().welcomeHeader().then(header => {
        expect(header.text()).to.be.equal(`Welcome ${customers.validCustomer.username}`);
    });
});
