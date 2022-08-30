import { MainPage } from './mainPage'

export class LoginPage extends MainPage {
  public loginValidation() {
    return cy.get('#leftPanel > p')
  }

  public loginApp(user, pass) {
    this.userName().type(user)
    this.userPassword().type(pass)
    this.loginButton().click()
    return this
  }
}
