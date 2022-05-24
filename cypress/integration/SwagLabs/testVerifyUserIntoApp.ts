import errorsLoginMessage from "../../data/SwagLabs/errorsLoginMessage";
import urlsPagesSwagLabs from "../../data/SwagLabs/urlsPagesSwagLabs";
import users from "../../data/SwagLabs/users";
import { LoginPageSwagLabsTS } from "../../support/pagesSwagLabs/loginPageSwagLabsTS";
import { ProductPageSwagLabsTS } from "../../support/pagesSwagLabs/productPageSwagLabsTS";

describe('Test suite verified a user login into the application', () => {
    beforeEach('Opened the application', () => {
        cy.log('Start')
        new LoginPageSwagLabsTS().open()
    });
        it('Verify a user can login into the application (positive login)', () => {
            new LoginPageSwagLabsTS()
                .urlPageVerify(urlsPagesSwagLabs.loginPageUrl)
                .usernameInputVerify()
                .loginToTheApp(userss.standardUser)
            new ProductPageSwagLabsTS()
                .urlPageVerify(urlsPagesSwagLabs.productsPageUrl)
                .productsLabelVerify()
        });

        it('Verify a user can login into the application (negative credentials)', () => {
            new LoginPageSwagLabsTS()
                .loginToTheApp(users.noRegisterUser)
            new LoginPageSwagLabsTS()
                .errorMessageVerify(errorsLoginMessageoginMessage.nagativeCredentialsUser)
        })

        it('Verify a user can login into the application (locked Out User)', () => {
            new LoginPageSwagLabsTS()
                .loginToTheApp(users.lockedOutUser)
                new LoginPageSwagLabsTS()
                .errorMessageVerify(errorsLoginMessage.lockedOutUser)
        })

        it('Verify a user can login into the application (empty Password field)', () => {
            new LoginPageSwagLabsTS()
                .emptyPasswordToTheApp(users.standardUser)
                .errorMessageVerify(errorsLoginMessage.emptyPasswordFieldUser)
        })

        it('Verify a user can login into the application (empty Username field)', () => {
            new LoginPageSwagLabsTS()
                .emptyUsernameToTheApp(users.standardUser)
                .errorMessageVerify(errorsLoginMessage.emptyUsernameFieldUser)
        })

        it('Verify a user can login into the application (empty field)', () => {
            new LoginPageSwagLabsTS()
                .emptyFieldsToTheApp()
                .errorMessageVerify(errorsLoginMessage.emptyFieldsUser)
        })

        it('Verify a user can login into the application (wrong username user)', () => {
            new LoginPageSwagLabsTS()
                .loginToTheApp(users.wrongUsernameUser)
            new LoginPageSwagLabsTS()
                .errorMessageVerify(errorsLoginMessage.nagativeCredentialsUser)
        })

        it('Verify a user can login into the application (wrong password user)', () => {
            new LoginPageSwagLabsTS()
                .loginToTheApp(users.wrongPasswordUser)
            new LoginPageSwagLabsTS()
                .errorMessageVerify(errorsLoginMessage.nagativeCredentialsUser)
        })

    afterEach(() => {
        cy.log('Finish')
    });
});