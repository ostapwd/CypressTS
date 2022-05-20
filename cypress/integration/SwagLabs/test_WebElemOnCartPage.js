import users from "../../data/users.js";
import urlsPages from "../../data/urlsPages.js";
import { LoginPageSwagLabsTS } from '../../support/pagesSwagLabs/loginPageSwagLabsTS';
import { ProductPageSwagLabsTS } from "../../support/pagesSwagLabs/productPageSwagLabsTS";
import { shoppingCartSwagLabs } from "../../support/pagesSwagLabs/shoppingCartSwagLabsTS";

const loginPage = new LoginPageSwagLabsTS();
const productsPage = new ProductPageSwagLabsTS();
const shoppingCartPage = new shoppingCartSwagLabs();

describe('Test suite to test web elements on the cart page', () => {
    beforeEach('Opened the Products page', () => {
        cy.log('Start')
        loginPage.open().loginToTheApp(users.standardUser)
    });
        it('Verify a user can open to the cart page', () => {
            productsPage
                .logAllProducts()
                .addToCartAllproducts()
                .verifySelectedProductsNumber()
                .openShoppingCart()
                .verifyUrlPage(urlsPages.shoppingPageUrl)
        });
        it('Verify products are displayed on the shopping cart page', () => {
            productsPage
                .addToCartAllproducts()
                .logAllProducts()
                .verifySelectedProductsNumber()
                .openShoppingCart()
            shoppingCartPage
                .verifyUrlPage(urlsPages.shoppingPageUrl)
                .quantityOfSelectedProductsInCart()
                .logAllProductsInCart()
                .verifyShoppingCartLabel()
                .inventoryItemsPriceInCart()
                .verifyCheckoutButton()
        });
        
    afterEach(() => {
        cy.log('Finish')
    });
});