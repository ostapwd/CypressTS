import * as SELECTORS from "../page-object/automation-practice-form.selectors.json";
import { FormPracticePage } from "../models/practice-form.page.js";
const formPracticePage = new FormPracticePage();
import {
  USER_DATA,
  STATES_AND_CITIES,
  ERROR_IMAGE_REQUIRE,
  ERROR_BORDER_COLOR_REQUIRE,
} from "../fixtures/automation-practice-form.data.js";

describe("Student Registration form cheking:", function () {
  beforeEach(() => {
    cy.visit("/automation-practice-form");
  });

  it("Check that user can submit the form with correct data", () => {
    formPracticePage
      .typeFistName(USER_DATA.firstName)
      .should("have.value", USER_DATA.firstName);

    formPracticePage
      .typeLastName(USER_DATA.lastName)
      .should("have.value", USER_DATA.lastName);

    formPracticePage
      .typeUserEmail(USER_DATA.email)
      .should("have.value", USER_DATA.email);

    formPracticePage.checkGender().should("be.checked");

    formPracticePage
      .typePhoneNumber(USER_DATA.phoneNumber)
      .should("have.value", USER_DATA.phoneNumber);

    const DISPLAYED_DATE_OF_BIRTH = formPracticePage.selectDateFromCalendar(
      USER_DATA.dateOfBirth
    );
    cy.get(SELECTORS.dateOfBirthInput).should(
      "have.value",
      DISPLAYED_DATE_OF_BIRTH
    );

    formPracticePage.typeSubject(USER_DATA.subject);
    cy.get(SELECTORS.subjectLabel).should("be.visible");

    formPracticePage.checkHobbi().should("be.checked");

    formPracticePage.uploadPicture().then(($input) => {
      const files = $input[0].files;
      expect(files[0].name).to.eq("image.jpg");
    });

    formPracticePage
      .typeCurrentAddress(USER_DATA.currentAddress)
      .should("have.value", USER_DATA.currentAddress);

    const SELECTED_LOCATION =
      formPracticePage.selectStateAndCity(STATES_AND_CITIES);
    cy.get(SELECTORS.state).should("contain", SELECTED_LOCATION.state);
    cy.get(SELECTORS.city).should("contain", SELECTED_LOCATION.city);

    formPracticePage.submitForm();

    cy.get(SELECTORS.modalBody)
      .should("contain", USER_DATA.firstName)
      .and("contain", USER_DATA.lastName)
      .and("contain", USER_DATA.email)
      .and("contain", USER_DATA.currentAddress)
      .and("contain", USER_DATA.phoneNumber)
      .and("contain", USER_DATA.subject)
      .and("contain", SELECTED_LOCATION.state)
      .and("contain", SELECTED_LOCATION.city)
      .and("contain", "image.jpg");
  });

  it("Check that user can not submit the form with the empty required fields", () => {
    formPracticePage.submitForm();

    cy.get(SELECTORS.firstName)
      .should("have.css", "border-color", ERROR_BORDER_COLOR_REQUIRE)
      .and("have.css", "background-image", ERROR_IMAGE_REQUIRE);

    cy.get(SELECTORS.lastName)
      .should("have.css", "border-color", ERROR_BORDER_COLOR_REQUIRE)
      .and("have.css", "background-image", ERROR_IMAGE_REQUIRE);

    cy.get(SELECTORS.phoneNumber)
      .should("have.css", "border-color", ERROR_BORDER_COLOR_REQUIRE)
      .and("have.css", "background-image", ERROR_IMAGE_REQUIRE);

    cy.get(`${SELECTORS.genderLabels}1]`).should(
      "have.css",
      "color",
      ERROR_BORDER_COLOR_REQUIRE
    );

    cy.get(`${SELECTORS.genderLabels}2]`).should(
      "have.css",
      "color",
      ERROR_BORDER_COLOR_REQUIRE
    );

    cy.get(`${SELECTORS.genderLabels}3]`).should(
      "have.css",
      "color",
      ERROR_BORDER_COLOR_REQUIRE
    );
  });

  it("Check that user can not submit the form with the invalid email", () => {
    formPracticePage
      .typeUserEmail(USER_DATA.invalidEmail)
      .should("have.value", USER_DATA.invalidEmail);

    formPracticePage.submitForm();

    cy.get(SELECTORS.userEmail)
      .should("have.css", "border-color", ERROR_BORDER_COLOR_REQUIRE)
      .and("have.css", "background-image", ERROR_IMAGE_REQUIRE);
  });

  it("Check that all options are displayed in the Select State drop-down menu:", () => {
    cy.get(SELECTORS.stateInput).click({ force: true });
    for (let state in USER_DATA.STATES_AND_CITIES) {
      cy.get(SELECTORS.statesContainer).should("contain", state);
    }
  });

  it("Check that all options are displayed in the Select City drop-down menu:", () => {
    for (let state in USER_DATA.STATES_AND_CITIES) {
      cy.get(SELECTORS.stateInput).click({ force: true });
      cy.get(SELECTORS.statesContainer).contains(`${state}`).click();
      for (let city of USER_DATA.STATES_AND_CITIES[state]) {
        cy.get(SELECTORS.cityInput).click({ force: true });
        cy.get(SELECTORS.citiesContainer).should("contain", city);
      }
    }
  });

  it("Check that user can choose all posible states and cities:", () => {
    for (let state in USER_DATA.STATES_AND_CITIES) {
      for (let city of USER_DATA.STATES_AND_CITIES[state]) {
        formPracticePage.selectLocation(state, city);
        cy.get(SELECTORS.state).should("have.text", state);
        cy.get(SELECTORS.city).should("contain", city);
      }
    }
  });
});
