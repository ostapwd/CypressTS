import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import {StartRegistration} from "../pages/insuranceStartRegisterPage"
import {FillRegisterForm} from "../pages/incuranceFillRegisterForm"
import users from "../data/users"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })


Given(/^user navigates to the application$/, function () {
    new StartRegistration().visitApp()
});

When(/^user choose Insurance Project item$/, function () {
    new StartRegistration().goToInsuranceRegistration()
});

And(/^click it$/, function () {
    new StartRegistration().registrationButton()
});

Then(/^user navigates to the registration form page$/, function () {
    new FillRegisterForm().checkFillFormHeader()
});



Given(/^registration form$/, function () {
    new FillRegisterForm().registrationFormContainer().should('have.attr', 'enctype', 'multipart/form-data')
});

Then(/^user should select title$/, function () {
    new FillRegisterForm().selectUserTitle().select('Lord')
});

And(/^fill general data$/, function () {
    new FillRegisterForm().inputUserData(users.insurance_register_form_data)
});

Then(/^user should fill information about birthday$/, function () {
    new FillRegisterForm().userYearOfBirth().select('1989')
    new FillRegisterForm().userMonthOfBirth().select('June')
    new FillRegisterForm().userDayOfBirth().select('14')
});

And(/^user should check licence type$/, function () {
    new FillRegisterForm().licenceType().should('have.value', 'Full')
});


And(/^licence period$/, function () {
    new FillRegisterForm().licencePeriod().select(2).should('have.value', '3')
});

Then(/^user should choose occupation$/, function () {
    new FillRegisterForm().occupation().select('Engineer').should('be.visible')
});

And(/^press create button$/, function () {
    new FillRegisterForm().createFormButton()
});

Then(/^user should navigates to the Login Page$/, function () {
    cy.url().should('eq', 'https://demo.guru99.com/insurance/v1/index.php')
});
