import {StartRegistration} from "../pages/insuranceStartRegisterPage"
import {FillRegisterForm} from "../pages/incuranceFillRegisterForm"
import {BasePage} from "../pages/basePage"
import {LoginPageInsurance} from "../pages/insuranceLoginPage"
import {BrokerInsuranceWebPage} from "../pages/insuranceBrokerInsuranceWebPage"
import users from "../data/users"
import { expect } from "chai"

const registration = new StartRegistration()
const registrationForm = new FillRegisterForm()
const insuranceLogin = new LoginPageInsurance()
const brokerInsurancePage = new BrokerInsuranceWebPage()
const waitSeconds = new BasePage()

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

describe('Test suite for insurance application', ()=>{
    before('Login to the app', ()=>{
        registration.visitApp()
        waitSeconds.waiter(1)
    })

    it('Start registration', ()=>{
        registration.goToInsuranceRegistration()
        waitSeconds.waiter(1)
        registration.registrationButton().should('contain', 'Register')
        registrationForm.checkFillFormHeader().should('contain', 'Sign up as a new user')
    })

    it('Fill registration form', ()=>{
        cy.url().should('eq', 'https://demo.guru99.com/insurance/v1/register.php')
        registrationForm.registrationFormContainer().should('have.attr', 'enctype', 'multipart/form-data')
        registrationForm.selectUserTitle().select('Lord')
        registrationForm.inputUserData(users.insurance_register_form_data)
        waitSeconds.waiter(1)
        registrationForm.userYearOfBirth().select('1989')
        waitSeconds.waiter(1)
        registrationForm.userMonthOfBirth().select('June')
        waitSeconds.waiter(1)
        registrationForm.userDayOfBirth().select('14')
        registrationForm.licenceType().should('have.value', 'Full')
        waitSeconds.waiter(1)
        registrationForm.licencePeriod().select(2).should('have.value', '3')
        waitSeconds.waiter(1)
        registrationForm.occupation().select('Engineer').should('be.visible')
        registrationForm.createFormButton()
        cy.url().should('eq', 'https://demo.guru99.com/insurance/v1/index.php')
    })
    
    it('Entrance to purchase insurance', ()=>{
        insuranceLogin.loginIntoThePage(users.insurance_register_form_data)
        waitSeconds.waiter(1)
        brokerInsurancePage.checkHeaderBrokerInsuranceWebPage().should('contain', 'Broker Insurance WebPage')
    })

    it('Request a quotation of insurance', ()=>{
        brokerInsurancePage.requestQuotationButton()
        waitSeconds.waiter(1)
        brokerInsurancePage.requestQuotationHeader().should('contain', 'Request a quotation')
        cy.url().should('eq', 'https://demo.guru99.com/insurance/v1/header.php')
        
    })

    it('Fill request a quotation of insurance', ()=>{
        brokerInsurancePage.requestQuotationButton()
        waitSeconds.waiter(1)
        brokerInsurancePage.requestQuotationHeader().should('contain', 'Request a quotation')
        brokerInsurancePage.quotationBreakdownCover().select('European')
        waitSeconds.waiter(1)
        brokerInsurancePage.quotationWindScreenRepair()
        brokerInsurancePage.inputInsuranceData(users.insurance_form_data)
        brokerInsurancePage.parkingLocation().select('Unlocked Garage')
        brokerInsurancePage.yearOfPolicy().select('2022')
        brokerInsurancePage.monthOfPolicy().select('June')
        brokerInsurancePage.dayOfPolicy().select('1')
        brokerInsurancePage.saveQuotationButtonSubmit()
        brokerInsurancePage.successfullMessage().should('contain', 'You have saved this quotation!')
        cy.url().should('eq', 'https://demo.guru99.com/insurance/v1/new_quotation.php')
    })

})