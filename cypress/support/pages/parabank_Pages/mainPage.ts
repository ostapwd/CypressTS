export class MainPage {
  public open() {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    return this
  }

  protected reg() {
    return cy.get('p:nth-child(3) > a')
  }

  protected loginButton() {
    return cy.get('#loginPanel > form > div:nth-child(5) > input')
  }

  protected userName() {
    return cy.get('#loginPanel > form > div:nth-child(2) > input')
  }

  protected userPassword() {
    return cy.get('#loginPanel > form > div:nth-child(4) > input')
  }
}
