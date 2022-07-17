import urlsPagesSwagLabs from '../../data/SwagLabs/urlsPagesSwagLabs';
import users from '../../data/SwagLabs/users';
import { checkoutStepOnePageSwagLabsTS } from '../../support/pagesSwagLabs/checkoutStepOnePageSwagLabsTS';
import { LoginPageSwagLabsTS } from '../../support/pagesSwagLabs/loginPageSwagLabsTS';
import { ProductPageSwagLabsTS } from "../../support/pagesSwagLabs/productPageSwagLabsTS";

const loginPage = new LoginPageSwagLabsTS();
const productsPage = new ProductPageSwagLabsTS();
const checkoutOneStep = new checkoutStepOnePageSwagLabsTS();

describe('Test suite to test web elements on the checkout one step page', () => {
    beforeEach('Login to the App', () => {
        loginPage.open().loginToTheApp(users.standardUser).clickOnButtonLogin()
    });
        it('Verify a user can open to the checkout one step page', () => {
            productsPage
                .addToCartAllproducts()
                .openShoppingCart()   
                .clickOpenCheckoutStepOnePage()
        });

        it('Verify the Your Information form elements is displayed on the checkout one step page', () => {
            productsPage
                .addToCartAllproducts()
                .openShoppingCart()
                .clickOpenCheckoutStepOnePage()
                .getUrlPage(urlsPagesSwagLabs.checkoutStepOnePageUrl)
                .getPageLabel().should('be.visible').then(element => {
                    expect(element.text()).to.be.equal('Checkout: Your Information');
                    }); 
            checkoutOneStep
                .getFormCheckOneStepPage().should('be.visible')
            checkoutOneStep
                .inputCheckoutInfo(users.standardUser)
                .getContinueButton().should('be.visible').should('have.attr', 'type').and('eq','submit')
            checkoutOneStep
                .getCancelButton().should('be.visible').then((element) => {
                    expect(element.text()).to.be.equal('Cancel')
                })
        });

    afterEach('Logout of the App', () => {
        productsPage
            .waitForSeconds(1)
            .logoutOfTheApp()
    })
});