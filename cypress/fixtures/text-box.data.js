const faker = require('faker'); 

const RAND_FULLNAME = faker.name.findName();
const RAND_EMAIL = faker.internet.email();
const RAND_CURRENT_ADDRESS = faker.address.streetAddress();
const RAND_PERMANENT_ADDRESS = faker.address.streetAddress();
const RAND_INVALID_EMAIL =  faker.internet.domainSuffix();

module.exports.RAND_FULLNAME = RAND_FULLNAME;
module.exports.RAND_EMAIL = RAND_EMAIL;
module.exports.RAND_CURRENT_ADDRESS = RAND_CURRENT_ADDRESS;
module.exports.RAND_PERMANENT_ADDRESS = RAND_PERMANENT_ADDRESS;
module.exports.RAND_INVALID_EMAIL = RAND_INVALID_EMAIL;

