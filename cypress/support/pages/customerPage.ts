import BasePage from "./basePage";

export class CustomerPage extends BasePage {

  public constructor() {
    super();
  }

  public rightPanel() { return cy.get("#rightPanel"); }
  
  public welcomeHeader() { return cy.get("h1.title"); }

  public completeHeader() { return cy.get("div[ng-app=BillPayApp] > div[ng-show=showResult] > h1.title"); }
  
  public billPayLink() { return cy.xpath("//*[text()='Bill Pay']"); }

  public contactButton() { return cy.get("a[href^='contact.htm']"); }

  

  public waitForPageToBeLoaded() {
    super.waitForPageToBeLoaded();

    this.rightPanel().should("be.visible");

    return this;
  }

}
