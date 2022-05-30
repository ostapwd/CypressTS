import { Random } from '../../../data/dataRandomizer'

export class RegisterPage {
  private register() {
    return cy.get('p:nth-child(3) > a')
  }
  private registerData() {
    return cy.get('#customerForm > table > tbody > tr > td > .input')
  }
  private registerButton() {
    return cy.get('[colspan="2"] > .button')
  }
  public registerValidation() {
    return cy.get('#rightPanel > p')
  }

  public registerApp(testInputData) {
    this.register().click()

    this.registerData().each((el) => cy.wrap(el).type(testInputData))

    this.registerButton().click()
    return this
  }
}
