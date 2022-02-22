import * as SELECTORS from "../page-object/automation-practice-form.selectors.json";
import {
  MONTHS,
  MONTHS3LET,
} from "../fixtures/automation-practice-form.data.js";

export class FormPracticePage {
  typeFistName(firstName) {
    return cy.get(SELECTORS.firstName).type(firstName);
  }

  typeLastName(lastName) {
    return cy.get(SELECTORS.lastName).type(lastName);
  }

  typeUserEmail(userEmail) {
    return cy.get(SELECTORS.userEmail).type(userEmail);
  }

  checkGender() {
    return cy.get(SELECTORS.genderRadioMale).check({ force: true });
  }

  typePhoneNumber(phoneNumber) {
    return cy.get(SELECTORS.phoneNumber).type(phoneNumber);
  }

  typeSubject(subject) {
    cy.get(SELECTORS.subjectsInput).type(`${subject}{enter}`);
  }

  checkHobbi() {
    return cy.get(SELECTORS.hobbiesCheckboxMusic).check({ force: true });
  }

  uploadPicture() {
    return cy
      .get(SELECTORS.uploadPictureButton)
      .selectFile("./cypress/downloads/image.jpg");
  }

  typeCurrentAddress(currentAddress) {
    return cy.get(SELECTORS.currentAddress).type(currentAddress);
  }

  submitForm() {
    cy.get(SELECTORS.submitButton).click({ force: true });
  }

  selectDateFromCalendar(date) {
    const YEAR = "" + date.getFullYear();
    const MONTH = MONTHS[date.getMonth()];
    const DAY = "" + date.getDate();
    let displayedDate = DAY < 10 ? `0${DAY}` : DAY;
    displayedDate += ` ${MONTHS3LET[date.getMonth()]} ${YEAR}`;

    cy.get(SELECTORS.dateOfBirthInput).click();
    cy.get(SELECTORS.datepickerYear).select(YEAR);
    cy.get(SELECTORS.datepickerMonth).select(MONTH);
    cy.get(
      `.react-datepicker__day[aria-label*="${MONTH} ${DAY}"]:first()`
    ).click();

    return displayedDate;
  }

  selectStateAndCity(StatesAndCities) {
    function getRandProperty(obj) {
      let keys = Object.keys(obj);
      return keys[(keys.length * Math.random()) << 0];
    }

    function getRandIndex(length) {
      let index = Math.floor(Math.random() * length);
      return index;
    }

    const STATE = getRandProperty(StatesAndCities);
    const CITY =
      StatesAndCities[STATE][getRandIndex(StatesAndCities[STATE].length)];

    let location = {
      state: STATE,
      city: CITY,
    };

    cy.get(SELECTORS.stateInput)
      .click({ force: true })
      .type(`${location.state}{enter}`);
    cy.get(SELECTORS.cityInput)
      .click({ force: true })
      .type(`${location.city}{enter}`);

    return location;
  }

  selectLocation(state, city) {
    cy.get(SELECTORS.stateInput).click({ force: true });
    cy.get(SELECTORS.statesContainer).contains(state).click();
    cy.get(SELECTORS.cityInput).click({ force: true });
    cy.get(SELECTORS.citiesContainer).contains(city).click();
  }
}
