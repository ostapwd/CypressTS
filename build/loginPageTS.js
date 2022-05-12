"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPageTS = void 0;
var productPageTS_1 = require("./productPageTS");
var LoginPageTS = /** @class */ (function () {
    function LoginPageTS() {
    }
    LoginPageTS.prototype.usernameInput = function () { return cy.get("#user-name"); };
    LoginPageTS.prototype.passwordInput = function () { return cy.get("#password"); };
    LoginPageTS.prototype.loginButton = function () { return cy.get("#login-button"); };
    LoginPageTS.prototype.loginToTheApp = function (user) {
        this.usernameInput().type(user.username);
        this.passwordInput().type(user.password);
        this.loginButton().click();
        return new productPageTS_1.ProductPageTS();
    };
    LoginPageTS.prototype.open = function () {
        cy.visit("https://www.saucedemo.com/");
        return this;
    };
    return LoginPageTS;
}());
exports.LoginPageTS = LoginPageTS;
