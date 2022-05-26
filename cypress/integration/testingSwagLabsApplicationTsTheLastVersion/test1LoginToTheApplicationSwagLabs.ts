
import usersForSwaglabs from "../../data/usersForSwaglabs";
import {LoginPageSwaglabs} from "../../support/pages/swaglabsPagesTheLastVersion/loginPageSwaglabs";
import { ProductPageSwaglabs } from "../../support/pages/swaglabsPagesTheLastVersion/productPageSwaglabs";


const l = new LoginPageSwaglabs();
const p = new ProductPageSwaglabs();
describe ("Test suite 1 for login (possitive)", function () {

    beforeEach(function () {
        l.open()
    });

    it("Test 1 (possitive)", function () {
        
        l.loginToTheApp(usersForSwaglabs.standardUser)
        p.productLabelChecking();
        
    });

    it("Test 2 (possitive)", function () {
        
        l.loginToTheApp(usersForSwaglabs.problemUser)
        p.productLabelChecking();
        
    });


describe ("Test suite for login (negative)", function () {

    it("Test 3 (negative)", function () {
        l.loginToTheApp(usersForSwaglabs.wrongPasswordUser)
        l.wrongPasswordChecking()
        
    });

    it("Test 4 (negative without password)", function () {
        l.loginToTheAppWithoutPassword(usersForSwaglabs.withoutPasswordUser)
       .errorWhenWeWantToLoginWithoutPassword()

    });
   
    it("Test 5 (negative without user name)", function () {
        l.loginToTheAppWithoutUserName(usersForSwaglabs.withoutUserName)
       .errorWhenWeWantToLoginWithoutUserName()

    });

    it("Test 6 (negative with locked out user)", function () {
        l.loginToTheApp(usersForSwaglabs.lockedOutUser)
        l.errorWhenWeWantToLoginWithLockedOutUser()

    });

    });

    afterEach(function () {
        cy.log("after Each");
    });

});