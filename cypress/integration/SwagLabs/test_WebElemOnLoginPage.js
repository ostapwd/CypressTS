import { LoginPageSwagLabsTS } from "../../support/pagesSwagLabs/loginPageSwagLabsTS";

describe('Test suite to test web elements on the login page', () => {
    beforeEach('Opened the application', () => {
        cy.log('Start')
        new LoginPageSwagLabsTS().open()
    });
    
        it('Verify the URL of the login page is displayed in the browser address bar', () => {
            new LoginPageSwagLabsTS().verifyUrlLoginPage();
        });

        it('Verify the program logo is displayed on the main page', () => {
            new LoginPageSwagLabsTS().verifyLogoApp();
        });

        it('Verify the login form elements is displayed on the main page', () => {
            new LoginPageSwagLabsTS()
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
});
