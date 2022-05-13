"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginTS = void 0;
var LoginTS = /** @class */ (function () {
    function LoginTS() {
    }
    LoginTS.prototype.login_username = function () { return cy.get('#user-name'); };
    LoginTS.prototype.login_password = function () { return cy.get('#password'); };
    LoginTS.prototype.submit = function () { return cy.get('#login-button'); };
    LoginTS.prototype.loginToTheApp = function (users) {
        this.login_username().type(users.username);
        this.login_password().type(users.password);
        this.submit().click();
    };
    LoginTS.prototype.open = function () {
        cy.visit('https://www.saucedemo.com/');
    };
    return LoginTS;
}());
exports.LoginTS = LoginTS;
// export default new LoginTS()
