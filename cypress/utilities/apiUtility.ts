class ApiUtility {
    logResponse(response) {
      cy.log(JSON.stringify(response, null, 2));
    }
  
    log(object) {
      cy.log(JSON.stringify(object, null, 2));
    }
  
    logMessage(message) {
      cy.log(message);
    }
  }
  
  export default new ApiUtility();