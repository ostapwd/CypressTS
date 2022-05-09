import loginPage from "../support/pages/loginPage-practice";

describe ("Test suite 1", function () {

    it("Test 1 'Login test'", function () {

        loginPage.open();
        loginPage.loginToTheApp('standard_user', "secret_sauce");

       
  
        cy.get("#header_container .title").then(element => 
        cy.log(element.text() ));
         
     })
    })