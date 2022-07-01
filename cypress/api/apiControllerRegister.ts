import apiUtility from "../utilities/apiUtility";

class ApiControllerRegister {
   
    getRegister() {
        return  cy.request({
            method: "GET",
            url: Cypress.env("API_HOST_Parabank"),
            failOnStatusCode: false
        })
        .then((response) => {
            apiUtility.logResponse(response);
        });
    }

    addUser(user: object) {
        return  cy.request({
            method: "POST",
            url: Cypress.env("API_HOST_Parabank"),
            failOnStatusCode: false,
            form: true,
            body: user
        })
        .then((response) => {
            apiUtility.logResponse(response);
        });
    }
}
export default new ApiControllerRegister();
