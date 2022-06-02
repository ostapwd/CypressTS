import { MainParabankPageAccountOverview } from "../../support/pages/parabankPages/mainParabankPageAccountsOverview"
import usersParabank from "../../data/registrationUsersParabank";
import { MainParabankPageLoginRegister } from "../../support/pages/parabankPages/mainParabankPageLoginRegister";



describe("Test for Parabank, Accounts Overview", function () {
    beforeEach('login to the app', () => {
        new MainParabankPageLoginRegister().open()
            .clickOnTheButtonToRegisterToTheApp()
        new MainParabankPageLoginRegister().confirmationThatWeAreOnSelectedRegisterPage()
            .should("contain", "Signing up is easy!")
        new MainParabankPageLoginRegister().registerToTheApp(usersParabank.fourthUser)
            .clickOnTheButtonRegister();
    });

    it("Test 1 to Accounts Overview in Parabank", () => {

        new MainParabankPageAccountOverview().clickLinkAccountOverview()
            .weMustCheckIfWeAreInTheCorrectPage()
            .enterToAccountToSeeMoreDetails()
            .chooseMonthAccountOverview('All')
            .chooseTransactionTypeClick('All')
            .buttonGoFromAccountActivity()
        new MainParabankPageAccountOverview().checkingIfThereAreEnoughtInputsInTransactionsTable()
            .responseOfThePageAboutAccountActivity()
    })

    afterEach(function () {
        cy.log("after Each");
    });


})
