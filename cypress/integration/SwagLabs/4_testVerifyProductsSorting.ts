import users from "../../data/SwagLabs/users";
import { LoginPageSwagLabsTS } from "../../support/pagesSwagLabs/loginPageSwagLabsTS";
import { ProductPageSwagLabsTS } from "../../support/pagesSwagLabs/productPageSwagLabsTS";

const loginPage = new LoginPageSwagLabsTS();
const productsPage = new ProductPageSwagLabsTS();

describe('Verify the filter drop-down list on the product page', () => {
    beforeEach('Login to the App', () => {
        cy.log('Start')
        loginPage.open().loginToTheApp(users.standardUser).clickOnButtonLogin();
    });
        it('Verify the filter drop-down list is shown on the screen', () => {
            productsPage
                .getSelectFilter('Name (A to Z)').should('be.visible')
        });

        it('Verify the filter drop-down list', () => {
            productsPage
                .getFirstProductName().should('be.visible').then(element => 
                    cy.log(element.text()))
            productsPage
                .getFirstProductPrice().should('be.visible').then(element => 
                    cy.log(element.text()));
            productsPage   
                .getSelectFilterByIndex(3)
            productsPage
                .getFirstProductName().should('be.visible').then(element => 
                    cy.log(element.text()))
            productsPage
                .getFirstProductPrice().should('be.visible').then(element => 
                    cy.log(element.text()));
            productsPage 
                .waitForSeconds(2)
                .getSelectFilter('Name (A to Z)')
            productsPage
                .waitForSeconds(2)
            productsPage
                .getFirstProductName().should('be.visible').then(element => 
                    cy.log(element.text()))
            productsPage
                .getFirstProductPrice().should('be.visible').then(element => 
                    cy.log(element.text()));
            productsPage 
                .getSelectFilterByIndex(2)
            productsPage
                .getFirstProductName().should('be.visible').then(element => 
                    cy.log(element.text()))
            productsPage
                .getFirstProductPrice().should('be.visible').then(element => 
                    cy.log(element.text()));
            productsPage 
                .waitForSeconds(2)
        });
            
    afterEach('Logout of the App', () => {
        productsPage
            .waitForSeconds(1)
            .logoutOfTheApp()
    })
});