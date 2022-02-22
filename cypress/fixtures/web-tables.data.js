import faker from "faker";

export const USER_DATA = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  userEmail: faker.internet.email(),
  age: faker.commerce.price(1, 99, 0),
  salary: faker.commerce.price(400, 1000, 0),
  department: faker.commerce.department(),
};
