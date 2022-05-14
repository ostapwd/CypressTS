import users from "../data/users";
import {Dog} from "../support/pages/dog";
import {LoginPage} from "../support/pages/loginPage";
import {LoginPageTS} from "../support/pages/loginPageTS";
import {ProductPageTS} from "../support/pages/productPageTS";
import {BasePage} from "../support/pages/BasePage";

const lp =  new LoginPage();

describe('Test suite 3', function () {
    it.only('Verify a user can add all products to the chart', function () {

        const loginPageTypeScript = new LoginPageTS();

        const r1 = loginPageTypeScript.DoSomething(7, 4);
        cy.log(r1);


       // let dd = new BasePage();
        //loginPageTypeScript.waitForSeconds(5);

        //loginPageTypeScript.open();

        //.loginToTheApp(users.standardUser);

        //new LoginPage().loginToTheApp("standard_user", "secret_sauce")

        let m = 1;
        m = "hello";
        m = {};
        m = function() {}

        const dog1 = new Dog("brovko", 5);
        const dog2 = new Dog("brovko2", 7);

        dog1.printMyName();
        dog2.printMyName();

        const result = dog2.transfer(15);

        cy.log(result);

        new LoginPage().open()
            .loginToTheApp(users.standardUser)
            .addToChartAllProducts()
            .verifyThatNumberOfSelectedProductsEqualsTo('6');


        let loginPage =  new LoginPage();
        loginPage.tttrtrt = function(){
            cy.log("I'm a new function added on the fly");
        }

        loginPage.tttrtrt.color = "red";

        loginPage.tttrtrt();

        cy.log(loginPage.tttrtrt.color)
    });

    it('Verify a user can add all products to the chart 1111', function () {
        new LoginPageTS().open("https://www.saucedemo.com/")
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


    });

    describe('Test suite for login (positive)', function () {

        before(function() {
            cy.log("Internal before");
        });

        beforeEach(function() {
            cy.log("before each");
        });

        it('Test 1 (positive login)', function () {

            cy.get("span.title").should("contain", "Products");
        });

        it('Test 2 (positive login)', function () {
            new LoginPage().loginToTheApp("standard_user", "secret_sauce")

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
