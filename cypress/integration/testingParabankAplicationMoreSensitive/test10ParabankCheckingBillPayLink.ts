import usersParabank from "../../data/registrationUsersParabank";
import { MainParabankPageLoginRegister } from "../../support/pages/parabankPagesMoreSensitive/mainParabankPageLoginRegister";
import { MainParabankPageBillPay } from "../../support/pages/parabankPagesMoreSensitive/mainParabankPageBillPay";
import payeeInformationUsers from "../../data/payeeInformationUsersParabank";

const loginRegister = new MainParabankPageLoginRegister();
const billyPay = new MainParabankPageBillPay();

describe("Test for Parabank to check Bill Pey Service", function () {
    beforeEach('login to the app', () => {
        loginRegister.open()
    })

    it("Test 1 Checking Bill Pey Service", () => {
        loginRegister.registerToTheApp(usersParabank.someUser)
            .buttonRegisterClick()
        billyPay.clickOnTheLinkBillPay()
            .checkingHowManyInputsThereAreInTheBillyPay()
            .newPageOfBillPayShouldContain()
            .fillAllInputsToEnterPayeeInformation(payeeInformationUsers.oneUser)
            .checkingBillPaymentComplete()

    });
})