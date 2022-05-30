import { MainParabankPageLoginRegister } from "../../support/pages/parabankPages/mainParabankPageLoginRegister";
import { MainParabankPageHome } from "../../support/pages/parabankPages/mainParabankPageHeaderPanelHome"
import usersParabank from "../../data/registrationUsersParabank";
import { MainParabankPageAboutUs } from "../../support/pages/parabankPages/mainParabankPageHeaderPanelAboutUs"
import contactUsers from "../../data/contactUsersParabank";
import { MainParabankPageContact } from "../../support/pages/parabankPages/mainParabankPageHeaderPanelContact"


const contactPage = new MainParabankPageContact();
const loginRegisterPage = new MainParabankPageLoginRegister();
const homePage = new MainParabankPageHome();
const aboutUsPage = new MainParabankPageAboutUs();

describe("Sixth test suite for Parabank", function () {

    beforeEach('login to the app', () => {
        loginRegisterPage.open()
    })

    it("Test 1 Checking the button 'Home' after user has registered", () => {
        loginRegisterPage.registerToTheApp(usersParabank.secondUser)
        homePage.homeTopLeftMenuHeaderPanel()
    })

    it("Test 2 Checking the button 'About Us' if it has a correct page title after click on it", () => {
        aboutUsPage.aboutUsTopLeftMenuHeaderPanel()
    })

    it("Test 3 Send message to the customer care with all requirements", () => {
        contactPage.customerCare(contactUsers.standardUser)
    })

    it("Test 4 Send message to the customer care without all requirements", () => {
        contactPage.forgotInputAllFillsCustomerCare(contactUsers.forgotUser)
    })

    it("Test 5 Check data entry requirements if all inputs are empty", () => {
        contactPage.forgotInputAllFillsCustomerCare(contactUsers.forgotUser)
            .responseInTheTableWhenTheAllInputsAreNotFilledInCustomerCare()

    })

    it("Test 6 Click on the buttons one by one ", () => {
        homePage.homeTopLeftMenuHeaderPanel()
        aboutUsPage.aboutUsTopLeftMenuHeaderPanel()
        contactPage.customerCareClick()

    })

    afterEach(function () {
        cy.log("after Each");
    });

})