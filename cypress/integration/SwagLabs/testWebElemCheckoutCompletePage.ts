import urlsPagesSwagLabs from "../../data/SwagLabs/urlsPagesSwagLabs";
import users from "../../data/SwagLabs/users";
import { LoginPageSwagLabsTS } from "../../support/pagesSwagLabs/loginPageSwagLabsTS";
import { ProductPageSwagLabsTS } from "../../support/pagesSwagLabs/productPageSwagLabsTS";

const loginPage = new LoginPageSwagLabsTS()
const productsPage = new ProductPageSwagLabsTS()

describe('Test suite to test web elements on the checkout complete page', () => {
    beforeEach('Login to the App', () => {
        loginPage.open().loginToTheApp(users.standardUser)
    });

        it('Verify a user can open to the complete page', () => {
            productsPage
                .productsLabelVerify()
                .addToCartAllproducts()
                .openShoppingCart()
                .openCheckoutStepOnePage()
                .openCheckoutStepTwoPage(users.standardUser)
                .openCheckoutCompletePage()
                .urlPageVerify(urlsPagesSwagLabs.checkoutCompletePageUrl)
        });

        it('Verify the elements is displayed on the Checkout Complete page', () => {
            productsPage
                .addToCartAllproducts()
                .openShoppingCart()
                .openCheckoutStepOnePage()
                .openCheckoutStepTwoPage(users.standardUser)
                .openCheckoutCompletePage()
                .infoCheckoutCompletePageLabelVerify()
                .imageCompletePageVerify()
        });

    afterEach('Logout of the App', () => {
        productsPage
            .logoutOfTheApp()
    })
});
