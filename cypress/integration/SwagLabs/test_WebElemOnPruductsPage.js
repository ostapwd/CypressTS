import urlsPages from '../../data/urlsPages.js';
import users from '../../data/users.js';
import { LoginPageSwagLabsTS } from '../../support/pagesSwagLabs/loginPageSwagLabsTS';
import { ProductPageSwagLabsTS } from '../../support/pagesSwagLabs/productPageSwagLabsTS';

const loginPage = new LoginPageSwagLabsTS();
const productsPage = new ProductPageSwagLabsTS();

describe('Test suite to test web elements on the products page', () => {
    before('Opened the Products page', () => {
        cy.log('Start')
        loginPage.open().loginToTheApp(users.standardUser);
    });
        it('Verify the URL of the products page is displayed in the browser address bar', () => {
            productsPage.verifyUrlPage(urlsPages.productsPageUrl)
        });
        
        it('Verify a user can login to the aplication', () => {
            productsPage.verifyProductsLabel();
        });

        it('Verify the cart is displayed on the products page', () => {
            productsPage.verifyShoppingCartLabel()
        });

        it('Verify the select is displayed on the products page', () => {
            productsPage.verifySelectSortLabel()
        });
    
    afterEach(() => {
        cy.log('Finish')
    });
});
