import contactUsers from "../../data/contactUsersParabank";
import {MainParabankPageLoginRegister} from "../../support/pages/parabankPagesMoreSensitive/mainParabankPageLoginRegister";
import {MainParabankPageContact} from "../../support/pages/parabankPagesMoreSensitive/mainParabankPageHeaderPanelContact"


const loginRegister = new MainParabankPageLoginRegister();
const contact = new MainParabankPageContact();


describe ("Fifth test suite for Parabank", function () {
    beforeEach('login to the app', () => {
        loginRegister.open()
    })

    it("Test 1 Send message to the customer care with all requirements", () => {
        contact.customerCare(contactUsers.standardUser)
    })

    it("Test 2 Send message to the customer care without all requirements", () => {
        contact.forgotInputAllFillsCustomerCare(contactUsers.forgotUser)
    })


    it("Test 3 Check data entry requirements if all inputs are empty", () => {
        contact.forgotInputAllFillsCustomerCare(contactUsers.forgotUser)
        .responseInTheTableWhenTheAllInputsAreNotFilledInCustomerCare() 

     })

     afterEach(function () {
        cy.log("after Each");
    });

})