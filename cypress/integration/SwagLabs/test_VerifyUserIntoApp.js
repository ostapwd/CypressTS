import users from "../../data/users";
import errorsLoginMessage from "../../data/errorsLoginMessage";
import { LoginPageSwagLabsTS } from "../../support/pagesSwagLabs/loginPageSwagLabsTS";
import { ProductPageSwagLabsTS } from "../../support/pagesSwagLabs/productPageSwagLabsTS";

describe('Test suite verified a user login into the application', () => {
    beforeEach('Opened the application', () => {
        cy.log('Start')
        new LoginPageSwagLabsTS().open()
    });
        it('Verify a user can login into the application (positive login)', () => {
            new LoginPageSwagLabsTS()
                .verifyUrlLoginPage()
                .verifyUsernameInput()
                .loginToTheApp(users.standardUser)
                .verifyUrlProductsPage()
            new ProductPageSwagLabsTS()
                .verifyProductsLabel()
        });

        it('Verify a user can login into the application (negative credentials)', () => {
            new LoginPageSwagLabsTS()
                .verifyUrlLoginPage()
                .verifyUsernameInput()
                .loginToTheApp(users.noRegisterUser)
            new LoginPageSwagLabsTS()
                .verifyErrorMessage(errorsLoginMessage.nagativeCredentialsUser)
        })

        it('Verify a user can login into the application (locked Out User)', () => {
            new LoginPageSwagLabsTS()
                .verifyUrlLoginPage()
                .verifyUsernameInput()
                .loginToTheApp(users.lockedOutUser)
                new LoginPageSwagLabsTS()
                .verifyErrorMessage(errorsLoginMessage.lockedOutUser)
        })

        it('Verify a user can login into the application (empty Password field)', () => {
            new LoginPageSwagLabsTS()
                .verifyUrlLoginPage()
                .verifyUsernameInput()
                .emptyPasswordToTheApp(users.standardUser)
                .verifyErrorMessage(errorsLoginMessage.emptyPasswordFieldUser)
        })

        it('Verify a user can login into the application (empty Username field)', () => {
            new LoginPageSwagLabsTS()
                .verifyUrlLoginPage()
                .verifyUsernameInput()
                .emptyUsernameToTheApp(users.standardUser)
                .verifyErrorMessage(errorsLoginMessage.emptyUsernameFieldUser)
        })

        it('Verify a user can login into the application (empty field)', () => {
            new LoginPageSwagLabsTS()
                .verifyUrlLoginPage()
                .verifyUsernameInput()
                .emptyFieldsToTheApp()
                .verifyErrorMessage(errorsLoginMessage.emptyFieldsUser)
        })

        it('Verify a user can login into the application (wrong username user)', () => {
            new LoginPageSwagLabsTS()
                .verifyUrlLoginPage()
                .verifyUsernameInput()
                .loginToTheApp(users.wrongUsernameUser)
            new LoginPageSwagLabsTS()
                .verifyErrorMessage(errorsLoginMessage.nagativeCredentialsUser)
        })

        it('Verify a user can login into the application (wrong password user)', () => {
            new LoginPageSwagLabsTS()
                .verifyUrlLoginPage()
                .verifyUsernameInput()
                .loginToTheApp(users.wrongPasswordUser)
            new LoginPageSwagLabsTS()
                .verifyErrorMessage(errorsLoginMessage.nagativeCredentialsUser)
        })

    afterEach(() => {
        cy.log('Finish')
    });
});