import productPage from "./productPage";

export class LoginPage {

    get usernameInput() { return cy.get("#user-name"); }
    get passwordInput() { return cy.get("#password"); }
    get loginButton() { return cy.get("#login-button"); }

    loginToTheApp(user) {
        this.usernameInput.type(user.username);
        this.passwordInput.type(user.password);
        cy.wait(1000);

        this.loginButton.click();

        return productPage;
    }

    open() {
        cy.visit("https://www.saucedemo.com/");

        return this;
    }

}

//export default new LoginPage()