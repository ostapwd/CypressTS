import * as TEST_DATA from "./../fixtures/text-box.data.js";
import * as SELECTORS from "../page-object/text-box.selectors.json";
import { TestBoxPage } from "../models/text-box.page.js";
const textBoxPage = new TestBoxPage();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})


describe("Test form cheking:", function () {
  beforeEach(() => {
    cy.visit("/text-box");
  });

  it("Check that user can submit the form with correct data", () => {
    textBoxPage
      .typeUserName(TEST_DATA.FULLNAME)
      .should("have.value", TEST_DATA.FULLNAME);

    textBoxPage
      .typeUserEmail(TEST_DATA.EMAIL)
      .should("have.value", TEST_DATA.EMAIL);

    textBoxPage
      .typeCurrentAddress(TEST_DATA.CURRENT_ADDRESS)
      .should("have.value", TEST_DATA.CURRENT_ADDRESS);

    textBoxPage
      .typePermanentAddress(TEST_DATA.PERMANENT_ADDRESS)
      .should("have.value", TEST_DATA.PERMANENT_ADDRESS);

    textBoxPage.submitForm();

    cy.get(SELECTORS.output).should("be.visible");
    cy.get(SELECTORS.outputName).should(
      "have.text",
      `Name:${TEST_DATA.FULLNAME}`
    );
    cy.get(SELECTORS.outputEmail).should(
      "have.text",
      `Email:${TEST_DATA.EMAIL}`
    );
    cy.get(SELECTORS.outputCurrentAddress).should(
      "have.text",
      `Current Address :${TEST_DATA.CURRENT_ADDRESS} `
    );
    cy.get(SELECTORS.outputPermanentAddress).should(
      "have.text",
      `Permananet Address :${TEST_DATA.PERMANENT_ADDRESS}`
    );
  });

  it("Check that user can not submit the form with an invalid email", () => {
    textBoxPage
      .typeUserName(TEST_DATA.FULLNAME)
      .should("have.value", TEST_DATA.FULLNAME);

    textBoxPage
      .typeUserEmail(TEST_DATA.INVALID_EMAIL)
      .should("have.value", TEST_DATA.INVALID_EMAIL);

    textBoxPage
      .typeCurrentAddress(TEST_DATA.CURRENT_ADDRESS)
      .should("have.value", TEST_DATA.CURRENT_ADDRESS);

    textBoxPage
      .typePermanentAddress(TEST_DATA.PERMANENT_ADDRESS)
      .should("have.value", TEST_DATA.PERMANENT_ADDRESS);

    textBoxPage.submitForm();

    cy.get(SELECTORS.output).should("not.be.visible");
    cy.get(SELECTORS.userEmail).should("have.class", "field-error");
  });

  it("Check that user can submit the form with an empty Full Name field", () => {
    textBoxPage
      .typeUserEmail(TEST_DATA.EMAIL)
      .should("have.value", TEST_DATA.EMAIL);

    textBoxPage
      .typeCurrentAddress(TEST_DATA.CURRENT_ADDRESS)
      .should("have.value", TEST_DATA.CURRENT_ADDRESS);

    textBoxPage
      .typePermanentAddress(TEST_DATA.PERMANENT_ADDRESS)
      .should("have.value", TEST_DATA.PERMANENT_ADDRESS);

    cy.get(SELECTORS.userName).should("be.empty");
    textBoxPage.submitForm();

    cy.get(SELECTORS.output).should("be.visible");
  });

  it("Check that user can submit the form with an empty email field", () => {
    textBoxPage
      .typeUserName(TEST_DATA.FULLNAME)
      .should("have.value", TEST_DATA.FULLNAME);

    textBoxPage
      .typeCurrentAddress(TEST_DATA.CURRENT_ADDRESS)
      .should("have.value", TEST_DATA.CURRENT_ADDRESS);

    textBoxPage
      .typePermanentAddress(TEST_DATA.PERMANENT_ADDRESS)
      .should("have.value", TEST_DATA.PERMANENT_ADDRESS);

    cy.get(SELECTORS.userEmail).should("be.empty");
    textBoxPage.submitForm();

    cy.get(SELECTORS.output).should("be.visible");
  });

  it("Check that user can submit the form with an empty Current Address field.", () => {
    textBoxPage
      .typeUserName(TEST_DATA.FULLNAME)
      .should("have.value", TEST_DATA.FULLNAME);

    textBoxPage
      .typeUserEmail(TEST_DATA.EMAIL)
      .should("have.value", TEST_DATA.EMAIL);

    textBoxPage
      .typePermanentAddress(TEST_DATA.PERMANENT_ADDRESS)
      .should("have.value", TEST_DATA.PERMANENT_ADDRESS);

    cy.get(SELECTORS.currentAddress).should("be.empty");
    textBoxPage.submitForm();

    cy.get(SELECTORS.output).should("be.visible");
  });

  it("Check that user can submit the form with an empty Permanent Address field", () => {
    textBoxPage
      .typeUserName(TEST_DATA.FULLNAME)
      .should("have.value", TEST_DATA.FULLNAME);

    textBoxPage
      .typeUserEmail(TEST_DATA.EMAIL)
      .should("have.value", TEST_DATA.EMAIL);

    textBoxPage
      .typeCurrentAddress(TEST_DATA.CURRENT_ADDRESS)
      .should("have.value", TEST_DATA.CURRENT_ADDRESS);

    cy.get(SELECTORS.permanentAddress).should("be.empty");
    textBoxPage.submitForm();

    cy.get(SELECTORS.output).should("be.visible");
  });
});
