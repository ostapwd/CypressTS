"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterParabankTS = void 0;
var RegisterParabankTS = /** @class */ (function () {
    function RegisterParabankTS() {
    }
    RegisterParabankTS.prototype.firstName = function () { return cy.get("[name='customer.firstName']"); };
    ;
    RegisterParabankTS.prototype.lastName = function () { return cy.get('[name="customer.lastName"]'); };
    ;
    RegisterParabankTS.prototype.castomerStreet = function () { return cy.get('[name="customer.address.street"]'); };
    RegisterParabankTS.prototype.castomerCity = function () { return cy.get('[name="customer.address.city"]'); };
    RegisterParabankTS.prototype.castomerState = function () { return cy.get('[name="customer.address.state"]'); };
    RegisterParabankTS.prototype.castomerZip = function () { return cy.get('[name="customer.address.zipCode"]'); };
    RegisterParabankTS.prototype.castomerPhone = function () { return cy.get('[name="customer.phoneNumber"]'); };
    RegisterParabankTS.prototype.castomerSSN = function () { return cy.get('[name="customer.ssn"]'); };
    RegisterParabankTS.prototype.userName = function () { return cy.get('[name="customer.username"]'); };
    RegisterParabankTS.prototype.userPassword = function () { return cy.get('[name="customer.password"]'); };
    RegisterParabankTS.prototype.repeatedPassword = function () { return cy.get('[name="repeatedPassword"]'); };
    RegisterParabankTS.prototype.registerButton = function () { return cy.xpath('//a[text()="Register"]'); };
    //private registerButton(){return cy.get('[value="Register"]')}
    RegisterParabankTS.prototype.registerButton2 = function () { return cy.get('#rightPanel .button'); };
    RegisterParabankTS.prototype.registerToApp = function (userCreds) {
        this.firstName().type(userCreds);
        this.lastName().type(userCreds);
        this.castomerStreet().type(userCreds);
        this.castomerCity().type(userCreds);
        this.castomerState().type(userCreds);
        this.castomerZip().type(userCreds);
        this.castomerPhone().type(userCreds);
        this.castomerSSN().type(userCreds);
        this.userName().type(userCreds);
        this.userPassword().type(userCreds);
        this.repeatedPassword().type(userCreds);
        this.registerButton2().click();
    };
    RegisterParabankTS.prototype.clickRegisterButton = function () {
        this.registerButton().click();
        return this;
    };
    RegisterParabankTS.prototype.open = function () {
        cy.visit("https://parabank.parasoft.com/parabank/index.htm");
        return this;
    };
    return RegisterParabankTS;
}());
exports.RegisterParabankTS = RegisterParabankTS;
//# sourceMappingURL=registerParaPomTS.js.map