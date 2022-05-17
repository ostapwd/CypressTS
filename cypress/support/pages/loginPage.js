import productPage from "./productPage";

class LoginPage {

    get usernameInput() { return cy.get('#user-name'); }
    get passwordInput() { return cy.get('#password'); }
    get loginButton() { return cy.get('#login-button'); }
    get wrongPassVerify() { return cy.get('[data-test ="error"]'); }


    loginToTheApp(user) {
        this.usernameInput.type(user.username);
        this.passwordInput.type(user.password);

        this.loginButton.click();



        return productPage;
    }

    wrongPassValidate() {
        this.wrongPassVerify.should('have.text', 'Epic sadface: Username and password do not match any user in this service');

        return this;

    }

    open() {
        cy.visit('https://www.saucedemo.com/');
        return this;

    }


}

export default new LoginPage()