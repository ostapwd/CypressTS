import faker from "faker";

export const USER_DATA = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  invalidEmail: faker.name.firstName(),
  phoneNumber: faker.phone.phoneNumber("0#########"),

  dateOfBirth: faker.date.between(
    "1900-01-01T00:00:00.000Z",
    "2020-12-31T00:00:00.000Z"
  ),

  subject: "English",
  currentAddress: faker.address.streetAddress(),
};

export const STATES_AND_CITIES = {
  NCR: ["Delhi", "Gurgaon", "Noida"],
  "Uttar Pradesh": ["Agra", "Lucknow", "Merrut"],
  Haryana: ["Karnal", "Panipat"],
  Rajasthan: ["Jaipur", "Jaiselmer"],
};

export const MONTHS = [
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

export const MONTHS3LET = [
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

export const ERROR_IMAGE_REQUIRE = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e")`;
export const ERROR_BORDER_COLOR_REQUIRE = "rgb(220, 53, 69)";
