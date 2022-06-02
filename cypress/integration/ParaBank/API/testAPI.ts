

describe ("Second test suite for Parabank", () => {
    it("GET request", () => {
        let cookie

        cy.request({
            method: "GET",
            url: "https://parabank.parasoft.com/parabank/register.htm"
        }).then((response) => {
            cy.log(JSON.stringify(response, null, 2));
            expect(response.status).to.be.equal(200);
            cy.getCookie('JSESSIONID').then((c) => {
                cookie = c
            })
        });

        cy.request({
            method: "POST",
            url: "https://parabank.parasoft.com/parabank/register.htm",
            form: true,
            headers: {
                'my-token-x': cookie,
              },
            body:{
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
        }).then((response) => {
            cy.log(JSON.stringify(response, null, 2));
            expect(response.status).to.be.equal(200);
        });
    })
   
 })

