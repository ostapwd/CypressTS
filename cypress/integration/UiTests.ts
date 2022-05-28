import customers from "../data/customers";
import {RegisterPage} from "../support/pages/registerPage";

describe('Test Register Functionality', () => {
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
        registerPage.registerCustomer(customers.validCustomer).waitForPageToBeLoaded().welcomeHeader().then(header => {
            expect(header.text()).to.be.equal(`Welcome ${customers.validCustomer.username}`);
        });
    });

     it('Verify a customer can not register twice', () => {
        registerPage.registerCustomer(customers.validCustomer).waitForPageToBeLoaded();

        cy.get("#customer\\.username\\.errors").then(span => {
            expect(span.text()).to.be.equal("This username already exists.");
        });

        });  
  
});
