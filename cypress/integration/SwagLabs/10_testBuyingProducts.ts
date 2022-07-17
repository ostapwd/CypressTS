import users from "../../data/SwagLabs/users";
import { checkoutCompletePageSwagLabsTS } from "../../support/pagesSwagLabs/checkoutCompletePageSwagLabsTS";
import { LoginPageSwagLabsTS } from "../../support/pagesSwagLabs/loginPageSwagLabsTS";
import { ProductPageSwagLabsTS } from "../../support/pagesSwagLabs/productPageSwagLabsTS";


const loginPage = new LoginPageSwagLabsTS();
const productsPage = new ProductPageSwagLabsTS();
const checkoutCompletePage = new checkoutCompletePageSwagLabsTS()

describe('Test suite buying the products', () => {
    before('Login to the App', () => {
        loginPage.open().loginToTheApp(users.standardUser).clickOnButtonLogin()
    });
        it('Verify a user can confirm the purchase', () => {
            productsPage
                .addToCartAllproducts()
                .openShoppingCart()
                .clickOpenCheckoutStepOnePage()
                .inputCheckoutInfo(users.standardUser)
                .clickOpenCheckoutStepTwoPage()
                .clickOpenCheckoutCompletePage()
                .getInfoCheckoutComplete()
                    .should('be.visible')
                    .then((element) => {
                    expect(element.text()).to.be.equal('Checkout: Complete!')
                })
            productsPage
                .getQuantityProductsInEmptyCart()
                    .then( element => {expect(element.text()).to.be.equal('');
                 }); 
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