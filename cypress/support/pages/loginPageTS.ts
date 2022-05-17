import { ProductPageTS } from './productPageTS'

export class LoginPageTS {
  private usernameInput() {
    return cy.get('#user-name')
  }
  private passwordInput() {
    return cy.get('#password')
  }
  private loginButton() {
    return cy.get('#login-button')
  }
  private wrongPassVerify() {
    return cy.get('[data-test ="error"]')
  }

  public loginToTheApp(user) {
    this.usernameInput().type(user.username)
    this.passwordInput().type(user.password)

    this.loginButton().click()

    return new ProductPageTS()
  }

  public wrongPassValidate() {
    this.wrongPassVerify().should(
      'have.text',
      'Epic sadface: Username and password do not match any user in this service',
    )

    return this
  }

  public open() {
    cy.visit('https://www.saucedemo.com/')

    return this
  }
}
