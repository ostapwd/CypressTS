export class LoginPage {
  private userName() {
    return cy.get(':nth-child(2) > .input')
  }
  private userPassword() {
    return cy.get(':nth-child(4) > .input')
  }
  private loginButton() {
    return cy.get(':nth-child(5) > .button')
  }
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
