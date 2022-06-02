import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import {StartRegistration} from "../pages/insuranceStartRegisterPage"
import {FillRegisterForm} from "../pages/incuranceFillRegisterForm"
import {LoginPageInsurance} from "../pages/insuranceLoginPage"
import {BrokerInsuranceWebPage} from "../pages/insuranceBrokerInsuranceWebPage"
import users from "../data/users"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })


Given(/^Application is open$/, function () {
    new StartRegistration().visitApp()
});

When(/^User chooses Insurance Project item$/, function () {
    new StartRegistration().goToInsuranceRegistration()
});

And(/^User clicks to the Insurance Project item$/, function () {
    new StartRegistration().registrationButton()
});

Then(/^User navigates to the registration form page$/, function () {
    new FillRegisterForm().checkFillFormHeader()
});



Given(/^Registration form page$/, function () {
    new FillRegisterForm().registrationFormContainer().should('have.attr', 'enctype', 'multipart/form-data')
});

And(/^User selects title$/, function () {
    new FillRegisterForm().selectUserTitle().select('Lord')
});

Then(/^User fills general user data$/, function () {
    new FillRegisterForm().inputUserData(users.insurance_register_form_data)
});

And(/^User fills information about birthday$/, function () {
    new FillRegisterForm().userYearOfBirth().select('1989')
    new FillRegisterForm().userMonthOfBirth().select('June')
    new FillRegisterForm().userDayOfBirth().select('14')
});

Then(/^Usert checks licence type, licence period, and occupation$/, function () {
    new FillRegisterForm().licenceType().should('have.value', 'Full')
    new FillRegisterForm().licencePeriod().select(2).should('have.value', '3')
    new FillRegisterForm().occupation().select('Engineer').should('be.visible')
});

And(/^User press create button$/, function () {
    new FillRegisterForm().createFormButton()
});

Then(/^User navigates into the Login Page$/, function () {
    cy.url().should('eq', 'https://demo.guru99.com/insurance/v1/index.php')
});


Given(/^Registrated user$/, function () {
    new LoginPageInsurance().loginIntoThePage(users.insurance_register_form_data)
});

And(/^User navigates into the Broker Insurance WebPage$/, function () {
    new BrokerInsuranceWebPage().checkHeaderBrokerInsuranceWebPage().should('contain', 'Broker Insurance WebPage')
})

Then(/^User press Request Quotation Button$/, function () {
    new BrokerInsuranceWebPage().requestQuotationButton()
})

And(/^User navigates into the Request quotation page$/, function () {
    new BrokerInsuranceWebPage().requestQuotationHeader().should('contain', 'Request a quotation')
})



Given(/^Request Quotation page$/, function () {
    cy.url().should('eq', 'https://demo.guru99.com/insurance/v1/header.php')
})

And(/^User selects Breakdown cover options$/, function () {
    new BrokerInsuranceWebPage().quotationBreakdownCover().select('European')
})


Then(/^User selects Windscreen repair option$/, function () {
    new BrokerInsuranceWebPage().quotationWindScreenRepair()
})

And(/^User inputs Incidents, Registration, Annual mileage, Estimated value, Parking Location fields$/, function () {
    new BrokerInsuranceWebPage().inputInsuranceData(users.insurance_form_data)
})

Then(/^User checks Parking Location$/, function () {
    new BrokerInsuranceWebPage().parkingLocation().select('Unlocked Garage')
})

And(/^User selects Start of policy field$/, function () {
    new BrokerInsuranceWebPage().yearOfPolicy().select('2022')
    new BrokerInsuranceWebPage().monthOfPolicy().select('June')
    new BrokerInsuranceWebPage().dayOfPolicy().select('1')
})

Then(/^User press Save Quotation button$/, function () {
    new BrokerInsuranceWebPage().saveQuotationButtonSubmit()
})

And(/^Successfully saved the quotation$/, function () {
    new BrokerInsuranceWebPage().successfullMessage().should('contain', 'You have saved this quotation!')
        cy.url().should('eq', 'https://demo.guru99.com/insurance/v1/new_quotation.php')
})