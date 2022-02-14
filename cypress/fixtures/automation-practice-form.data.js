const faker = require("faker");

const FIRST_NAME = faker.name.firstName();
const LAST_NAME = faker.name.lastName();
const USER_EMAIL = faker.internet.email();
const INVALID_EMAIL = faker.name.firstName();
const PHONE_NUMBER = faker.phone.phoneNumber("0#########");

const DATE_OF_BIRTH = faker.date.between(
  "1900-01-01T00:00:00.000Z",
  "2020-12-31T00:00:00.000Z"
);

const SUBJECT = "English";
const CURRENT_ADDRESS = faker.address.streetAddress();

const STATES_AND_CITIES = {
  NCR: ["Delhi", "Gurgaon", "Noida"],
  "Uttar Pradesh": ["Agra", "Lucknow", "Merrut"],
  Haryana: ["Karnal", "Panipat"],
  Rajasthan: ["Jaipur", "Jaiselmer"],
};

const ERROR_IMAGE_REQUIRE = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e")`;
const ERROR_BORDER_COLOR_REQUIRE = "rgb(220, 53, 69)";
module.exports.FIRST_NAME = FIRST_NAME;
module.exports.LAST_NAME = LAST_NAME;
module.exports.USER_EMAIL = USER_EMAIL;
module.exports.INVALID_EMAIL = INVALID_EMAIL;
module.exports.PHONE_NUMBER = PHONE_NUMBER;
module.exports.DATE_OF_BIRTH = DATE_OF_BIRTH;
module.exports.SUBJECT = SUBJECT;
module.exports.CURRENT_ADDRESS = CURRENT_ADDRESS;
module.exports.STATES_AND_CITIES = STATES_AND_CITIES;
module.exports.ERROR_IMAGE_REQUIRE = ERROR_IMAGE_REQUIRE;
module.exports.ERROR_BORDER_COLOR_REQUIRE = ERROR_BORDER_COLOR_REQUIRE;