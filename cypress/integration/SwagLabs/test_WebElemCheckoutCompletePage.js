import users from "../../data/users.js";
import urlsPages from "../../data/urlsPages.js";
import { LoginPageSwagLabsTS } from "../../support/pagesSwagLabs/loginPageSwagLabsTS";
import { ProductPageSwagLabsTS } from "../../support/pagesSwagLabs/productPageSwagLabsTS";

const loginPage = new LoginPageSwagLabsTS()
const productsPage = new ProductPageSwagLabsTS()

describe('Test suite to test web elements on the checkout complete page', () => {
    beforeEach('Opened the Products page', () => {
        loginPage.open().loginToTheApp(users.standardUser)
    });

     it('Verify a user can open to the complete page', () => {
        productsPage
            .verifyProductsLabel()
            .addToCartAllproducts()
            .openShoppingCart()
            .openCheckoutStepOnePage()
            .openCheckoutStepTwoPage(users.standardUser)
            .openCheckoutCompletePage()
            .verifyUrlPage(urlsPages.checkoutCompletePageUrl)
    });

    it('Verify the elements is displayed on the Checkout Complete page', () => {
        productsPage
            .addToCartAllproducts()
            .openShoppingCart()
            .openCheckoutStepOnePage()
            .openCheckoutStepTwoPage(users.standardUser)
            .openCheckoutCompletePage()
            .verifyInfoCheckoutCompletePageLabel()
            .verifyImageCompletePage()
    });
});
