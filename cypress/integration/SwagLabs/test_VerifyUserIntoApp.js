import users from "../../data/users";
import errorsLoginMessage from "../../data/errorsLoginMessage";
import urlsPages from '../../data/urlsPages.js';
import { LoginPageSwagLabsTS } from "../../support/pagesSwagLabs/loginPageSwagLabsTS";
import { ProductPageSwagLabsTS } from "../../support/pagesSwagLabs/productPageSwagLabsTS";

describe('Test suite verified a user login into the application', () => {
    beforeEach('Opened the application', () => {
        cy.log('Start')
        new LoginPageSwagLabsTS().open()
    });
        it('Verify a user can login into the application (positive login)', () => {
            new LoginPageSwagLabsTS()
                .verifyUrlPage(urlsPages.loginPageUrl)
                .verifyUsernameInput()
                .loginToTheApp(users.standardUser)
            new ProductPageSwagLabsTS()
                .verifyUrlPage(urlsPages.productsPageUrl)
                .verifyProductsLabel()
        });

        it('Verify a user can login into the application (negative credentials)', () => {
            new LoginPageSwagLabsTS()
                .loginToTheApp(users.noRegisterUser)
            new LoginPageSwagLabsTS()
                .verifyErrorMessage(errorsLoginMessage.nagativeCredentialsUser)
        })

        it('Verify a user can login into the application (locked Out User)', () => {
            new LoginPageSwagLabsTS()
                .loginToTheApp(users.lockedOutUser)
                new LoginPageSwagLabsTS()
                .verifyErrorMessage(errorsLoginMessage.lockedOutUser)
        })

        it('Verify a user can login into the application (empty Password field)', () => {
            new LoginPageSwagLabsTS()
                .emptyPasswordToTheApp(users.standardUser)
                .verifyErrorMessage(errorsLoginMessage.emptyPasswordFieldUser)
        })

        it('Verify a user can login into the application (empty Username field)', () => {
            new LoginPageSwagLabsTS()
                .emptyUsernameToTheApp(users.standardUser)
                .verifyErrorMessage(errorsLoginMessage.emptyUsernameFieldUser)
        })

        it('Verify a user can login into the application (empty field)', () => {
            new LoginPageSwagLabsTS()
                .emptyFieldsToTheApp()
                .verifyErrorMessage(errorsLoginMessage.emptyFieldsUser)
        })

        it('Verify a user can login into the application (wrong username user)', () => {
            new LoginPageSwagLabsTS()
                .loginToTheApp(users.wrongUsernameUser)
            new LoginPageSwagLabsTS()
                .verifyErrorMessage(errorsLoginMessage.nagativeCredentialsUser)
        })

        it('Verify a user can login into the application (wrong password user)', () => {
            new LoginPageSwagLabsTS()
                .loginToTheApp(users.wrongPasswordUser)
            new LoginPageSwagLabsTS()
                .verifyErrorMessage(errorsLoginMessage.nagativeCredentialsUser)
        })

    afterEach(() => {
        cy.log('Finish')
    });
});