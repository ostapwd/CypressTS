import urlsPagesSwagLabs from "../../data/SwagLabs/urlsPagesSwagLabs";
import users from "../../data/SwagLabs/users";
import { LoginPageSwagLabsTS } from '../../support/pagesSwagLabs/loginPageSwagLabsTS';
import { ProductPageSwagLabsTS } from "../../support/pagesSwagLabs/productPageSwagLabsTS";
import { checkoutStepTwoPageSwagLabsTS } from '../../support/pagesSwagLabs/checkoutStepTwoPageSwagLabsTS';
import { checkoutStepOnePageSwagLabsTS } from "../../support/pagesSwagLabs/checkoutStepOnePageSwagLabsTS";

const loginPage = new LoginPageSwagLabsTS();
const productsPage = new ProductPageSwagLabsTS();
const checkoutTwoStep = new checkoutStepTwoPageSwagLabsTS();
const checkoutOneStep = new checkoutStepOnePageSwagLabsTS()

describe('Test suite to test web elements on the checkout two step page', () => {
    beforeEach('Login to the App', () => {
        loginPage.open().loginToTheApp(users.standardUser).clickOnButtonLogin()
    });

        it('Verify the elements is displayed on the checkout two step page', () => {
            productsPage
                .addToCartAllproducts()
                .openShoppingCart()
                .clickOpenCheckoutStepOnePage()
                .inputCheckoutInfo(users.standardUser)
                .clickOpenCheckoutStepTwoPage()
                .getUrlPage(urlsPagesSwagLabs.checkoutStepTwoPageUrl)
                .getPageLabel().should('be.visible').then(element => {
                    expect(element.text()).to.be.equal('Checkout: Overview');
                    }); 
            checkoutTwoStep
                .getSummaryTotalLabel().should('be.visible').then((element) => {
                    expect(element.text()).to.be.equal('Total: $140.34')
                })
            checkoutTwoStep
                .getFinishButton().should('be.visible').should('contain', 'Finish')
            checkoutOneStep
                .getCancelButton().should('be.visible').then((element) => {
                    expect(element.text()).to.be.equal('Cancel')
                })
        });
        
    afterEach('Logout of the App', () => {
        productsPage
            .logoutOfTheApp()
    })
});