import { MainParabankPageOpenNewAccount } from "../../support/pages/parabankPages/mainParabankPageOpenNewAccount";
import usersParabank from "../../data/registrationUsersParabank";
import { MainParabankPageLoginRegister } from "../../support/pages/parabankPages/mainParabankPageLoginRegister";

const openNewAccountPage = new MainParabankPageOpenNewAccount();
const loginRegisterPage = new MainParabankPageLoginRegister();

describe("Test suite for Parabank, how to Open New Account", function () {

    it("Test 1 to Open New Account in Parabank selected month April and Debt transaction", () => {
        loginRegisterPage.open()
            .registerToTheApp(usersParabank.thirdUser)
            .clickOnTheButtonRegister();
        openNewAccountPage.clickOnTheLinkOpenNewAccount()
            .whatTypeOfAccountWeWantToOpen()
            .filterByTextTypeOfAccount("SAVINGS")
            .filterByIndexNumberOfAccount(0)
            .shadowInputButtonOpenNewAccount()
        openNewAccountPage.watchResultsOfOpeningTheAccount()
            .clickOnNewAccountNumber()
            .showAccountActivity()
            .actuallyPeriodChooseMonth('April')
            .clickOnChooseTypeOfActivity('Debit')
            .buttonGoFromAccountActivity()
        openNewAccountPage.theResultOfClickingOnTheButtonGo()
    })

    it("Test 2 to Open New Account in Parabank selected All month and All transaction", () => {
        loginRegisterPage.open()
            .registerToTheApp(usersParabank.onlyUser)
            .clickOnTheButtonRegister();
        openNewAccountPage.clickOnTheLinkOpenNewAccount()
            .whatTypeOfAccountWeWantToOpen()
            .filterByTextTypeOfAccount("SAVINGS")
            .filterByIndexNumberOfAccount(0)
            .shadowInputButtonOpenNewAccount()
        openNewAccountPage.watchResultsOfOpeningTheAccount()
            .clickOnNewAccountNumber()
            .showAccountActivity()
            .actuallyPeriodChooseMonth('All')
            .clickOnChooseTypeOfActivity('All')
            .buttonGoFromAccountActivity()
        openNewAccountPage.openNewAccountAndSelectAllMonthAndTransactions()
            .fundsTransferReceivedClick()
            .checkifWeAreInTheCorrectPage()
    })


})