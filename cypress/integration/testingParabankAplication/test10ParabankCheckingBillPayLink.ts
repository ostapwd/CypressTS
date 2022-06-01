import usersParabank from "../../data/registrationUsersParabank";
import { MainParabankPageLoginRegister } from "../../support/pages/parabankPages/mainParabankPageLoginRegister";
import { MainParabankPageBillPay } from "../../support/pages/parabankPages/mainParabankPageBillPay";
import payeeInformationUsers from "../../data/payeeInformationUsersParabank";


describe("Test for Parabank to check Bill Pey Service", function () {
    beforeEach('login to the app', () => {
        new MainParabankPageLoginRegister().open()
    })

    it("Test 1 Checking Bill Pey Service", () => {
        new MainParabankPageLoginRegister().clickOnTheButtonToRegisterToTheApp()
        new MainParabankPageLoginRegister().confirmationThatWeAreOnSelectedRegisterPage()
            .should("contain", "Signing up is easy!")
        new MainParabankPageLoginRegister().registerToTheApp(usersParabank.registerUser)
            .clickOnTheButtonRegister()
        new MainParabankPageBillPay().clickOnTheLinkBillPay()
            .checkingHowManyInputsThereAreInTheBillyPay().then(($lis) => {
                expect($lis, '3 items').to.have.length(34)
            })
        new MainParabankPageBillPay().newPageOfBillPayShouldContain().should("contain", "Bill Payment Service")
        new MainParabankPageBillPay().fillAllInputsToEnterPayeeInformation(payeeInformationUsers.oneUser)
            .checkingBillPaymentComplete()

    });
})