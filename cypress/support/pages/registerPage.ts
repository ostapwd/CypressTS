import BasePage from "./basePage";
import {CustomerPage} from "./customerPage";

export class RegisterPage extends BasePage {
  public constructor() {
    super();
  }

  public registerButton() { return cy.get("#customerForm"); }

  public waitForPageToBeLoaded() {
    super.waitForPageToBeLoaded();
    this.registerButton().should("be.visible");

    return this;
  }

  public registerCustomer(customer) {
    cy.get("#customer\\.firstName").clear().type(customer.firstName);
    cy.get("#customer\\.lastName").clear().type(customer.lastName);
    cy.get("#customer\\.address\\.street").clear().type(customer.addressStreet);
    cy.get("#customer\\.address\\.city").clear().type(customer.addressCity);
    cy.get("#customer\\.address\\.state").clear().type(customer.addressState);
    cy.get("#customer\\.address\\.zipCode").clear().type(customer.addressZipCode);
    cy.get("#customer\\.phoneNumber").clear().type(customer.phoneNumber);
    cy.get("#customer\\.ssn").clear().type(customer.ssn);
    cy.get("#customer\\.username").clear().type(customer.username);
    cy.get("#customer\\.password").clear().type(customer.password);
    cy.get("#repeatedPassword").clear().type(customer.repeatedPassword);

    cy.xpath("//input[contains(@value,'Register')]").click();

    return new CustomerPage();
  }

  public open() {
    this.goto(Cypress.env("BASE_URL") + "/register.htm");

    return this;
  }

}

