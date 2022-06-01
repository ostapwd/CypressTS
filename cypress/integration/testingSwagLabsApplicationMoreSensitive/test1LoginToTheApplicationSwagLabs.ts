
import usersForSwaglabs from "../../data/usersForSwaglabs";
import { LoginPageSwaglabs } from "../../support/pages/swaglabsPagesMoreSensitive/loginPageSwaglabs";
import { ProductPageSwaglabs } from "../../support/pages/swaglabsPagesMoreSensitive/productPageSwaglabs";


const login = new LoginPageSwaglabs();
const product = new ProductPageSwaglabs();
describe("Test suite 1 for login (possitive)", function () {

    beforeEach(function () {
        login.open()
    });

    it("Test 1 (possitive)", function () {

        login.loginToTheApp(usersForSwaglabs.standardUser)
        product.productLabelChecking();

    });

    it("Test 2 (possitive)", function () {

        login.loginToTheApp(usersForSwaglabs.problemUser)
        product.productLabelChecking();

    });


    describe("Test suite for login (negative)", function () {

        it("Test 3 (negative)", function () {
            login.loginToTheApp(usersForSwaglabs.wrongPasswordUser)
            login.wrongPasswordChecking()

        });

        it("Test 4 (negative without password)", function () {
            login.loginToTheAppWithoutPassword(usersForSwaglabs.withoutPasswordUser)
                .errorWhenWeWantToLoginWithoutPassword()

        });

        it("Test 5 (negative without user name)", function () {
            login.loginToTheAppWithoutUserName(usersForSwaglabs.withoutUserName)
                .errorWhenWeWantToLoginWithoutUserName()

        });

        it("Test 6 (negative with locked out user)", function () {
            login.loginToTheApp(usersForSwaglabs.lockedOutUser)
            login.errorWhenWeWantToLoginWithLockedOutUser()

        });

    });

    afterEach(function () {
        cy.log("after Each");
    });

});