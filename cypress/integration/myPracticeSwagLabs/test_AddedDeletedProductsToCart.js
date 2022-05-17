
import users from "../../data/users.js";
import { ProductPageTSPractice } from './../../support/pagesMyPractice/productPageTSPractice';
import { LoginPageTSPractice } from './../../support/pagesMyPractice/loginPageTSPractice';

const loginPage = new LoginPageTSPractice();
const productsPage = new ProductPageTSPractice();

describe('Test suite added and deleted products to shopping cart', () => {
  
    beforeEach('Opened the application', () => {
        cy.log('Start')
        loginPage.open().loginToTheApp(users.standardUser)
    });
        it('Verify a user added products to shopping cart', () => {
            productsPage
                .logAllProducts()
                .addToCartAllproducts()
                .verifySelectedProductsNumber()
        });
        it.only('Verify a user deleted products from shopping cart', () => {
            productsPage
                .logAllProducts()
                .addToCartAllproducts()
                .verifySelectedProductsNumber()
                .deleteFromCartAllproducts()
                .verifySelectedProductsNumberHidden()
        });
    afterEach(() => {
        cy.log('Finish')
    });
});
