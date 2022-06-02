import { MainPage } from '../support/pages/parabank_Pages/mainPage'
import { RegisterPage } from '../support/pages/parabank_Pages/registerPage'
import { Random } from '../data/dataRandomizer'
import { LoginPage } from '../support/pages/parabank_Pages/loginPage'
import { AccFundsPage } from '../support/pages/parabank_Pages/accountsAndFundsPage'

const mainPage = new MainPage()
const registerPage = new RegisterPage()
const loginPage = new LoginPage()
const randomizer = new Random()
const randomName = randomizer.randomUserName()
const accfunds = new AccFundsPage()

describe('ParaBank test suite', function () {
  beforeEach(function () {
    mainPage.open()
  })

  it('should register', function () {
    registerPage
      .registerApp(randomName)
      .registerValidation()
      .should(
        'have.text',
        'Your account was created successfully. You are now logged in.',
      )
  })

  it('should logIn and open new acc', function () {
    loginPage
      .loginApp(randomName, randomName)
      .loginValidation()
      .should('have.text', `Welcome ${randomName} ${randomName}`)
    accfunds
      .openNewAccApp()
      .verifyNewAcc()
      .should('have.text', 'Congratulations, your account is now open.')
    accfunds
      .transferFundsApp()
      .transferComplete()
      .should('have.text', 'Transfer Complete!')
  })
})
