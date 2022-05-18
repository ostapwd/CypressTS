
import { ProductPageTSPractice } from '../../support/pagesMyPractice/productPageTSPractice';
import { LoginPageTSPractice } from '../../support/pagesMyPractice/loginPageTSPractice';
import users from '../../data/users.js';

const loginPage = new LoginPageTSPractice();
const productsPage = new ProductPageTSPractice();

describe('Test suite to test web elements on the products page', () => {
    before('Opened the Products page', () => {
        cy.log('Start')
        loginPage.open().loginToTheApp(users.standardUser);
    });
        it('Verify the URL of the products page is displayed in the browser address bar', () => {
            productsPage.verifyUrlProductsPage();
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
