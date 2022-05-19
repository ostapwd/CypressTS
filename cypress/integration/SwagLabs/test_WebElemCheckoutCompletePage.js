import users from "../../data/users.js";
import { LoginPageSwagLabsTS } from "../../support/pagesSwagLabs/loginPageSwagLabsTS";
import { ProductPageSwagLabsTS } from "../../support/pagesSwagLabs/productPageSwagLabsTS";

const loginPage = new LoginPageSwagLabsTS()
const productsPage = new ProductPageSwagLabsTS()

describe('', () => {
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
    });

    it.only('Verify the elements is displayed on the Checkout Complete page', () => {
        productsPage
            .addToCartAllproducts()
            .openShoppingCart()
            .openCheckoutStepOnePage()
            .openCheckoutStepTwoPage(users.standardUser)
            .openCheckoutCompletePage()
            .verifyUrlCheckTwoStepPage()
            .verifyInfoCheckoutCompletePageLabel()
            .verifyImageCompletePage()
    });
});
