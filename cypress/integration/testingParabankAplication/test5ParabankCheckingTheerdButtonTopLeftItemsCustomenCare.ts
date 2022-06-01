import contactUsers from "../../data/contactUsersParabank";
import { MainParabankPageLoginRegister } from "../../support/pages/parabankPages/mainParabankPageLoginRegister";
import { MainParabankPageContact } from "../../support/pages/parabankPages/mainParabankPageHeaderPanelContact"


describe("Fifth test suite for Parabank", function () {
    beforeEach('login to the app', () => {
        new MainParabankPageLoginRegister().open()
    })

    it("Test 1 Send message to the customer care with all requirements", () => {
        new MainParabankPageContact().fillTheInputsOfACustomerCare(contactUsers.standardUser)
    })

    it("Test 2 Send message to the customer care without all requirements", () => {
        new MainParabankPageContact().forgotInputAllFillsCustomerCare(contactUsers.forgotUser)
    })


    it("Test 3 Check data entry requirements if all inputs are empty", () => {
        new MainParabankPageContact().forgotInputAllFillsCustomerCare(contactUsers.forgotUser)
            .responseInTheTableWhenTheAllInputsAreNotFilledInCustomerCare()
    })

    afterEach(function () {
        cy.log("after Each");
    });

})