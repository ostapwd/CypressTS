
import users from '../../data/users.js';
import { CartPageTSPractice } from '../../support/pagesMyPractice/cartPageTSPractice.js';
import { LoginPageTSPractice } from '../../support/pagesMyPractice/loginPageTSPractice.js';
import { ProductPageTSPractice } from '../../support/pagesMyPractice/productPageTSPractice.js';


let loginPage = new LoginPageTSPractice()
let productsPage = new ProductPageTSPractice()
let cartPage = new CartPageTSPractice()

describe('Test suite to test web elements on the cart page', () => {
    before('Opened the Products page', () => {
        cy.log('Start')
        loginPage.open().loginToTheApp(users.standardUser);
    });
        it('Verify a user can open to the cart page', () => {
            productsPage
                .logAllProducts()
                .addToCartAllproducts()
                .verifySelectedProductsNumber()
                .openShoppingCart()
        });
        it('Verify products are displayed on the shopping cart page', () => {
            productsPage
                .logAllProducts()
                .addToCartAllproducts()
                .verifySelectedProductsNumber()
                .openShoppingCart()
            cartPage
                .verifyUrlCart()
                .quantityOfSelectedProductsInCart()
                .logAllProductsInCart()
                .verifyShoppingCartLabel()

                
        });
        // it('Verify the cart is displayed on the products page', () => {
        //     productsPage.verifyShoppingCartLabel()
        // });
        // it('Verify the select is displayed on the products page', () => {
        //     productsPage.verifySelectSortLabel()
        // });
        // it('Verify the selection products is displayed on the products page', () => {
        //     productsPage.verifySelectSortLabel()
        // });

    afterEach(() => {
        cy.log('Finish')
    });
});
