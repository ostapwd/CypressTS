import usersParabank from "../../data/registrationUsersParabank";
import { MainParabankPageLoginRegister } from "../../support/pages/parabankPages/mainParabankPageLoginRegister";
import { MainParabankPageBillPay } from "../../support/pages/parabankPages/mainParabankPageBillPay";
import payeeInformationUsers from "../../data/payeeInformationUsersParabank";


describe("Test for Parabank to check Bill Pey Service", function () {
    beforeEach('login to the app', () => {
        new MainParabankPageLoginRegister().open()
    })

    it("Test 1 Checking Bill Pey Service", () => {
        new MainParabankPageLoginRegister().registerToTheApp(usersParabank.someUser)
            .clickOnTheButtonRegister()
        new MainParabankPageBillPay().clickOnTheLinkBillPay()
            .checkingHowManyInputsThereAreInTheBillyPay()
            .newPageOfBillPayShouldContain()
            .fillAllInputsToEnterPayeeInformation(payeeInformationUsers.oneUser)
            .checkingBillPaymentComplete()

    });
})