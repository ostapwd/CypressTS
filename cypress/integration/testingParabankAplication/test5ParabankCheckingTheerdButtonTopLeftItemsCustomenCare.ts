import contactUsers from "../../data/contactUsersParabank";
import { MainParabankPageLoginRegister } from "../../support/pages/parabankPages/mainParabankPageLoginRegister";
import { MainParabankPageLeftMenu } from "../../support/pages/parabankPages/mainParabankPageHeaderPanelTopLeftMenu";
import { MainParabankPageContact } from "../../support/pages/parabankPages/mainParabankPageHeaderPanelContact"


const loginRegisterPage = new MainParabankPageLoginRegister();
const contactPage = new MainParabankPageContact();


describe("Fifth test suite for Parabank", function () {
    beforeEach('login to the app', () => {
        loginRegisterPage.open()
    })

    it("Test 1 Send message to the customer care with all requirements", () => {
        contactPage.customerCare(contactUsers.standardUser)
    })

    it("Test 2 Send message to the customer care without all requirements", () => {
        contactPage.forgotInputAllFillsCustomerCare(contactUsers.forgotUser)
    })


    it("Test 3 Check data entry requirements if all inputs are empty", () => {
        contactPage.forgotInputAllFillsCustomerCare(contactUsers.forgotUser)
            .responseInTheTableWhenTheAllInputsAreNotFilledInCustomerCare()

    })

    afterEach(function () {
        cy.log("after Each");
    });

})