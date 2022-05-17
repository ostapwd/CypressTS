import errorsLoginMessage from "../../data/errorsLoginMessage";
import users from "../../data/users";
import { LoginPageTSPractice } from "../../support/pagesMyPractice/loginPageTSPractice";
import { ProductPageTSPractice } from "../../support/pagesMyPractice/productPageTSPractice";

describe('Test suite verified a user login into the application', () => {
    beforeEach('Opened the application', () => {
        cy.log('Start')
        new LoginPageTSPractice().open()
    });
        it('Verify a user can login into the application (positive login)', () => {
            new LoginPageTSPractice()
                .verifyUrlLoginPage()
                .verifyUsernameInput()
                .loginToTheApp(users.standardUser)
                .verifyUrlProductsPage()
            new ProductPageTSPractice()
                .verifyProductsLabel()
        });

        it('Verify a user can login into the application (negative credentials)', () => {
            new LoginPageTSPractice()
                .verifyUrlLoginPage()
                .verifyUsernameInput()
                .loginToTheApp(users.noRegisterUser)
            new LoginPageTSPractice()
                .verifyErrorMessage(errorsLoginMessage.nagativeCredentialsUser)
        })

        it('Verify a user can login into the application (locked Out User)', () => {
            new LoginPageTSPractice()
                .verifyUrlLoginPage()
                .verifyUsernameInput()
                .loginToTheApp(users.lockedOutUser)
            new LoginPageTSPractice()
                .verifyErrorMessage(errorsLoginMessage.lockedOutUser)
        })

        it('Verify a user can login into the application (empty Password field)', () => {
            new LoginPageTSPractice()
                .verifyUrlLoginPage()
                .verifyUsernameInput()
                .emptyPasswordToTheApp(users.standardUser)
                .verifyErrorMessage(errorsLoginMessage.emptyPasswordFieldUser)
        })

        it('Verify a user can login into the application (empty Username field)', () => {
            new LoginPageTSPractice()
                .verifyUrlLoginPage()
                .verifyUsernameInput()
                .emptyUsernameToTheApp(users.standardUser)
                .verifyErrorMessage(errorsLoginMessage.emptyUsernameFieldUser)
        })

        it('Verify a user can login into the application (empty field)', () => {
            new LoginPageTSPractice()
                .verifyUrlLoginPage()
                .verifyUsernameInput()
                .emptyFieldsToTheApp()
                .verifyErrorMessage(errorsLoginMessage.emptyFieldsUser)
        })

        it('Verify a user can login into the application (wrong username user)', () => {
            new LoginPageTSPractice()
                .verifyUrlLoginPage()
                .verifyUsernameInput()
                .loginToTheApp(users.wrongUsernameUser)
            new LoginPageTSPractice() 
                .verifyErrorMessage(errorsLoginMessage.nagativeCredentialsUser)
        })

        it('Verify a user can login into the application (wrong password user)', () => {
            new LoginPageTSPractice()
                .verifyUrlLoginPage()
                .verifyUsernameInput()
                .loginToTheApp(users.wrongPasswordUser)
            new LoginPageTSPractice() 
                .verifyErrorMessage(errorsLoginMessage.nagativeCredentialsUser)
        })

    afterEach(() => {
        cy.log('Finish')
    });
});