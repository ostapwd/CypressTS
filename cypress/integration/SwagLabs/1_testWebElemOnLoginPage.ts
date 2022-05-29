import urlsPagesSwagLabs from "../../data/SwagLabs/urlsPagesSwagLabs";
import { LoginPageSwagLabsTS } from "../../support/pagesSwagLabs/loginPageSwagLabsTS";


describe('Test suite to test web elements on the login page', () => {
    beforeEach('Opened the application', () => {
        cy.log('Start')
        new LoginPageSwagLabsTS().open()
    });
    
        it.only('Verify the URL of the login page', () => {
            new LoginPageSwagLabsTS()
                .getUrlPage(urlsPagesSwagLabs.loginPageUrl)
        });

        it('Verify the logo App is displayed on the main page', () => {
            new LoginPageSwagLabsTS()
                .logoApp()
                    .should('be.visible');
        });

        it('Verify the login input is displayed on the main page', () => {
            new LoginPageSwagLabsTS()
                .getUsernameInput()
                    .should('be.visible')
                    .should('have.attr', 'placeholder')
                    .and('eq','Username')
        });

        
        it('Verify the password is displayed on the main page', () => {
            new LoginPageSwagLabsTS()
                .getPasswordInput()
                    .should('be.visible')
                    .should('have.attr', 'placeholder')
                    .and('eq','Password')
        });

        it('Verify the login button is displayed on the main page', () => {
            new LoginPageSwagLabsTS()
                .getButtonLogin()
                    .should('be.visible')
                    .should('have.css', 'background-color', 'rgb(226, 35, 26)')
                    .should('have.attr', 'type')
                    .and('eq','submit')
        });
    
    afterEach(() => {
        cy.log('Finish')
    });
});
