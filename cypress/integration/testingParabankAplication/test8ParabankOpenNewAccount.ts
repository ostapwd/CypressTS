import { MainParabankPageOpenNewAccount } from "../../support/pages/parabankPages/mainParabankPageOpenNewAccount";
import usersParabank from "../../data/usersParabank";
import {MainParabankPageLoginRegister} from "../../support/pages/parabankPages/mainParabankPageLoginRegister";

const o = new MainParabankPageOpenNewAccount;
const l = new MainParabankPageLoginRegister();

describe ("Third test suite for Parabank", function () {
    beforeEach('login to the app', () => {
        l.open()
        .registerToTheApp(usersParabank.thirdUser)
        .buttonRegister();
    });

    it("Test 1 to Open New Account in Parabank", () => {
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

    afterEach(function () {
        cy.log("after Each");
    });


})