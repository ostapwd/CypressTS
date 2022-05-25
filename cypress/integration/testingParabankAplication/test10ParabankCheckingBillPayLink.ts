import usersParabank from "../../data/registrationUsersParabank";
import {MainParabankPageLoginRegister} from "../../support/pages/parabankPages/mainParabankPageLoginRegister";
import { MainParabankPageBillPay } from "../../support/pages/parabankPages/mainParabankPageBillPay";
import  payeeInformationUsers  from "../../data/payeeInformationUsersParabank";

const l = new MainParabankPageLoginRegister();
const b = new MainParabankPageBillPay();

describe ("Test for Parabank to check Bill Pey Service", function () {
    beforeEach('login to the app', () => {
        l.open()
    })

    it("Test 1 Checking Bill Pey Service", () => {
        l.registerToTheApp(usersParabank.someUser)
        .buttonRegister()
        b.clickOnTheLinkBillPay()
        .checkingHowManyInputsThereAreInTheBillyPay() 
        .newPageOfBillPayShouldContain()
        .fillAllInputsToEnterPayeeInformation(payeeInformationUsers.oneUser)
        .checkingBillPaymentComplete()
       
    });
})