
import { should } from "chai";
import usersParabank from "../../data/usersParabank";
import {ParabankLoginPage} from "../../support/pages/parabank-pages/parabankLoginPage";

const p = new ParabankLoginPage();

describe ("Second test suite for Parabank", function () {
    beforeEach('login to the app', () => {
        new ParabankLoginPage().open()
        .loginToTheApp(usersParabank.login);
    })
    it("Sending GET request", () => {
        
        cy.request("https://parabank.parasoft.com/parabank/index.htm")
        .then((response)=> {
            console.log(response);
        })
    })


    it("Verify correct request and response", () => {
        
        cy.intercept('POST', '**/accounts').as('postAccounts')
        cy.contains('Open New Account').click()
        cy.get('[label="13677"]')
        cy.xpath('//input[@value="Open New Account"]').click()
        cy.wait('@postAccounts')
        cy.get('@postAccounts').then(xhr =>{
            console.log(xhr)
            expect(xhr.status).to.equal(200)
        })

    })

        afterEach(function () {
        cy.log("after Each");
        });
    })
