import faker from "faker";

export const FULLNAME = faker.name.findName();
export const EMAIL = faker.internet.email();
export const CURRENT_ADDRESS = faker.address.streetAddress();
export const PERMANENT_ADDRESS = faker.address.streetAddress();
export const INVALID_EMAIL = faker.internet.domainSuffix();
