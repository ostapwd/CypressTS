import { LoginPageTSPractice } from "../../support/pagesMyPractice/loginPageTSPractice";

describe('Test suite to test web elements on the login page', () => {
    beforeEach(() => {
        cy.log('Start')
        new LoginPageTSPractice().open();
    });
        it('Verify the URL of the login page is displayed in the browser address bar', () => {
            new LoginPageTSPractice().verifyUrlLoginPage();
        });

        it('Verify the program logo is displayed on the main page', () => {
            new LoginPageTSPractice().verifyLogoApp();
        });

        it('Verify the login form elements is displayed on the main page', () => {
            new LoginPageTSPractice()
                .verifyUsernameInput()
                .verifyPlaceholderUsernameInput()
                .verifyPasswordInput()
                .verifyPlaceholderPasswordInput()
                .verifyLoginButton()
                .verifyColorLoginButton()
        });
    afterEach(() => {
        cy.log('Finish')
    });

    // it('Verify a user can login to the aplication', () => {
    //     productPagePractice.productsLabel.then((element) => {
    //         expect(element.text()).to.equal('Products')
    //     })
    // });

    // it('Verify a user can add all products to the cart', () => {
    //     productPagePractice.addToCartAllproducts().selectedProductsNumber.then((element) => {
    //         expect(element.text()).to.equal('6')
    //     })
    // });

    // it('Verify a user can logout form the app', () => {
    //     productPagePractice.openMenu().waitTime().logoutApp();
    //     loginPagePractice.loginPageLogoLabel.should("be.visible")
    // });
});
