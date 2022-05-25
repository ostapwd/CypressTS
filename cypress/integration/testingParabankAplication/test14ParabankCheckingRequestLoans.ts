
import {MainParabankPageLoginRegister} from "../../support/pages/parabankPages/mainParabankPageLoginRegister";
import applyForALoan from "../../data/applyForALoanParabank";
import {MainParabankPageRequestLoans} from "../../support/pages/parabankPages/mainParabankPageRequestLoan";
import loginUsersParabank from "../../data/loginUsersParabank";



const l = new MainParabankPageLoginRegister();
const r = new MainParabankPageRequestLoans();

describe ("Test for Parabank, Request Loans", function () {
    beforeEach('login to the app', () => {
        l.open()
        .loginToTheApp(loginUsersParabank.login);
        
    });

    it("Test 1 to check Request Loans in Parabank", () => {
        r.linkOpenRequestLoansClick()
        .toFillTableApplyForALoan(applyForALoan.first)
        .whenWeWantToConfirmAnAccount(0)
        .clickOnThebuttonApllyNow()
        .confirmationThetWeAreOnTheNededPage()
})
    afterEach(function () {
        cy.log("after Each");
    });
})
