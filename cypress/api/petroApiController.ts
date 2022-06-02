import apiUtility from "../utilities/apiUtility";

class ApiController {



    getStatus() {
        return cy.request({
                method: "GET",
                url: "https://petro-json-test.herokuapp.com/status",
                failOnStatusCode: false
            })
            .then((response) => {
                apiUtility.logResponse(response);
            });
    }

    postStatus(status: object) {
        return cy
            .request({
                method: "POST",
                url:"https://petro-json-test.herokuapp.com/status",
                failOnStatusCode: false,
                body: status
            })
            .then((response) => {
                apiUtility.logResponse(response);
            });
    }

}
export default new ApiController();
