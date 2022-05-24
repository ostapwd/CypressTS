import {MainParabankPageAccountOverview} from "../../support/pages/parabankPages/mainParabankPageAccountsOverview"
import usersParabank from "../../data/usersParabank";
import {MainParabankPageLoginRegister} from "../../support/pages/parabankPages/mainParabankPageLoginRegister";

const l = new MainParabankPageLoginRegister();
const na = new MainParabankPageAccountOverview();

describe ("Test for Parabank, Accounts Overview", function () {
    beforeEach('login to the app', () => {
        l.open()
        .registerToTheApp(usersParabank.thirdUser)
        .buttonRegister();
    });

    it("Test 1 to Accounts Overview in Parabank", () => {

    na.clickLinkAccountOverview()
    .weMustCheckIfWeAreInTheCorrectPage()
    .enterToAccountToSeeMoreDetails()
    .chooseMonthAccountOverview('All')
    .chooseTransactionTypeClick('All')
    .buttonGoFromAccountActivity()
    na.checkingIfThereAreEnoughtInputsInTransactionsTable()
    //.checkingThatTheFillsTransactionsTableAreNotEmpty()

})

afterEach(function () {
    cy.log("after Each");
});


})
