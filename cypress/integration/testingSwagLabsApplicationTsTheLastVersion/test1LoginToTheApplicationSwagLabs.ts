
import usersForSwaglabs from "../../data/usersForSwaglabs";
import { LoginPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/loginPageSwaglabs";
import { ProductPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/productPageSwaglabs";


const loginPage = new LoginPageSwaglabs();
const productPage = new ProductPageSwaglabs();

describe("Test suite 1 for login (possitive)", function () {

    beforeEach(function () {
        loginPage.open()
    });

    it("Test 1 'Login to the app with a standart user' (possitive)", function () {

        loginPage.loginToTheApp(usersForSwaglabs.standardUser)
        productPage.checkProductsLabelInTheProductPage()
            .should("contain", "Products")

    });

    it("Test 2 'Login to the app with a problem user' (possitive)", function () {

        loginPage.loginToTheApp(usersForSwaglabs.problemUser)
        productPage.checkProductsLabelInTheProductPage()
            .should("contain", "Products")

    });


    describe("Test suite for login (negative)", function () {

        it("Test 3 'Login to the app with a wrong password' (negative)", function () {
            loginPage.loginToTheApp(usersForSwaglabs.wrongPasswordUser)
            loginPage.checkThatItWasWrittenWrongPasswordInTheInput()
                .should("contain", "Epic sadface: Username and password do not match any user in this service");

        });

        it("Test 4 'Login to the app without password' (negative)", function () {
            loginPage.loginToTheAppWithoutPassword(usersForSwaglabs.withoutPasswordUser)
            loginPage.errorWhenWeWantToLoginWithoutPassword()
                .should("contain", "Epic sadface: Password is required");

        });

        it("Test 5 'Login to the app without user name' (negative)", function () {
            loginPage.loginToTheAppWithoutUserNameAndClick(usersForSwaglabs.withoutUserName)
            loginPage.errorWhenWeWantToLoginWithoutUserName()
                .should("contain", "Epic sadface: Username is required");

        });

        it("Test 6 'Login to the app with locked out user' (negative)", function () {
            loginPage.loginToTheApp(usersForSwaglabs.lockedOutUser)
            loginPage.errorWhenWeWantToLoginWithLockedOutUser()
                .should("contain", "Epic sadface: Sorry, this user has been locked out.");

        });

    });

    afterEach(function () {
        cy.log("after Each");
    });

});