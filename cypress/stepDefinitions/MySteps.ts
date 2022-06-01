import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import {StartRegistration} from "../pages/insuranceStartRegisterPage"
import {FillRegisterForm} from "../pages/incuranceFillRegisterForm"
import users from "../data/users"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })


Given(/^new user in system and he navigates to the application$/, function () {
    new StartRegistration().visitApp()
});

When(/^user choose Insurance Project item and click to this item$/, function () {
    new StartRegistration().goToInsuranceRegistration()
    new StartRegistration().registrationButton()
});

Then(/^user navigates to the registration form page$/, function () {
    new FillRegisterForm().checkFillFormHeader()
});



Given(/^registration form and verify user$/, function () {
    new FillRegisterForm().registrationFormContainer().should('have.attr', 'enctype', 'multipart/form-data')
});

Then(/^user select title$/, function () {
    new FillRegisterForm().selectUserTitle().select('Lord')
});

And(/^fill general user data$/, function () {
    new FillRegisterForm().inputUserData(users.insurance_register_form_data)
});

Then(/^user should fill information about birthday$/, function () {
    new FillRegisterForm().userYearOfBirth().select('1989')
    new FillRegisterForm().userMonthOfBirth().select('June')
    new FillRegisterForm().userDayOfBirth().select('14')
});

And(/^check licence type, licence period, and occupation$/, function () {
    new FillRegisterForm().licenceType().should('have.value', 'Full')
    new FillRegisterForm().licencePeriod().select(2).should('have.value', '3')
    new FillRegisterForm().occupation().select('Engineer').should('be.visible')
});

Then(/^user press create button$/, function () {
    new FillRegisterForm().createFormButton()
});

And(/^navigates to the Login Page$/, function () {
    cy.url().should('eq', 'https://demo.guru99.com/insurance/v1/index.php')
});
