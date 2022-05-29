import BasePage from "./basePage";
import {CustomerPage} from "./customerPage";

export class BillPage extends BasePage {
  public constructor() {
    super();
  }

  public billLink() { return cy.get("a[href^='/parabank/billpay.htm']"); }

  public waitForPageToBeLoaded() {
    super.waitForPageToBeLoaded();
    this.billLink().should("be.visible");

    return this;
  }

  public payBill(bill) {
    cy.get("input[name='payee\\.name']").clear().type(bill.payeeName);
    cy.get("input[name='payee\\.address\\.street']").clear().type(bill.address);
    cy.get("input[name='payee\\.address\\.city']").clear().type(bill.city);
    cy.get("input[name='payee\\.address\\.state']").clear().type(bill.state);
    cy.get("input[name='payee\\.address\\.zipCode']").clear().type(bill.zipCode);
    cy.get("input[name='payee\\.phoneNumber']").clear().type(bill.phone);
    cy.get("input[name='payee\\.accountNumber']").clear().type(bill.account);
    cy.get("input[name='verifyAccount']").clear().type(bill.verifyAccount);
    cy.get("input[name='amount']").clear().type(bill.amount);

    cy.get("input[value='Send Payment']").click();

    return new CustomerPage();
  }

  public open() {
    this.goto(Cypress.env("BASE_URL") + "/billpay.htm");

    return this;
  }

}
