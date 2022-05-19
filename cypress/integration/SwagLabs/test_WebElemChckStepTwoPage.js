import users from '../../data/users.js';
import { LoginPageSwagLabsTS } from '../../support/pagesSwagLabs/loginPageSwagLabsTS';
import { ProductPageSwagLabsTS } from "../../support/pagesSwagLabs/productPageSwagLabsTS";

const loginPage = new LoginPageSwagLabsTS();
const productsPage = new ProductPageSwagLabsTS();

describe('Test suite to test web elements on the checkout two step page', () => {
    beforeEach('Opened the Products page', () => {
        loginPage.open().loginToTheApp(users.standardUser)
    });
    it('Verify a user can open to the checkout one step page', () => {
        productsPage
            .verifyProductsLabel()
            .verifyUrlProductsPage()
            .addToCartAllproducts()
            .openShoppingCart()
            .openCheckoutStepOnePage()
            .openCheckoutStepTwoPage(users.standardUser)
    });

    it('Verify the elements is displayed on the checkout two step page', () => {
        productsPage
            .addToCartAllproducts()
            .openShoppingCart()
            .openCheckoutStepOnePage()
            .openCheckoutStepTwoPage(users.standardUser)
            .verifyUrlCheckTwoStepPage()
            .verifyCheckTwoStepPageLabel()
            .verifySummaryTotalLabel()
            .verifyFinishButton()
    });
});