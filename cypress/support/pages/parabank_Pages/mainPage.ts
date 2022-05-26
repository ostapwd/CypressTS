export class MainPage {
  public open() {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')

    return this
  }
}
