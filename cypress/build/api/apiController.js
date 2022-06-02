"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiController = /** @class */ (function () {
    function ApiController() {
    }
    ApiController.prototype.getUsers = function () {
        return cy.request({
            method: "GET",
            url: "http://localhost:8080/api/v1/users"
        })
            .then(function (response) {
            cy.log(JSON.stringify(response, null, 2));
        });
    };
    ApiController.prototype.createUser = function (user) {
        return cy.request({
            method: "POST",
            url: "http://localhost:8080/api/v1/users",
            body: user
        })
            .then(function (response) {
            cy.log(JSON.stringify(response, null, 2));
        });
    };
    ApiController.prototype.deleteUser = function (id) {
        return cy.request({
            method: "DELETE",
            url: "http://localhost:8080/api/v1/users/" + id
        })
            .then(function (response) {
            cy.log(JSON.stringify(response, null, 2));
        });
    };
    return ApiController;
}());
exports.default = new ApiController();
