"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPageTS = void 0;
class LoginPageTS {
    usernameInput() { return cy.get("#user-name"); }
    passwordInput() { return cy.get("#password"); }
    loginButton() { return cy.get("#login-button"); }
    loginToTheApp(username, password) {
        this.usernameInput().type(username);
        this.passwordInput().type(password);
        this.loginButton().click();
    }
    open() {
        cy.visit("https://www.saucedemo.com/");
        return this;
    }
}
exports.LoginPageTS = LoginPageTS;
