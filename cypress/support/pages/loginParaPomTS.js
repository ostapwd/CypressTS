"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginParabankTS = void 0;
var LoginParabankTS = /** @class */ (function () {
    function LoginParabankTS() {
    }
    LoginParabankTS.prototype.usernameInput = function () { return cy.get("[name='username']"); };
    LoginParabankTS.prototype.passwordInput = function () { return cy.get("[name='password']"); };
    LoginParabankTS.prototype.loginButton = function () { return cy.get("[value='Log In']"); };
    LoginParabankTS.prototype.loginToTheApp = function (creds) {
        this.usernameInput().type(creds);
        this.passwordInput().type(creds);
        this.loginButton().click();
    };
    LoginParabankTS.prototype.open = function () {
        cy.visit("https://parabank.parasoft.com/parabank/index.htm");
        return this;
    };
    return LoginParabankTS;
}());
exports.LoginParabankTS = LoginParabankTS;
//# sourceMappingURL=loginParaPomTS.js.map