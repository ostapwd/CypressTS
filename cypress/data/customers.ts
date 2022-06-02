import {v4 as uuidv4} from "uuid";

class Customers {

  readonly validCustomer_1 = {
    firstName: "oleg",
    lastName: "pin",
    addressStreet: "Kaluny",
    addressCity: "Lviv",
    addressState: "Lvivska",
    addressZipCode: "5800",
    phoneNumber: "0507689111",
    ssn: "333",
    username: `customer_${uuidv4().replace(/-/g, "").substring(0, 10)}`,
    password: "money",
    repeatedPassword: "money"
  };

  readonly validCustomer_2 = {
    firstName: "oleg",
    lastName: "pin",
    addressStreet: "Kaluny",
    addressCity: "Lviv",
    addressState: "Lvivska",
    addressZipCode: "5800",
    phoneNumber: "0507689111",
    ssn: "333",
    username: `customer_${uuidv4().replace(/-/g, "").substring(0, 10)}`,
    password: "money",
    repeatedPassword: "money"
  };

  readonly validCustomer_3 = {
    firstName: "oleg",
    lastName: "pin",
    addressStreet: "Kaluny",
    addressCity: "Lviv",
    addressState: "Lvivska",
    addressZipCode: "5800",
    phoneNumber: "0507689111",
    ssn: "333",
    username: `customer_${uuidv4().replace(/-/g, "").substring(0, 10)}`,
    password: "money",
    repeatedPassword: "money"
  };

  readonly invalidCustomer = {
    firstName: "oleg",
    lastName: "{backspace}",
    addressStreet: "Kaluny",
    addressCity: "Lviv",
    addressState: "Lvivska",
    addressZipCode: "5800",
    phoneNumber: "0507689111",
    ssn: "333",
    username: `customer_${uuidv4().replace(/-/g, "").substring(0, 10)}`,
    password: "money",
    repeatedPassword: "money"
  };

}

export default new Customers();
