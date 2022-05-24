import usersParabank from "../../data/usersParabank";
import {MainParabankPageLoginRegister} from "../../support/pages/parabankPages/mainParabankPageLoginRegister";
import { MainParabankPageBillPay } from "../../support/pages/parabankPages/mainParabankPageBillPay";
import  payeeInformationUsers  from "../../data/payeeInformationUsers";

const l = new MainParabankPageLoginRegister();
const b = new MainParabankPageBillPay();

describe ("Tenth test suite for Parabank", function () {
    beforeEach('login to the app', () => {
        l.open()
    })

    it("Test 1 Checking the link 'Solutions' if it go to to the correct link ", () => {
        l.registerToTheApp(usersParabank.someUser)
        .buttonRegister()
        b.clickOnTheLinkBillPay()
        .checkingHowManyInputsThereAreInTheBillyPay() 
        .newPageOfBillPayShouldContain()
        .fillAllInputsToEnterPayeeInformation(payeeInformationUsers.oneUser)
        .checkingBillPaymentComplete()
       
    });
})