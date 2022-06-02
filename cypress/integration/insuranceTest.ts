import {StartRegistration} from "../pages/insuranceStartRegisterPage"
import {FillRegisterForm} from "../pages/incuranceFillRegisterForm"
import {BasePage} from "../pages/basePage"
import {LoginPageInsurance} from "../pages/insuranceLoginPage"
import {BrokerInsuranceWebPage} from "../pages/insuranceBrokerInsuranceWebPage"
import users from "../data/users"
import { expect } from "chai"

const waitSeconds = new BasePage()

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

describe('Test suite for insurance application', ()=>{
    before('Login to the app', ()=>{
        new StartRegistration().visitApp()
        waitSeconds.waiter(1)
    })

    it('Start registration', ()=>{
        new StartRegistration().goToInsuranceRegistration()
        waitSeconds.waiter(1)
        new StartRegistration().registrationButton().should('contain', 'Register')
        new FillRegisterForm().checkFillFormHeader().should('contain', 'Sign up as a new user')
    })

    it('Fill registration form', ()=>{
        cy.url().should('eq', 'https://demo.guru99.com/insurance/v1/register.php')
        new FillRegisterForm().registrationFormContainer().should('have.attr', 'enctype', 'multipart/form-data')
        new FillRegisterForm().selectUserTitle().select('Lord')
        new FillRegisterForm().inputUserData(users.insurance_register_form_data)
        waitSeconds.waiter(1)
        new FillRegisterForm().userYearOfBirth().select('1989')
        waitSeconds.waiter(1)
        new FillRegisterForm().userMonthOfBirth().select('June')
        waitSeconds.waiter(1)
        new FillRegisterForm().userDayOfBirth().select('14')
        new FillRegisterForm().licenceType().should('have.value', 'Full')
        waitSeconds.waiter(1)
        new FillRegisterForm().licencePeriod().select(2).should('have.value', '3')
        waitSeconds.waiter(1)
        new FillRegisterForm().occupation().select('Engineer').should('be.visible')
        new FillRegisterForm().createFormButton()
        cy.url().should('eq', 'https://demo.guru99.com/insurance/v1/index.php')
    })
    
    it('Entrance into the Broker Insurance WebPage', ()=>{
        new LoginPageInsurance().loginIntoThePage(users.insurance_register_form_data)
        waitSeconds.waiter(1)
        new BrokerInsuranceWebPage().checkHeaderBrokerInsuranceWebPage().should('contain', 'Broker Insurance WebPage')
    })

    it('Request a quotation of insurance', ()=>{
        new BrokerInsuranceWebPage().requestQuotationButton()
        waitSeconds.waiter(1)
        new BrokerInsuranceWebPage().requestQuotationHeader().should('contain', 'Request a quotation')
        cy.url().should('eq', 'https://demo.guru99.com/insurance/v1/header.php')
        
    })

    it('Fill request a quotation of insurance', ()=>{
        waitSeconds.waiter(1)
        new BrokerInsuranceWebPage().quotationBreakdownCover().select('European')
        waitSeconds.waiter(1)
        new BrokerInsuranceWebPage().quotationWindScreenRepair()
        new BrokerInsuranceWebPage().inputInsuranceData(users.insurance_form_data)
        new BrokerInsuranceWebPage().parkingLocation().select('Unlocked Garage')
        new BrokerInsuranceWebPage().yearOfPolicy().select('2022')
        new BrokerInsuranceWebPage().monthOfPolicy().select('June')
        new BrokerInsuranceWebPage().dayOfPolicy().select('1')
        new BrokerInsuranceWebPage().saveQuotationButtonSubmit()
        new BrokerInsuranceWebPage().successfullMessage().should('contain', 'You have saved this quotation!')
        cy.url().should('eq', 'https://demo.guru99.com/insurance/v1/new_quotation.php')
    })

})