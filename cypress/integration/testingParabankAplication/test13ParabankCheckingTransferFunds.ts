import usersParabank from "../../data/usersParabank";
import {MainParabankPageLoginRegister} from "../../support/pages/parabankPages/mainParabankPageLoginRegister";
import {MainParabankPageTransferFunds} from "../../support/pages/parabankPages/mainParabankPageTransferFunds";
import { MainParabankPageOpenNewAccount } from "../../support/pages/parabankPages/mainParabankPageOpenNewAccount";
import transfer from "../../data/transfer";

const o = new MainParabankPageOpenNewAccount();
const l = new MainParabankPageLoginRegister();
const tf = new MainParabankPageTransferFunds();

describe ("Test for Parabank, Transfer Funds", function () {
    beforeEach('login to the app', () => {
        l.open()
        .registerToTheApp(usersParabank.thirdUser)
        .buttonRegister();
    });

    it("Test 1 to check Transfer Funds in Parabank", () => {
        o.clickOnTheLinkOpenNewAccount()
        .filterByTextTypeOfAccount("CHECKING")
        tf.buttonOpenNewAccount()
        tf.clickLinkTransferFunds()
        .resultOfTransferFundsOpeningWhenWeClickedOnIt()
        .sendTransfer(transfer.transferOne)
        //.filterByIndexNumberOfAccount(5)
        //.buttonOpenNewAccount()
})

    afterEach(function () {
        cy.log("after Each");
    });


})
