
// let loginPage = new LoginPageTSPractice()
// let productsPage = new ProductPageTSPractice()
// let cartPage = new CartPageTSPractice()

import users from "../../data/users.js";
import { LoginPageTSPractice } from "../../support/pagesMyPractice/loginPageTSPractice.js";


describe('Test suite to test web elements on the cart page', () => {
    before('Opened the Products page', () => {
        cy.log('Start')
        new LoginPageTSPractice().open().loginToTheApp(users.standardUser)
    });
        it('Verify a user can open to the cart page', () => {
            new ProductPageTSPractice()
                .logAllProducts()
                .addToCartAllproducts()
                .verifySelectedProductsNumber()
                .openShoppingCart()
        });
        it('Verify products are displayed on the shopping cart page', () => {
            // productsPage
            //     .logAllProducts()
            //     .addToCartAllproducts()
            //     .verifySelectedProductsNumber()
            //     .openShoppingCart()
            // cartPage
            //     .verifyUrlCart()
            //     .quantityOfSelectedProductsInCart()
            //     .logAllProductsInCart()
            //     .verifyShoppingCartLabel()

                
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
new LoginPageTSPractice()