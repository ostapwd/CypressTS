import { MainParabankPageOpenNewAccount } from "../../support/pages/parabankPages/mainParabankPageOpenNewAccount";
import usersParabank from "../../data/registrationUsersParabank";
import {MainParabankPageLoginRegister} from "../../support/pages/parabankPages/mainParabankPageLoginRegister";

const o = new MainParabankPageOpenNewAccount();
const l = new MainParabankPageLoginRegister();

describe ("Test suite for Parabank, how to Open New Account", function () {
    
    it("Test 1 to Open New Account in Parabank selected month April and Debt transaction", () => {
        l.open()
        .registerToTheApp(usersParabank.thirdUser)
        .buttonRegister();
        o.clickOnTheLinkOpenNewAccount()
        .whatTypeOfAccountWeWantToOpen()
        .filterByTextTypeOfAccount("SAVINGS")
        .filterByIndexNumberOfAccount(0)
        .shadowInputButtonOpenNewAccount()
        o.watchResultsOfOpeningTheAccount()
        .clickOnNewAccountNumber()
        .showAccountActivity()
        .actuallyPeriodChooseMonth('April')
        .clickOnChooseTypeOfActivity('Debit')
        .buttonGoFromAccountActivity()
        o.theResultOfClickingOnTheButtonGo()
    })

    it("Test 2 to Open New Account in Parabank selected All month and All transaction", () => {
        l.open()
        .registerToTheApp(usersParabank.onlyUser)
        .buttonRegister();
        o.clickOnTheLinkOpenNewAccount()
        .whatTypeOfAccountWeWantToOpen()
        .filterByTextTypeOfAccount("SAVINGS")
        .filterByIndexNumberOfAccount(0)
        .shadowInputButtonOpenNewAccount()
        o.watchResultsOfOpeningTheAccount()
        .clickOnNewAccountNumber()
        .showAccountActivity()
        .actuallyPeriodChooseMonth('All')
        .clickOnChooseTypeOfActivity('All')
        .buttonGoFromAccountActivity()
        o.openNewAccountAndSelectAllMonthAndTransactions()
        .fundsTransferReceivedClick()
        .checkifWeAreInTheCorrectPage()
    })


})