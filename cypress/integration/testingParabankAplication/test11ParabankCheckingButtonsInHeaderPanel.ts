import {MainParabankPageLoginRegister} from "../../support/pages/parabankPages/mainParabankPageLoginRegister";
import {MainParabankPageHome} from "../../support/pages/parabankPages/mainParabankPageHeaderPanelHome"
import usersParabank from "../../data/registrationUsersParabank";
import {MainParabankPageAboutUs} from "../../support/pages/parabankPages/mainParabankPageHeaderPanelAboutUs"
import contactUsers from "../../data/contactUsersParabank";
import {MainParabankPageContact} from "../../support/pages/parabankPages/mainParabankPageHeaderPanelContact"


const c = new MainParabankPageContact();
const l = new MainParabankPageLoginRegister();
const h = new MainParabankPageHome();
const a = new MainParabankPageAboutUs(); 

describe ("Sixth test suite for Parabank", function () {
    
    beforeEach('login to the app', () => {
        l.open()
    })

    it("Test 1 Checking the button 'Home' after user has registered", () => {
        l.registerToTheApp(usersParabank.secondUser)
        h.homeTopLeftMenuHeaderPanel()
    })

    it("Test 2 Checking the button 'About Us' if it has a correct page title after click on it", () => {
        a.aboutUsTopLeftMenuHeaderPanel()
    })
    
    it("Test 3 Send message to the customer care with all requirements", () => {
        c.customerCare(contactUsers.standardUser)
    })
        
    it("Test 4 Send message to the customer care without all requirements", () => {
        c.forgotInputAllFillsCustomerCare(contactUsers.forgotUser)
    })
        
    it("Test 5 Check data entry requirements if all inputs are empty", () => {
        c.forgotInputAllFillsCustomerCare(contactUsers.forgotUser)
        .responseInTheTableWhenTheAllInputsAreNotFilledInCustomerCare() 
        
    })

    it("Test 6 Click on the buttons one by one ", () => {
        h.homeTopLeftMenuHeaderPanel()
        a.aboutUsTopLeftMenuHeaderPanel()
        c.customerCareClick()
        
    })

    afterEach(function () {
        cy.log("after Each");
    });

})