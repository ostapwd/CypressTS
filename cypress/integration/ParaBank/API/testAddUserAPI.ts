import apiControllerRegister from "../../../api/apiControllerRegister"

describe ("test suite register to Parabank", () => {
    let cookie
    it("GET register", () => {
        apiControllerRegister.getRegister().then((response) => {
            expect(response.status).to.be.equal(200);
            cy.getCookie('JSESSIONID').then((c) => {
               cookie = c?.value;
               cy.log(cookie)
            })
       })
    })
    it("Add user", () => {
        let user = {
            "customer.firstName": "re",
            "customer.lastName": "re",
            "customer.address.street": "re",
            "customer.address.city": "re",
            "customer.address.state": "re",
            "customer.address.zipCode": "re",
            "customer.phoneNumber": "re",
            "customer.ssn": "re",
            "customer.username": "re",
            "customer.password": "re",
            "repeatedPassword": "re"
        }
            apiControllerRegister.addUser(user).then((response) => {
            expect(response.status).to.be.equal(200);
        })
    })
   
 })

