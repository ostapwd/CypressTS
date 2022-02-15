const TEST_DATA = require("./../fixtures/automation-practice-form.data.js");
const SELECTORS = require("./../page-object/automation-practice-form.selectors.json");
const ACTION = require("../model/form.action.js");

describe("Student Registration form cheking:", function () {
  beforeEach(() => {
    cy.visit("/automation-practice-form");
  });

  it("Check that user can submit the form with correct data", () => {
    cy.get(SELECTORS.firstName)
      .type(TEST_DATA.FIRST_NAME)
      .should("have.value", TEST_DATA.FIRST_NAME);

    cy.get(SELECTORS.lastName)
      .type(TEST_DATA.LAST_NAME)
      .should("have.value", TEST_DATA.LAST_NAME);

    cy.get(SELECTORS.userEmail)
      .type(TEST_DATA.USER_EMAIL)
      .should("have.value", TEST_DATA.USER_EMAIL);

    cy.get(SELECTORS.genderRadioMale)
      .check({ force: true })
      .should("be.checked");

    cy.get(SELECTORS.userNumber)
      .type(TEST_DATA.PHONE_NUMBER)
      .should("have.value", TEST_DATA.PHONE_NUMBER);

    const DISPLAYED_DATE_OF_BIRTH = ACTION.selectDateFromCalendar(
      TEST_DATA.DATE_OF_BIRTH
    );
    cy.get(SELECTORS.dateOfBirthInput).should(
      "have.value",
      DISPLAYED_DATE_OF_BIRTH
    );

    cy.get(SELECTORS.subjectsInput).type(`${TEST_DATA.SUBJECT}{enter}`);
    cy.get(SELECTORS.subjectLabel).should("be.visible");

    cy.get(SELECTORS.hobbiesCheckboxMusic)
      .check({ force: true })
      .should("be.checked");

    cy.get(SELECTORS.uploadPictureButton)
      .selectFile("./cypress/downloads/image.jpg")
      .then(($input) => {
        const files = $input[0].files;
        expect(files[0].name).to.eq("image.jpg");
      });

    cy.get(SELECTORS.currentAddress)
      .type(TEST_DATA.CURRENT_ADDRESS)
      .should("have.value", TEST_DATA.CURRENT_ADDRESS);

    const SELECTED_LOCATION = ACTION.selectStateAndCity(
      TEST_DATA.STATES_AND_CITIES
    );
    cy.get(SELECTORS.state).should("contain", SELECTED_LOCATION.state);
    cy.get(SELECTORS.city).should("contain", SELECTED_LOCATION.city);

    cy.get(SELECTORS.submitButton).click();

    cy.get(SELECTORS.modalBody)
      .should("contain", TEST_DATA.FIRST_NAME)
      .and("contain", TEST_DATA.FIRST_NAME)
      .and("contain", TEST_DATA.LAST_NAME)
      .and("contain", TEST_DATA.USER_EMAIL)
      .and("contain", TEST_DATA.CURRENT_ADDRESS)
      .and("contain", TEST_DATA.PHONE_NUMBER)
      .and("contain", TEST_DATA.SUBJECT)
      .and("contain", SELECTED_LOCATION.state)
      .and("contain", SELECTED_LOCATION.city)
      .and("contain", "image.jpg");
  });

  it("Check that user can not submit the form with the empty required fields", () => {
    cy.get(SELECTORS.submitButton).click();

    cy.get(SELECTORS.firstName)
      .should("have.css", "border-color", TEST_DATA.ERROR_BORDER_COLOR_REQUIRE)
      .and("have.css", "background-image", TEST_DATA.ERROR_IMAGE_REQUIRE);

    cy.get(SELECTORS.lastName)
      .should("have.css", "border-color", TEST_DATA.ERROR_BORDER_COLOR_REQUIRE)
      .and("have.css", "background-image", TEST_DATA.ERROR_IMAGE_REQUIRE);

    cy.get(SELECTORS.userNumber)
      .should("have.css", "border-color", TEST_DATA.ERROR_BORDER_COLOR_REQUIRE)
      .and("have.css", "background-image", TEST_DATA.ERROR_IMAGE_REQUIRE);

    cy.get(`${SELECTORS.genderLabels}1]`).should(
      "have.css",
      "color",
      TEST_DATA.ERROR_BORDER_COLOR_REQUIRE
    );

    cy.get(`${SELECTORS.genderLabels}2]`).should(
      "have.css",
      "color",
      TEST_DATA.ERROR_BORDER_COLOR_REQUIRE
    );

    cy.get(`${SELECTORS.genderLabels}3]`).should(
      "have.css",
      "color",
      TEST_DATA.ERROR_BORDER_COLOR_REQUIRE
    );
  });

  it("Check that user can not submit the form with the invalid email", () => {
    cy.get(SELECTORS.userEmail)
      .type(TEST_DATA.INVALID_EMAIL)
      .should("have.value", TEST_DATA.INVALID_EMAIL);

    cy.get(SELECTORS.submitButton).click();

    cy.get(SELECTORS.userEmail)
      .should("have.css", "border-color", TEST_DATA.ERROR_BORDER_COLOR_REQUIRE)
      .and("have.css", "background-image", TEST_DATA.ERROR_IMAGE_REQUIRE);
  });
});
