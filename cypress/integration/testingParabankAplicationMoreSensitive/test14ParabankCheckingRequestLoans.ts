
import { MainParabankPageLoginRegister } from "../../support/pages/parabankPagesMoreSensitive/mainParabankPageLoginRegister";
import applyForALoan from "../../data/applyForALoanParabank";
import { MainParabankPageRequestLoans } from "../../support/pages/parabankPagesMoreSensitive/mainParabankPageRequestLoan";
import loginUsersParabank from "../../data/loginUsersParabank";



const loginRegister = new MainParabankPageLoginRegister();
const requestLoans = new MainParabankPageRequestLoans();

describe("Test for Parabank, Request Loans", function () {
    beforeEach('login to the app', () => {
        loginRegister.open()
            .loginToTheApp(loginUsersParabank.login);

    });

    it("Test 1 to check Request Loans in Parabank", () => {
        requestLoans.linkOpenRequestLoansClick()
            .toFillTableApplyForALoan(applyForALoan.first)
            .whenWeWantToConfirmAnAccount(0)
            .clickOnThebuttonApllyNow()
            .confirmationThetWeAreOnTheNededPage()
    })
    afterEach(function () {
        cy.log("after Each");
    });
})
