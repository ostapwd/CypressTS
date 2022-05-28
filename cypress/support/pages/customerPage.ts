import BasePage from "./basePage";

export class CustomerPage extends BasePage {

  public constructor() {
    super();
  }

  public rightPanel() { return cy.get("#rightPanel"); }
  public welcomeHeader() { return cy.get("h1.title"); }



  public waitForPageToBeLoaded() {
    super.waitForPageToBeLoaded();

    this.rightPanel().should("be.visible");

    return this;
  }

}
