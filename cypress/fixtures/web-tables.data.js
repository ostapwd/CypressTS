const faker = require('faker'); 

const FIRST_NAME = faker.name.firstName();
const LAST_NAME = faker.name.lastName();
const USER_EMAIL = faker.internet.email();
const AGE = faker.commerce.price(1, 100, 0);

const SALARY = faker.commerce.price(400, 1000, 0);
const DEPARTMENT = faker.commerce.department();

module.exports.FIRST_NAME = FIRST_NAME;
module.exports.LAST_NAME = LAST_NAME;
module.exports.USER_EMAIL = USER_EMAIL;
module.exports.AGE = AGE;
module.exports.SALARY = SALARY;
module.exports.DEPARTMENT = DEPARTMENT;
