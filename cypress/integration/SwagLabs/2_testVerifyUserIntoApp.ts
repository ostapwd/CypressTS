import errorsLoginMessage from "../../data/SwagLabs/errorsLoginMessage";
import users from "../../data/SwagLabs/users";
import { LoginPageSwagLabsTS } from "../../support/pagesSwagLabs/loginPageSwagLabsTS";


let loginPage = new LoginPageSwagLabsTS();

describe('Test suite verified a user login into the application', () => {
    beforeEach('Login to the App', () => {
        cy.log('Start')
        loginPage.open()
    });
        it('Verify a user can login into the application (positive login)', () => {
            new LoginPageSwagLabsTS()
                .loginToTheApp(users.standardUser)
                .clickOnButtonLogin()
                .getPageLabel()
                    .should('be.visible')
                    .then((element) => {
                        expect(element.text()).to.be.equal('Products')
                })
        });

        it('Verify a user can login into the application (negative credentials)', () => {
            loginPage
                .loginToTheApp(users.noRegisterUser)
                .clickOnButtonLogin()
            loginPage
                .getErrorMessageLoginToTheApp()
                    .should('have.css', 'background-color', 'rgb(226, 35, 26)')
                    .then((element) => {
                        expect(element.text()).to.be.equal(errorsLoginMessage.nagativeCredentialsUser.message)});
        })

        it('Verify a user can login into the application (locked Out User)', () => {
            loginPage
                .loginToTheApp(users.lockedOutUser)
                .clickOnButtonLogin()
            loginPage
                .getErrorMessageLoginToTheApp()
                    .should('have.css', 'background-color', 'rgb(226, 35, 26)')
                    .then((element) => {
                        expect(element.text()).to.be.equal(errorsLoginMessage.lockedOutUser.message)});
        })

        it('Verify a user can login into the application (empty Password field)', () => {
            loginPage
                .emptyPasswordToTheApp(users.standardUser)
                .clickOnButtonLogin()
            loginPage
                .getErrorMessageLoginToTheApp()
                    .should('have.css', 'background-color', 'rgb(226, 35, 26)')
                    .then((element) => {
                        expect(element.text()).to.be.equal(errorsLoginMessage.emptyPasswordFieldUser.message)});
        })

        it('Verify a user can login into the application (empty Username field)', () => {
            loginPage
                .emptyUsernameToTheApp(users.standardUser)
                .clickOnButtonLogin()
            loginPage
                .getErrorMessageLoginToTheApp()
                    .should('have.css', 'background-color', 'rgb(226, 35, 26)')
                    .then((element) => {
                        expect(element.text()).to.be.equal(errorsLoginMessage.emptyUsernameFieldUser.message)});
        })

        it('Verify a user can login into the application (empty fields)', () => {
            loginPage
                .clickOnButtonLogin()
            loginPage
            .getErrorMessageLoginToTheApp()
                .should('have.css', 'background-color', 'rgb(226, 35, 26)')
                .then((element) => {
                    expect(element.text()).to.be.equal(errorsLoginMessage.emptyFieldsUser.message)});
        })

        it('Verify a user can login into the application (wrong username user)', () => {
            loginPage
                .loginToTheApp(users.wrongUsernameUser)
                .clickOnButtonLogin()
            loginPage
            .getErrorMessageLoginToTheApp()
                .should('have.css', 'background-color', 'rgb(226, 35, 26)')
                .then((element) => {
                    expect(element.text()).to.be.equal(errorsLoginMessage.nagativeCredentialsUser.message)});
        })

        it('Verify a user can login into the application (wrong password user)', () => {
            loginPage
                .loginToTheApp(users.wrongPasswordUser)
                .clickOnButtonLogin()
            loginPage
                .getErrorMessageLoginToTheApp()
                    .should('have.css', 'background-color', 'rgb(226, 35, 26)')
                    .then((element) => {
                        expect(element.text()).to.be.equal(errorsLoginMessage.nagativeCredentialsUser.message)});
        })

    afterEach(() => {
        cy.log('Finish')
    });
});