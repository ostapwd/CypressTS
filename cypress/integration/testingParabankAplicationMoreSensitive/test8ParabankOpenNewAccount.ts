import { MainParabankPageOpenNewAccount } from "../../support/pages/parabankPagesMoreSensitive/mainParabankPageOpenNewAccount";
import usersParabank from "../../data/registrationUsersParabank";
import {MainParabankPageLoginRegister} from "../../support/pages/parabankPagesMoreSensitive/mainParabankPageLoginRegister";

const openNewAccount = new MainParabankPageOpenNewAccount();
const loginRegister = new MainParabankPageLoginRegister();

describe ("Test suite for Parabank, how to Open New Account", function () {
    
    it("Test 1 to Open New Account in Parabank selected month April and Debt transaction", () => {
        loginRegister.open()
        .registerToTheApp(usersParabank.thirdUser)
        .buttonRegister();
        openNewAccount.clickOnTheLinkOpenNewAccount()
        .whatTypeOfAccountWeWantToOpen()
        .filterByTextTypeOfAccount("SAVINGS")
        .filterByIndexNumberOfAccount(0)
        .shadowInputButtonOpenNewAccount()
        openNewAccount.watchResultsOfOpeningTheAccount()
        .clickOnNewAccountNumber()
        .showAccountActivity()
        .actuallyPeriodChooseMonth('April')
        .clickOnChooseTypeOfActivity('Debit')
        .buttonGoFromAccountActivity()
        openNewAccount.theResultOfClickingOnTheButtonGo()
    })

    it("Test 2 to Open New Account in Parabank selected All month and All transaction", () => {
        loginRegister.open()
        .registerToTheApp(usersParabank.onlyUser)
        .buttonRegister();
        openNewAccount.clickOnTheLinkOpenNewAccount()
        .whatTypeOfAccountWeWantToOpen()
        .filterByTextTypeOfAccount("SAVINGS")
        .filterByIndexNumberOfAccount(0)
        .shadowInputButtonOpenNewAccount()
        openNewAccount.watchResultsOfOpeningTheAccount()
        .clickOnNewAccountNumber()
        .showAccountActivity()
        .actuallyPeriodChooseMonth('All')
        .clickOnChooseTypeOfActivity('All')
        .buttonGoFromAccountActivity()
        openNewAccount.openNewAccountAndSelectAllMonthAndTransactions()
        .fundsTransferReceivedClick()
        .checkifWeAreInTheCorrectPage()
    })


})