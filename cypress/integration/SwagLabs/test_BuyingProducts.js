import users from "../../data/users.js";
import { LoginPageSwagLabsTS } from "../../support/pagesSwagLabs/loginPageSwagLabsTS";
import { ProductPageSwagLabsTS } from "../../support/pagesSwagLabs/productPageSwagLabsTS";


const loginPage = new LoginPageSwagLabsTS();
const productsPage = new ProductPageSwagLabsTS();

describe('Test suite buying the products', () => {
    beforeEach('Opened the Products page', () => {
        loginPage.open().loginToTheApp(users.standardUser)
    });
    it('Verify a user can buy the products', () => {
        productsPage
            .addToCartAllproducts()
            .openShoppingCart()
            .openCheckoutStepOnePage()
            .openCheckoutStepTwoPage(users.standardUser)
            .openCheckoutCompletePage()
            .returnToProductsPage()
    });
});