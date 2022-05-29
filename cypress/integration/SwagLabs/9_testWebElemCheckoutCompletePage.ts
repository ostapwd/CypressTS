import urlsPagesSwagLabs from "../../data/SwagLabs/urlsPagesSwagLabs";
import users from "../../data/SwagLabs/users";
import { LoginPageSwagLabsTS } from "../../support/pagesSwagLabs/loginPageSwagLabsTS";
import { ProductPageSwagLabsTS } from "../../support/pagesSwagLabs/productPageSwagLabsTS";
import { checkoutCompletePageSwagLabsTS } from '../../support/pagesSwagLabs/checkoutCompletePageSwagLabsTS';

const loginPage = new LoginPageSwagLabsTS()
const productsPage = new ProductPageSwagLabsTS()
const checkoutCompletePage = new checkoutCompletePageSwagLabsTS()


describe('Test suite to test web elements on the checkout complete page', () => {
    before('Login to the App', () => {
        loginPage.open().loginToTheApp(users.standardUser).clickOnButtonLogin()
    });

        it('Verify a user can open to the complete page', () => {
            productsPage
                .addToCartAllproducts()
                .openShoppingCart()
                .clickOpenCheckoutStepOnePage()
                .inputCheckoutInfo(users.standardUser)
                .clickOpenCheckoutStepTwoPage()
                .clickOpenCheckoutCompletePage()
                .getUrlPage(urlsPagesSwagLabs.checkoutCompletePageUrl)
        });

        it('Verify the elements is displayed on the Checkout Complete page', () => {
            checkoutCompletePage
                .getInfoCheckoutComplete().should('be.visible').then((element) => {
                    expect(element.text()).to.be.equal('Checkout: Complete!')
                })
            checkoutCompletePage
                .waitForSeconds(1)
                .getImageComplete()
                    .should('be.visible')
                    .should('have.attr', 'src')
             checkoutCompletePage
                .getBackHomeButton()
                    .should('be.visible')
                    .should('contain', 'Back Home')
        });

    after('Logout of the App', () => {
        productsPage
            .waitForSeconds(1)
            .logoutOfTheApp()
    })
});
