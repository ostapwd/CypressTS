const SELECTORS = require("../page-object/automation-practice-form.selectors.json");
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const MONTHS3LET = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function selectDateFromCalendar(date) {
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

function selectStateAndCity(StatesAndCities) {
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

function selectLocation(state, city) {
  cy.get(SELECTORS.stateInput).click({force: true});
  cy.get(SELECTORS.statesContainer).contains(state).click();
  cy.get(SELECTORS.cityInput).click({force: true});
  cy.get(SELECTORS.citiesContainer).contains(city).click();
}

function getRandProperty(obj) {
  let keys = Object.keys(obj);
  return keys[(keys.length * Math.random()) << 0];
}

function getRandIndex(length) {
  let index = Math.floor(Math.random() * length);
  return index;
}

module.exports.selectDateFromCalendar = selectDateFromCalendar;
module.exports.selectStateAndCity = selectStateAndCity;
module.exports.selectLocation = selectLocation;
