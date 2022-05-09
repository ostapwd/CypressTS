class LoginPage {
    get usernameInput() { return cy.get("#user-name"); }
    get passwordInput() { return cy.get("#password"); }
    get loginButton() { return cy.get("#login-button"); }

    loginToTheApp(name, password) {
        this.usernameInput.type(name);
        this.passwordInput.type(password);
        cy.wait(2000);
        this.loginButton.click();
    }

    open() {
        cy.visit('https://www.saucedemo.com');

    }
}

export default new LoginPage()