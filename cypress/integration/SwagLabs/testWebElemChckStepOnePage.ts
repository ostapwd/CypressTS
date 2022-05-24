import urlsPagesSwagLabs from '../../data/SwagLabs/urlsPagesSwagLabs';
import users from '../../data/SwagLabs/users';
import { LoginPageSwagLabsTS } from '../../support/pagesSwagLabs/loginPageSwagLabsTS';
import { ProductPageSwagLabsTS } from "../../support/pagesSwagLabs/productPageSwagLabsTS";

const loginPage = new LoginPageSwagLabsTS();
const productsPage = new ProductPageSwagLabsTS();

describe('Test suite to test web elements on the checkout one step page', () => {
    beforeEach('Login to the App', () => {
        loginPage.open().loginToTheApp(users.standardUser)
    });
        it('Verify a user can open to the checkout one step page', () => {
            productsPage
                .productsLabelVerify()
                .urlPageVerify(urlsPagesSwagLabs.productsPageUrl)
                .addToCartAllproducts()
                .openShoppingCart()
                .openCheckoutStepOnePage()
        });

        it('Verify the Your Information form elements is displayed on the checkout one step page', () => {
            productsPage
                .productsLabelVerify()
                .urlPageVerify(urlsPagesSwagLabs.productsPageUrl)
                .addToCartAllproducts()
                .openShoppingCart()
                .openCheckoutStepOnePage()
                .urlPageVerify(urlsPagesSwagLabs.checkoutStepOnePageUrl)
                .checkOneStepPageLabelVerify()
                .formCheckOneStepPageVerify()
                .fillFormCheckoutStepOnePage(users.standardUser)
                .continueButtonVerify()
                .cancelButtonVerify()
        });

    afterEach('Logout of the App', () => {
        productsPage
            .logoutOfTheApp()
    })
});