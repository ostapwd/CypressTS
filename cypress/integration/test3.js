import loginPage from "../support/pages/loginPage";

import users from "../data/users";

describe('Test suite 3', function () {
    it.only('Verify a user can add all products to the chart', function () {
        loginPage.open()
            .loginToTheApp(users.standardUser)
            .addToChartAllProducts()
            .verifyThatNumberOfSelectedProductsEqualsTo('6');
    });
});

describe('Test suite for login', function () {

    before(function() {
        cy.log("Main before");
    });

    beforeEach(function() {
        cy.log("main before each");

        loginPage.open();
    });

    describe('Test suite for login (positive)', function () {

        before(function() {
            cy.log("Internal before");
        });

        beforeEach(function() {
            cy.log("before each");
        });

        it('Test 1 (positive login)', function () {
            loginPage.loginToTheApp("standard_user", "secret_sauce")

            cy.get("span.title").should("contain", "Products");
        });

        it('Test 2 (positive login)', function () {
            loginPage.loginToTheApp("standard_user", "secret_sauce")

            cy.get("span.title").should("contain", "Products");
        });

        afterEach(function() {
            cy.log("after each");
        });

        after(function() {
            cy.log("Internal after");
        });

    });


    describe('Test suite for login (negative)', function () {

        beforeEach(function() {
            cy.log("before each");
        });

        it('Test 3 (negative login)', function () {
            loginPage.loginToTheApp("standard_user", "secret_sauce111")

            cy.get("h3[data-test='error']").should("contain", "Epic sadface: Username and password do not match any user in this service");
        });

        it('Test 4 (negative login)', function () {
            loginPage.usernameInput.type("standard_user");
            loginPage.loginButton.click();

            cy.get("h3[data-test='error']").should("contain", "Epic sadface: Password is required");
        });

    });

    after(function() {
        cy.log("Main after");
    });
});
