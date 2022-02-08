/// <reference types="cypress" />

const TEST_DATA = require("./../fixtures/text-box.data.js");
const SELECTORS = require("./../fixtures/text-box.selectors.json");
describe("Test form cheking:", function () {
  beforeEach(() => {
    cy.visit("/text-box");
  });

  it("Check that user can submit the form with correct data", () => {
    cy.get(SELECTORS.userName).type(TEST_DATA.RAND_FULLNAME);
    cy.get(SELECTORS.userName).should("have.value", TEST_DATA.RAND_FULLNAME);

    cy.get(SELECTORS.userEmail).type(TEST_DATA.RAND_EMAIL);
    cy.get(SELECTORS.userEmail).should("have.value", TEST_DATA.RAND_EMAIL);

    cy.get(SELECTORS.currentAddress).type(TEST_DATA.RAND_CURRENT_ADDRESS);
    cy.get(SELECTORS.currentAddress).should(
      "have.value",
      TEST_DATA.RAND_CURRENT_ADDRESS
    );

    cy.get(SELECTORS.permanentAddress).type(TEST_DATA.RAND_PERMANENT_ADDRESS);
    cy.get(SELECTORS.permanentAddress).should(
      "have.value",
      TEST_DATA.RAND_PERMANENT_ADDRESS
    );

    cy.get(SELECTORS.submit).click();

    cy.get(SELECTORS.output).should("be.visible");
    cy.get(SELECTORS.outputName).should(
      "have.text",
      `Name:${TEST_DATA.RAND_FULLNAME}`
    );
    cy.get(SELECTORS.outputEmail).should(
      "have.text",
      `Email:${TEST_DATA.RAND_EMAIL}`
    );
    cy.get(SELECTORS.outputCurrentAddress).should(
      "have.text",
      `Current Address :${TEST_DATA.RAND_CURRENT_ADDRESS} `
    );
    cy.get(SELECTORS.outputPermanentAddress).should(
      "have.text",
      `Permananet Address :${TEST_DATA.RAND_PERMANENT_ADDRESS}`
    );
  });

  it("Check that user can not submit the form with an invalid email", () => {
    cy.get(SELECTORS.userName).type(TEST_DATA.RAND_FULLNAME);
    cy.get(SELECTORS.userName).should("have.value", TEST_DATA.RAND_FULLNAME);

    cy.get(SELECTORS.userEmail).type(TEST_DATA.RAND_INVALID_EMAIL);
    cy.get(SELECTORS.userEmail).should(
      "have.value",
      TEST_DATA.RAND_INVALID_EMAIL
    );

    cy.get(SELECTORS.currentAddress).type(TEST_DATA.RAND_CURRENT_ADDRESS);
    cy.get(SELECTORS.currentAddress).should(
      "have.value",
      TEST_DATA.RAND_CURRENT_ADDRESS
    );

    cy.get(SELECTORS.permanentAddress).type(TEST_DATA.RAND_PERMANENT_ADDRESS);
    cy.get(SELECTORS.permanentAddress).should(
      "have.value",
      TEST_DATA.RAND_PERMANENT_ADDRESS
    );

    cy.get(SELECTORS.submit).click();

    cy.get(SELECTORS.output).should("not.be.visible");
    cy.get(SELECTORS.userEmail).should("have.class", "field-error");
  });

  it("Check that user can submit the form with an empty Full Name field", () => {
    cy.get(SELECTORS.userEmail).type(TEST_DATA.RAND_EMAIL);
    cy.get(SELECTORS.userEmail).should("have.value", TEST_DATA.RAND_EMAIL);

    cy.get(SELECTORS.currentAddress).type(TEST_DATA.RAND_CURRENT_ADDRESS);
    cy.get(SELECTORS.currentAddress).should(
      "have.value",
      TEST_DATA.RAND_CURRENT_ADDRESS
    );

    cy.get(SELECTORS.permanentAddress).type(TEST_DATA.RAND_PERMANENT_ADDRESS);
    cy.get(SELECTORS.permanentAddress).should(
      "have.value",
      TEST_DATA.RAND_PERMANENT_ADDRESS
    );

    cy.get(SELECTORS.userName).should("be.empty");
    cy.get(SELECTORS.submit).click();

    cy.get(SELECTORS.output).should("be.visible");
  });

  it("Check that user can submit the form with an empty email field", () => {
    cy.get(SELECTORS.userName).type(TEST_DATA.RAND_FULLNAME);
    cy.get(SELECTORS.userName).should("have.value", TEST_DATA.RAND_FULLNAME);

    cy.get(SELECTORS.currentAddress).type(TEST_DATA.RAND_CURRENT_ADDRESS);
    cy.get(SELECTORS.currentAddress).should(
      "have.value",
      TEST_DATA.RAND_CURRENT_ADDRESS
    );

    cy.get(SELECTORS.permanentAddress).type(TEST_DATA.RAND_PERMANENT_ADDRESS);
    cy.get(SELECTORS.permanentAddress).should(
      "have.value",
      TEST_DATA.RAND_PERMANENT_ADDRESS
    );

    cy.get(SELECTORS.userEmail).should("be.empty");
    cy.get(SELECTORS.submit).click();

    cy.get(SELECTORS.output).should("be.visible");
  });

  it("Check that user can submit the form with an empty Current Address field.", () => {
    cy.get(SELECTORS.userName).type(TEST_DATA.RAND_FULLNAME);
    cy.get(SELECTORS.userName).should("have.value", TEST_DATA.RAND_FULLNAME);

    cy.get(SELECTORS.userEmail).type(TEST_DATA.RAND_EMAIL);
    cy.get(SELECTORS.userEmail).should("have.value", TEST_DATA.RAND_EMAIL);

    cy.get(SELECTORS.permanentAddress).type(TEST_DATA.RAND_PERMANENT_ADDRESS);
    cy.get(SELECTORS.permanentAddress).should(
      "have.value",
      TEST_DATA.RAND_PERMANENT_ADDRESS
    );

    cy.get(SELECTORS.currentAddress).should("be.empty");
    cy.get(SELECTORS.submit).click();

    cy.get(SELECTORS.output).should("be.visible");
  });

  it("Check that user can submit the form with an empty Permanent Address field", () => {
    cy.get(SELECTORS.userName).type(TEST_DATA.RAND_FULLNAME);
    cy.get(SELECTORS.userName).should("have.value", TEST_DATA.RAND_FULLNAME);

    cy.get(SELECTORS.userEmail).type(TEST_DATA.RAND_EMAIL);
    cy.get(SELECTORS.userEmail).should("have.value", TEST_DATA.RAND_EMAIL);

    cy.get(SELECTORS.currentAddress).type(TEST_DATA.RAND_CURRENT_ADDRESS);
    cy.get(SELECTORS.currentAddress).should(
      "have.value",
      TEST_DATA.RAND_CURRENT_ADDRESS
    );

    cy.get(SELECTORS.permanentAddress).should("be.empty");
    cy.get(SELECTORS.submit).click();

    cy.get(SELECTORS.output).should("be.visible");
  });
});
