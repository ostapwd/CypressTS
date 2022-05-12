"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPageTS = void 0;
var BasePage_1 = __importDefault(require("./BasePage"));
var productPageTS_1 = require("./productPageTS");
var LoginPageTS = /** @class */ (function (_super) {
    __extends(LoginPageTS, _super);
    function LoginPageTS() {
        return _super !== null && _super.apply(this, arguments) || this;
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
}(BasePage_1.default));
exports.LoginPageTS = LoginPageTS;
