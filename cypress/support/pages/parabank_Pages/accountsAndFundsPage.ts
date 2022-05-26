export class AccFundsPage {
  private openNewAcc() {
    return cy.get('#leftPanel > ul > li:nth-child(1) > a')
  }
  private openAccButton() {
    return cy.get('form.ng-pristine > div > .button')
  }

  private verifyNewAcc() {
    return cy.get('#rightPanel > div > div > p:nth-child(2)')
  }

  private transferFunds() {
    return cy.get('#leftPanel > ul > li:nth-child(3) > a')
  }

  private amount() {
    return cy.get('#amount')
  }

  private toAcc() {
    return cy.get('#toAccountId')
  }

  private transferBtn() {
    return cy.get(':nth-child(4) > .button')
  }

  public openNewAccApp() {
    this.openNewAcc().click()
    cy.wait(1000)
    this.openAccButton().click()
    this.verifyNewAcc().should(
      'have.text',
      'Congratulations, your account is now open.',
    )
    return this
  }

  public transferFundsApp() {
    this.transferFunds().click()
    cy.wait(1000)
    this.toAcc().select(1)
    this.amount().type('200')
    this.transferBtn().click()

    return this
  }
}
