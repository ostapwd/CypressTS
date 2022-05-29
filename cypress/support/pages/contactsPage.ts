import BasePage from "./basePage";
import {CustomerPage as HomePage} from "./customerPage";

export class ContactsPage extends BasePage {
  public constructor() {
    super();
  }

  public sendButton() { return cy.get("input[value='Send to Customer Care']"); }

  public waitForPageToBeLoaded() {
    super.waitForPageToBeLoaded();
    this.sendButton().should("be.visible");

    return this;
  }

  public completeHeader() { return cy.get(".title"); }

  public mailSupport(contacts) {
    cy.get("#name").clear().type(contacts.name);
    cy.get("#email").clear().type(contacts.email);
    cy.get("#phone").clear().type(contacts.phone);
    cy.get("#message").clear().type(contacts.message);

    cy.get("input[value='Send to Customer Care']").click();

    return new HomePage();
  }

  public open() {
    this.goto(Cypress.env("BASE_URL") + "/contact.htm");

    return this;
  }

}
