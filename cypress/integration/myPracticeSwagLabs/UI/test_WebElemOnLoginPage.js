import { LoginPageTSPractice } from "../../../support/pagesMyPractice/loginPageTSPractice";

describe('Test suite to test web elements on the login page', () => {
    beforeEach(() => {
        new LoginPageTSPractice().open();
    });
        it('Verify the URL of the login page is displayed in the address bar after the page has loaded', () => {
            new LoginPageTSPractice().verifyUrlLoginPage();
        });

        it('Verify that the program logo is displayed on the main page after the page has loaded', () => {
            new LoginPageTSPractice().verifyLogoApp();
        });

        it('Verify that the Username input is displayed on the main page after the page has loaded', () => {
            new LoginPageTSPractice().verifyUsernameInput();
        });

        it('Verify that the Placeholder Username input is displayed on the main page after the page has loaded', () => {
            new LoginPageTSPractice().verifyPlaceholderUsernameInput();
        });

        it('Verify that the Password input is displayed on the main page after the page has loaded', () => {
            new LoginPageTSPractice().verifyPasswordInput();
        });

        it('Verify that the Placeholder Password input is displayed on the main page after the page has loaded', () => {
            new LoginPageTSPractice().verifyPlaceholderPasswordInput();
        });

        it('Verify that the Login button is displayed on the main page after the page has loaded', () => {
            new LoginPageTSPractice().verifyLoginButton();
        });

        it('Verify that color the Login button is displayed on the main page after the page has loaded', () => {
            new LoginPageTSPractice().verifyColorLoginButton();
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
