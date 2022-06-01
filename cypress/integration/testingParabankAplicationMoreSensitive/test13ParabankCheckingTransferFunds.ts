import usersParabank from "../../data/registrationUsersParabank";
import {MainParabankPageLoginRegister} from "../../support/pages/parabankPagesMoreSensitive/mainParabankPageLoginRegister";
import {MainParabankPageTransferFunds} from "../../support/pages/parabankPagesMoreSensitive/mainParabankPageTransferFunds";
import { MainParabankPageOpenNewAccount } from "../../support/pages/parabankPagesMoreSensitive/mainParabankPageOpenNewAccount";
import transfer from "../../data/transferParabank";

const openNewAccount = new MainParabankPageOpenNewAccount();
const loginRegister = new MainParabankPageLoginRegister();
const transferFunds = new MainParabankPageTransferFunds();

describe ("Test for Parabank, Transfer Funds", function () {
    beforeEach('login to the app', () => {
        loginRegister.open()
        .registerToTheApp(usersParabank.thirdUser)
        .buttonRegister();
    });

    it("Test 1 to check Transfer Funds in Parabank", () => {
        openNewAccount.clickOnTheLinkOpenNewAccount()
        .filterByTextTypeOfAccount("CHECKING")
        transferFunds.buttonOpenNewAccount()
        transferFunds.clickLinkTransferFunds()
        .resultOfTransferFundsOpeningWhenWeClickedOnIt()
        .sendTransfer(transfer.transferOne)
        .clickButtonSubmitOnTheTransferFunds()
        .transferCompleteСonfirmation()
        
})

    afterEach(function () {
        cy.log("after Each");
    });


})
