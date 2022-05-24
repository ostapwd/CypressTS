import urlsPagesSwagLabs from "../../data/SwagLabs/urlsPagesSwagLabs";
import users from "../../data/SwagLabs/users";
import { LoginPageSwagLabsTS } from '../../support/pagesSwagLabs/loginPageSwagLabsTS';
import { ProductPageSwagLabsTS } from "../../support/pagesSwagLabs/productPageSwagLabsTS";
import { shoppingCartSwagLabs } from "../../support/pagesSwagLabs/shoppingCartSwagLabsTS";

const loginPage = new LoginPageSwagLabsTS();
const productsPage = new ProductPageSwagLabsTS();
const shoppingCartPage = new shoppingCartSwagLabs();

describe('Test suite to test web elements on the cart page', () => {
    beforeEach('Login to the App', () => {
        cy.log('Start')
        loginPage.open().loginToTheApp(users.standardUser)
    });
        it('Verify a user can open to the cart page', () => {
            productsPage
                .logAllProducts()
                .addToCartAllproducts()
                .selectedProductsNumberVerify('6')
                .openShoppingCart()
                .urlPageVerify(urlsPagesSwagLabs.shoppingPageUrl)
        });
        it('Verify products are displayed on the shopping cart page', () => {
            productsPage
                .addToCartAllproducts()
                .logAllProducts()
                .selectedProductsNumberVerify('6')
                .openShoppingCart()
            shoppingCartPage
            .urlPageVerify(urlsPagesSwagLabs.shoppingPageUrl)
                .quantityOfSelectedProductsInCart()
                .logAllProductsInCart()
                .shoppingCartLabelVerify()
                .inventoryItemsPriceInCart()
                .checkoutButtonVerify()
        });
        
    afterEach('Logout of the App', () => {
        productsPage
            .logoutOfTheApp()
    })
});