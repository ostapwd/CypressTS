import usersParabank from "../../data/registrationUsersParabank";
import { MainParabankPageLoginRegister } from "../../support/pages/parabankPages/mainParabankPageLoginRegister";
import loginUsersParabank from "../../data/loginUsersParabank";

const loginRegister = new MainParabankPageLoginRegister();
describe("First test suite for Parabank ", function () {
    beforeEach('login to the app', () => {
        loginRegister.open()
        .theTextOnThePageAfterClickCustomerLogin()
    })
    it("Test 1 'Register to the app'", function () {
        loginRegister.clickOnTheButtonToRegisterToTheApp()
        loginRegister.confirmationThatWeAreOnSelectedRegisterPage().should("contain", "Signing up is easy!")
        loginRegister.registerToTheApp(usersParabank.secondUser)
            .clickOnTheButtonRegister()
            .getWelcomeForCustomerCareHaveLoginedMessage()
            .should('contain', `Welcome ${usersParabank.secondUser.firstName}`);
    })

    it("Test 2 'Login to the app'", function () {
        loginRegister.loginToTheApp(loginUsersParabank.login);
    })


    it("Test 3 'Forgot some login info'", function () {
        loginRegister.clickOnForgotLoginInformation()
            .verifyingIfItIsCustomerLookup()
            .should("contain", "Customer Lookup")
        loginRegister.forgotSomeLoginInformation(usersParabank.forgotInformation)

    })

    it("Test 4 'Forgot all login info and need to check data entry requirements (the first long way)'", function () {
        loginRegister.clickOnForgotLoginInformation()
            .verifyingIfItIsCustomerLookup()
            .should("contain", "Customer Lookup")
        loginRegister.forgotFillAllInputs(usersParabank.forgotAllInformation)
            .responseIfTheFirstNameInputIsRequired().then(tableRowAll => {
                loginRegister.tableRowInputs().then(tableColums => {
                    cy.wrap(tableColums).eq(0).should('contain', 'First name is required.')
                })
            })
        loginRegister.responseIfTheLaststNameInputIsRequired().then(tableRowAll => {
            loginRegister.tableRowInputs().then(tableColums => {
                cy.wrap(tableColums).eq(1).should('contain', 'Last name is required.')
            })
        })
        loginRegister.responseIfTheAddressInputIsRequired().then(tableRowAll => {
            loginRegister.tableRowInputs().then(tableColums => {
                cy.wrap(tableColums).eq(2).should('contain', 'Address is required.');
            })
        })
        loginRegister.responseIfTheCityInputIsRequired().then(tableRowAll => {
            loginRegister.tableRowInputs().then(tableColums => {
                cy.wrap(tableColums).eq(3).should('contain', 'City is required.');
            })
        })
        loginRegister.responseIfTheStateInputIsRequired().then(tableRowAll => {
            loginRegister.tableRowInputs().then(tableColums => {
                cy.wrap(tableColums).eq(4).should('contain', 'State is required.');
            })
        })
        loginRegister.responseIfTheZipCodeInputIsRequired().then(tableRowAll => {
            loginRegister.tableRowInputs().then(tableColums => {
                cy.wrap(tableColums).eq(5).should('contain', 'Zip Code is required.');
            })
        })
        loginRegister.responseIfTheSocialSecurityNumberInputIsRequired().then(tableRowAll => {
            loginRegister.tableRowInputs().then(tableColums => {
                cy.wrap(tableColums).eq(6).should('contain', 'Social Security Number is required.');
            })
        })
    })

    it("Test 4 'Forgot all login info and need to check data entry requirements ( the second easy way)'", function () {
        loginRegister.clickOnForgotLoginInformation()
            .verifyingIfItIsCustomerLookup()
            .should("contain", "Customer Lookup")
        loginRegister.forgotFillAllInputs(usersParabank.forgotAllInformation)
            .responseIfTheAllInputAreRequired().then(tableRowAll => {
                loginRegister.tableRowInputs().then(tableColums => {
                    cy.wrap(tableColums).eq(0).should('contain', 'First name is required.')
                    cy.wrap(tableColums).eq(1).should('contain', 'Last name is required.')
                    cy.wrap(tableColums).eq(2).should('contain', 'Address is required.');
                    cy.wrap(tableColums).eq(3).should('contain', 'City is required.');
                    cy.wrap(tableColums).eq(4).should('contain', 'State is required.');
                    cy.wrap(tableColums).eq(5).should('contain', 'Zip Code is required.');
                    cy.wrap(tableColums).eq(6).should('contain', 'Social Security Number is required.');
                })
            })
        })
            it.only("Test 5 'Checking if the inputs of register have enought inputs '", function () {
                loginRegister.clickOnTheButtonRegister()
               .checkingIfThereAreEnoughtInputsOfRegistration().then(($lis) => {
                    expect($lis, '3 items').to.have.length(13)
                })

    })
    afterEach(function () {
        cy.log("after Each");
    });
})







