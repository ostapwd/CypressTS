
import { should } from "chai";
import usersParabank from "../../data/registrationUsersParabank";
import {MainParabankPageLoginRegister} from "../../support/pages/parabankPages/mainParabankPageLoginRegister";

const l = new MainParabankPageLoginRegister();

describe ("Second test suite for Parabank", function () {
    beforeEach('login to the app', () => {
         l.open()
        //.loginToTheApp(usersParabank.login);
    })
    it("Sending GET request", () => {
        
        cy.request("https://parabank.parasoft.com/parabank/index.htm")
        .then((response)=> {
            console.log(response);
           //expect(response.body).to.have.property('code', 200);
        })
        
    })
   
      /*it(“Test GET Request”, () => {
        cy.request(“https://parabank.parasoft.com/parabank/index.htm”)
             .then((response) => {
                    expect(response.body).to.have.property('code', 200);
        })
  })*/

    /*it("Verify correct request and response", () => {
        
        cy.intercept('POST', '/accounts').as('postAccounts')
        cy.contains('Open New Account').click()
        cy.get('[label="13455"]')
        cy.xpath('//input[@value="Open New Account"]').click()
        cy.wait('@postAccounts')
        cy.get('@postAccounts').then(xhr =>{
            console.log(xhr)
            expect(xhr.status).to.equal(200)
        })
    })
        afterEach(function () {
        cy.log("after Each");
        });*/

        it("Verify correct request and response", () => {
            cy.server()
            cy.route("POST", "**/register.htm").as('postRegister')

            l.registerToTheApp(usersParabank.standardUser);
            cy.wait('@postRegister')
        })


    })
