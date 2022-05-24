import contactUsers from "../../data/contactUsers";
import {MainParabankPageLoginRegister} from "../../support/pages/parabankPages/mainParabankPageLoginRegister";
import { MainParabankPageLeftMenu } from "../../support/pages/parabankPages/mainParabankPageHeaderPanelTopLeftMenu";
import {MainParabankPageContact} from "../../support/pages/parabankPages/mainParabankPageHeaderPanelContact"


const l = new MainParabankPageLoginRegister();
const c = new MainParabankPageContact();


describe ("Fifth test suite for Parabank", function () {
    beforeEach('login to the app', () => {
        l.open()
    })

    it("Test 1 Send message to the customer care with all requirements", () => {
    c.customerCare(contactUsers.standardUser)
    })

    it("Test 2 Send message to the customer care without all requirements", () => {
        c.forgotInputAllFillsCustomerCare(contactUsers.forgotUser)
    })


    it("Test 3 Check data entry requirements if all inputs are empty", () => {
        c.forgotInputAllFillsCustomerCare(contactUsers.forgotUser)
        .responseInTheTableWhenTheAllInputsAreNotFilledInCustomerCare() 

     })

     afterEach(function () {
        cy.log("after Each");
    });

})