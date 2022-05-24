import urlsPagesSwagLabs from "../../data/SwagLabs/urlsPagesSwagLabs";
import users from "../../data/SwagLabs/users";
import { LoginPageSwagLabsTS } from "../../support/pagesSwagLabs/loginPageSwagLabsTS";
import { ProductPageSwagLabsTS } from "../../support/pagesSwagLabs/productPageSwagLabsTS";


const loginPage = new LoginPageSwagLabsTS();
const productsPage = new ProductPageSwagLabsTS();

describe('Test suite buying the products', () => {
    beforeEach('Login to the App', () => {
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
            productsPage
                .urlPageVerify(urlsPagesSwagLabs.productsPageUrl)
                .productsLabelVerify()
                .selectedProductsNumberHiddenVerify('')
        });
    afterEach('Logout of the App', () => {
        productsPage
            .logoutOfTheApp()
    })
});