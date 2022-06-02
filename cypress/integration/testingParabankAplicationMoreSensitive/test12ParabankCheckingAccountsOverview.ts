import { MainParabankPageAccountOverview } from "../../support/pages/parabankPagesMoreSensitive/mainParabankPageAccountsOverview"
import usersParabank from "../../data/registrationUsersParabank";
import { MainParabankPageLoginRegister } from "../../support/pages/parabankPagesMoreSensitive/mainParabankPageLoginRegister";


const loginRegister = new MainParabankPageLoginRegister();
const accountOverwie = new MainParabankPageAccountOverview();


describe("Test for Parabank, Accounts Overview", function () {
    beforeEach('login to the app', () => {
        loginRegister.open()
            .registerToTheApp(usersParabank.fourthUser)
            .buttonRegisterClick();
    });

    it("Test 1 to Accounts Overview in Parabank", () => {

        accountOverwie.clickLinkAccountOverview()
            .weMustCheckIfWeAreInTheCorrectPage()
            .enterToAccountToSeeMoreDetails()
            .chooseMonthAccountOverview('All')
            .chooseTransactionTypeClick('All')
            .buttonGoFromAccountActivity()
        accountOverwie.checkingIfThereAreEnoughtInputsInTransactionsTable()
            .responseOfThePageAboutAccountActivity()


    })

    afterEach(function () {
        cy.log("after Each");
    });


})
