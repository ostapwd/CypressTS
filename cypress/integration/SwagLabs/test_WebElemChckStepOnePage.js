import users from '../../data/users.js';
import urlsPages from '../../data/urlsPages.js';
import { LoginPageSwagLabsTS } from '../../support/pagesSwagLabs/loginPageSwagLabsTS';
import { ProductPageSwagLabsTS } from "../../support/pagesSwagLabs/productPageSwagLabsTS";

const loginPage = new LoginPageSwagLabsTS();
const productsPage = new ProductPageSwagLabsTS();

describe('Test suite to test web elements on the checkout one step page', () => {
    beforeEach('Opened the Products page', () => {
        loginPage.open().loginToTheApp(users.standardUser)
    });
    it('Verify a user can open to the checkout one step page', () => {
        productsPage
            .verifyProductsLabel()
            .verifyUrlPage(urlsPages.productsPageUrl)
            .addToCartAllproducts()
            .openShoppingCart()
            .openCheckoutStepOnePage()
    });

    it('Verify the Your Information form elements is displayed on the checkout one step page', () => {
        productsPage
            .verifyProductsLabel()
            .verifyUrlPage(urlsPages.productsPageUrl)
            .addToCartAllproducts()
            .openShoppingCart()
            .openCheckoutStepOnePage()
            .verifyUrlPage(urlsPages.checkoutStepOnePageUrl)
            .verifyCheckOneStepPageLabel()
            .verifyFormCheckOneStepPage()
            .fillFormCheckoutStepOnePage(users.standardUser)
            .verifyContinueButton()
            .verifyCancelButton()
    });
});