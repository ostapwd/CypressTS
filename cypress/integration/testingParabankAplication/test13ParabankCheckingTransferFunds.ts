import usersParabank from "../../data/registrationUsersParabank";
import { MainParabankPageLoginRegister } from "../../support/pages/parabankPages/mainParabankPageLoginRegister";
import { MainParabankPageTransferFunds } from "../../support/pages/parabankPages/mainParabankPageTransferFunds";
import { MainParabankPageOpenNewAccount } from "../../support/pages/parabankPages/mainParabankPageOpenNewAccount";
import transfer from "../../data/transferParabank";

const openNewAccountPage = new MainParabankPageOpenNewAccount();
const loginRegisterPage = new MainParabankPageLoginRegister();
const transferFundsPage = new MainParabankPageTransferFunds();

describe("Test for Parabank, Transfer Funds", function () {
    beforeEach('login to the app', () => {
        loginRegisterPage.open()
            .registerToTheApp(usersParabank.thirdUser)
            .clickOnTheButtonRegister();
    });

    it("Test 1 to check Transfer Funds in Parabank", () => {
        openNewAccountPage.clickOnTheLinkOpenNewAccount()
            .filterByTextTypeOfAccount("CHECKING")
        transferFundsPage.buttonOpenNewAccount()
        transferFundsPage.clickLinkTransferFunds()
            .resultOfTransferFundsOpeningWhenWeClickedOnIt()
            .sendTransfer(transfer.transferOne)
            .clickButtonSubmitOnTheTransferFunds()
            .transferCompleteСonfirmation()

    })

    afterEach(function () {
        cy.log("after Each");
    });


})
