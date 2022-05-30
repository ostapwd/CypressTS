import { MainParabankPageAccountOverview } from "../../support/pages/parabankPages/mainParabankPageAccountsOverview"
import usersParabank from "../../data/registrationUsersParabank";
import { MainParabankPageLoginRegister } from "../../support/pages/parabankPages/mainParabankPageLoginRegister";


const loginRegisterPage = new MainParabankPageLoginRegister();
const accountOverviewPage = new MainParabankPageAccountOverview();


describe("Test for Parabank, Accounts Overview", function () {
    beforeEach('login to the app', () => {
        loginRegisterPage.open()
            .registerToTheApp(usersParabank.fourthUser)
            .clickOnTheButtonRegister();
    });

    it("Test 1 to Accounts Overview in Parabank", () => {

        accountOverviewPage.clickLinkAccountOverview()
            .weMustCheckIfWeAreInTheCorrectPage()
            .enterToAccountToSeeMoreDetails()
            .chooseMonthAccountOverview('All')
            .chooseTransactionTypeClick('All')
            .buttonGoFromAccountActivity()
        accountOverviewPage.checkingIfThereAreEnoughtInputsInTransactionsTable()
            .responseOfThePageAboutAccountActivity()


    })

    afterEach(function () {
        cy.log("after Each");
    });


})
