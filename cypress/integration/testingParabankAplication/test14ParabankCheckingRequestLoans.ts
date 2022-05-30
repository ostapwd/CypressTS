
import { MainParabankPageLoginRegister } from "../../support/pages/parabankPages/mainParabankPageLoginRegister";
import applyForALoan from "../../data/applyForALoanParabank";
import { MainParabankPageRequestLoans } from "../../support/pages/parabankPages/mainParabankPageRequestLoan";
import loginUsersParabank from "../../data/loginUsersParabank";



const loginRegistePage = new MainParabankPageLoginRegister();
const requestLoansPage = new MainParabankPageRequestLoans();

describe("Test for Parabank, Request Loans", function () {
    beforeEach('login to the app', () => {
        loginRegistePage.open()
            .loginToTheApp(loginUsersParabank.login);

    });

    it("Test 1 to check Request Loans in Parabank", () => {
        requestLoansPage.linkOpenRequestLoansClick()
            .toFillTableApplyForALoan(applyForALoan.first)
            .whenWeWantToConfirmAnAccount(0)
            .clickOnThebuttonApllyNow()
            .confirmationThetWeAreOnTheNededPage()
    })
    afterEach(function () {
        cy.log("after Each");
    });
})
