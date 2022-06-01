import {MainParabankPageLoginRegister} from "../../support/pages/parabankPagesMoreSensitive/mainParabankPageLoginRegister";
import {MainParabankPageHome} from "../../support/pages/parabankPagesMoreSensitive/mainParabankPageHeaderPanelHome"
import usersParabank from "../../data/registrationUsersParabank";
import {MainParabankPageAboutUs} from "../../support/pages/parabankPagesMoreSensitive/mainParabankPageHeaderPanelAboutUs"
import contactUsers from "../../data/contactUsersParabank";
import {MainParabankPageContact} from "../../support/pages/parabankPagesMoreSensitive/mainParabankPageHeaderPanelContact"


const contact = new MainParabankPageContact();
const loginRegister = new MainParabankPageLoginRegister();
const home = new MainParabankPageHome();
const aboutUs = new MainParabankPageAboutUs(); 

describe ("Sixth test suite for Parabank", function () {
    
    beforeEach('login to the app', () => {
        loginRegister.open()
    })

    it("Test 1 Checking the button 'Home' after user has registered", () => {
        loginRegister.registerToTheApp(usersParabank.secondUser)
        home.homeTopLeftMenuHeaderPanel()
    })

    it("Test 2 Checking the button 'About Us' if it has a correct page title after click on it", () => {
        aboutUs.aboutUsTopLeftMenuHeaderPanel()
    })
    
    it("Test 3 Send message to the customer care with all requirements", () => {
        contact.customerCare(contactUsers.standardUser)
    })
        
    it("Test 4 Send message to the customer care without all requirements", () => {
        contact.forgotInputAllFillsCustomerCare(contactUsers.forgotUser)
    })
        
    it("Test 5 Check data entry requirements if all inputs are empty", () => {
        contact.forgotInputAllFillsCustomerCare(contactUsers.forgotUser)
        .responseInTheTableWhenTheAllInputsAreNotFilledInCustomerCare() 
        
    })

    it("Test 6 Click on the buttons one by one ", () => {
        home.homeTopLeftMenuHeaderPanel()
        aboutUs.aboutUsTopLeftMenuHeaderPanel()
        contact.customerCareClick()
        
    })

    afterEach(function () {
        cy.log("after Each");
    });

})