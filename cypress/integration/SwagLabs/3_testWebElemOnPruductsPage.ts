import urlsPagesSwagLabs from '../../data/SwagLabs/urlsPagesSwagLabs';
import users from '../../data/SwagLabs/users';
import { LoginPageSwagLabsTS } from '../../support/pagesSwagLabs/loginPageSwagLabsTS';
import { ProductPageSwagLabsTS } from '../../support/pagesSwagLabs/productPageSwagLabsTS';

let loginPage = new LoginPageSwagLabsTS();
let productsPage = new ProductPageSwagLabsTS; 

describe('Test suite to test web elements on the products page', () => {
    beforeEach('Opened the Products page', () => {
        cy.log('Start')
        loginPage.open().loginToTheApp(users.standardUser).clickOnButtonLogin();
    });

        it('Verify the URL of the products page is displayed in the browser address bar', () => {
            productsPage
                .getUrlPage(urlsPagesSwagLabs.productsPageUrl)
        });
        
        it('Verify a user can login to the aplication', () => {
            productsPage
                .getPageLabel().should('be.visible').then(element => {
                    expect(element.text()).to.be.equal('Products');
                }); 
        });

        it('Verify the cart is displayed on the products page', () => {
            productsPage
                .getShoppingCartLabel().should('be.visible');
        });

        it('Verify the select is displayed on the products page', () => {
            productsPage
                .getSelectFilterByIndex(1)
        });
    
    afterEach('Logout of the App', () => {
        productsPage
            .waitForSeconds(1)
            .logoutOfTheApp()
    })
});
