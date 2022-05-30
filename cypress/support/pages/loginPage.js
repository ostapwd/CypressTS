import productPage from "./productPage";


export class LoginPage {

    get usernameInput() { return cy.get("#user-name"); }
    get passwordInput() { return cy.get("#password"); }
    get loginButton() { return cy.get("#login-button"); }

    loginToTheApp(users) {
        this.usernameInput.type(users.username);
        this.passwordInput.type(users.password);
        cy.wait(200);

        this.loginButton.click();
        
        return productPage;
    }

    open() {
        cy.visit("https://www.saucedemo.com/");

        return this;
    }
}

export default new LoginPage()