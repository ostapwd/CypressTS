import users from "../data/users";
import loginPagePractice from "../support/pages/loginPagePractice";

describe('Test suite for login', () => {
    beforeEach(function() { 
        loginPagePractice.open()
    });
    before(function() { 
        cy.log('Main before');
    });
    describe.skip('Test suite for login', () => {
        before(function() { 
            cy.log('Internal before');
        });

        beforeEach(function() {  
            loginPagePractice.loginToTheApp("standard_user", "secret_sauce");
        });
        
        it('Test 1 (positive login)', () => {
            cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
            cy.xpath("//*[@id='inventory_container']").should('be.visible');
            cy.get("span.title").should('contain', 'Products');
            cy.get("span.title").should('have.text', 'Products')
        })

        it('Test 2 (positive login)', () => {
            cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
            cy.xpath("//*[@id='inventory_container']").should('be.visible');
            cy.get("span.title").should('contain', 'Products')
        })
        after(function() {
            cy.log('internal after Finish')
        });
    })

    describe('Test suite for login', () => {
        it('Test 2 (negative login)', () => {
            loginPagePractice.loginToTheApp(users.notRegisterUser);
            cy.xpath("//*[@data-test='error']").should('be.visible');
            cy.get("h3[data-test='error']").should('contain', 'Epic sadface: Username and password do not match any user in this service');
        })
        it('Test 2 (negative login)', () => {
            loginPagePractice.loginToTheApp(users.notPasswordUser);
            cy.xpath("//*[@data-test='error']").should('be.visible');
            cy.get("h3[data-test='error']").should('contain', 'Epic sadface: Password is required');
        })
    })
    after(function() {
        cy.log('Finish')
    });
})