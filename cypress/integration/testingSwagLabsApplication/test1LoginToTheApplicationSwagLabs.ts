
import usersForSwaglabs from "../../data/usersForSwaglabs";
import { LoginPageSwaglabs } from "../../support/pages/swaglabsPages/loginPageSwaglabs";
import { ProductPageSwaglabs } from "../../support/pages/swaglabsPages/productPageSwaglabs";


describe("Test suite 1 for login (possitive)", function () {

    beforeEach(function () {
        new LoginPageSwaglabs().open()
    });

    it("Test 1 'Login to the app with a standart user' (possitive)", function () {

        new LoginPageSwaglabs().loginToTheApp(usersForSwaglabs.standardUser)
        new ProductPageSwaglabs().checkProductsLabelInTheProductPage()
            .should("contain", "Products")

    });

    it("Test 2 'Login to the app with a problem user' (possitive)", function () {

        new LoginPageSwaglabs().loginToTheApp(usersForSwaglabs.problemUser)
        new ProductPageSwaglabs().checkProductsLabelInTheProductPage()
            .should("contain", "Products")

    });


    describe("Test suite for login (negative)", function () {

        it("Test 3 'Login to the app with a wrong password' (negative)", function () {
            new LoginPageSwaglabs().loginToTheApp(usersForSwaglabs.wrongPasswordUser)
            new LoginPageSwaglabs().checkThatItWasWrittenWrongPasswordInTheInput()
                .should("contain", "Epic sadface: Username and password do not match any user in this service");

        });

        it("Test 4 'Login to the app without password' (negative)", function () {
            new LoginPageSwaglabs().loginToTheAppWithoutPassword(usersForSwaglabs.withoutPasswordUser)
                .errorWhenWeWantToLoginWithoutPassword()
                .should("contain", "Epic sadface: Password is required");

        });

        it("Test 5 'Login to the app without user name' (negative)", function () {
            new LoginPageSwaglabs().loginToTheAppWithoutUserNameAndClick(usersForSwaglabs.withoutUserName)
                .errorWhenWeWantToLoginWithoutUserName()
                .should("contain", "Epic sadface: Username is required");

        });

        it("Test 6 'Login to the app with locked out user' (negative)", function () {
            new LoginPageSwaglabs().loginToTheApp(usersForSwaglabs.lockedOutUser)
            new LoginPageSwaglabs().errorWhenWeWantToLoginWithLockedOutUser()
                .should("contain", "Epic sadface: Sorry, this user has been locked out.");

        });

    });

    afterEach(function () {
        cy.log("after Each");
    });

});