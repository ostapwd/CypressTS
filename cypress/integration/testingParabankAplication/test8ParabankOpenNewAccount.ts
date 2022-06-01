import { MainParabankPageOpenNewAccount } from "../../support/pages/parabankPages/mainParabankPageOpenNewAccount";
import usersParabank from "../../data/registrationUsersParabank";
import { MainParabankPageLoginRegister } from "../../support/pages/parabankPages/mainParabankPageLoginRegister";


describe("Test suite for Parabank, how to Open New Account", function () {

    it("Test 1 to Open New Account in Parabank selected month April and Debt transaction", () => {
        new MainParabankPageLoginRegister().open()
            .clickOnTheButtonToRegisterToTheApp()
        new MainParabankPageLoginRegister().confirmationThatWeAreOnSelectedRegisterPage()
            .should("contain", "Signing up is easy!")
        new MainParabankPageLoginRegister().registerToTheApp(usersParabank.thirdUser)
            .clickOnTheButtonRegister();
        new MainParabankPageOpenNewAccount().clickOnTheLinkOpenNewAccount()
            .whatTypeOfAccountWeWantToOpen()
            .filterByTextTypeOfAccount("SAVINGS")
            .filterByIndexNumberOfAccount(0)
            .shadowInputButtonOpenNewAccount()
        new MainParabankPageOpenNewAccount().watchResultsOfOpeningTheAccount()
            .clickOnNewAccountNumber()
            .showAccountActivity()
            .actuallyPeriodChooseMonth('April')
            .clickOnChooseTypeOfActivity('Debit')
            .buttonGoFromAccountActivity()
        new MainParabankPageOpenNewAccount().theResultOfClickingOnTheButtonGo()
    })

    it("Test 2 to Open New Account in Parabank selected All month and All transaction", () => {
        new MainParabankPageLoginRegister().open()
            .clickOnTheButtonToRegisterToTheApp()
        new MainParabankPageLoginRegister().confirmationThatWeAreOnSelectedRegisterPage()
            .should("contain", "Signing up is easy!")
        new MainParabankPageLoginRegister().registerToTheApp(usersParabank.registerUser)
            .clickOnTheButtonRegister();
        new MainParabankPageOpenNewAccount().clickOnTheLinkOpenNewAccount()
            .whatTypeOfAccountWeWantToOpen()
            .filterByTextTypeOfAccount("SAVINGS")
            .filterByIndexNumberOfAccount(0)
            .shadowInputButtonOpenNewAccount()
        new MainParabankPageOpenNewAccount().watchResultsOfOpeningTheAccount()
            .clickOnNewAccountNumber()
            .showAccountActivity()
            .actuallyPeriodChooseMonth('All')
            .clickOnChooseTypeOfActivity('All')
            .buttonGoFromAccountActivity()
        new MainParabankPageOpenNewAccount().openNewAccountAndSelectAllMonthAndTransactions()
            .fundsTransferReceivedClick()
            .checkifWeAreInTheCorrectPage()
    })


})