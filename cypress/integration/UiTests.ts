import customers from "../data/customers";
import bills from "../data/bills";
import contacts from "../data/contacts";

import {RegisterPage} from "../support/pages/registerPage";
import {BillPage} from "../support/pages/billPage";
import {ContactsPage} from "../support/pages/contactsPage";

describe('Customer Registration Tests', () => {
    let registerPage;

    beforeEach(() => {
        registerPage = new RegisterPage().open();
    });

    it('Verify required fields validation', () => {
        registerPage.registerCustomer(customers.invalidCustomer).waitForPageToBeLoaded();
        
        cy.get("#customer\\.lastName\\.errors").then(span => {
            expect(span.text()).to.be.equal("Last name is required.");
        });
    });

    it('Verify a customer can register on the site', () => {
        registerPage.registerCustomer(customers.validCustomer_1).waitForPageToBeLoaded().welcomeHeader().then(header => {
            expect(header.text()).to.be.equal(`Welcome ${customers.validCustomer_1.username}`);
        });
    });

     it('Verify a customer can not register twice', () => {
        registerPage.registerCustomer(customers.validCustomer_1).waitForPageToBeLoaded();

        cy.get("#customer\\.username\\.errors").then(span => {
            expect(span.text()).to.be.equal("This username already exists.");
        });
    });  
});

describe.only('Bill Payments Test', () => {
    let billPage;

    it('Verify a customer can register on the site', () => {

        new RegisterPage().open().registerCustomer(customers.validCustomer_1).waitForPageToBeLoaded().billPayLink().click();
        billPage = new BillPage();

        billPage.payBill(bills.validBill).waitForPageToBeLoaded().completeHeader().then(header => {
            expect(header.text()).to.be.equal("Bill Payment Complete");
        });
    });

    it('Verify required fields validation', () => {

        new RegisterPage().open().registerCustomer(customers.validCustomer_2).waitForPageToBeLoaded().billPayLink().click();
        billPage = new BillPage();

        billPage.payBill(bills.validBill).waitForPageToBeLoaded();
        
        cy.get("[ng-show*='!validationModel\\.address']").then(span => {
            expect(span.text()).to.be.equal("Address is required.");
        });
    });
  
});

describe('Customer Support Tests', () => {
    let contactsPage

    beforeEach(() => { 
        contactsPage = new ContactsPage().open();
    
    });

    it.skip('Verify a customer can send mail to support', () => {

        contactsPage.mailSupport(contacts.validContacts).waitForPageToBeLoaded().completeHeader().then(header => {
            expect(header.text()).to.be.equal("Customer Care");
        });
    });

    it('Verify required fields validation', () => {
        contactsPage.mailSupport(contacts.invalidContacts).waitForPageToBeLoaded();
        
        cy.get("#email\\.errors").then(span => {
            expect(span.text()).to.be.equal("Email is required.");
        });
    });
});
