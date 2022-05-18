import usersParabank from "../../data/usersParabank";
import {MainParabankPageLoginRegister} from "../../support/pages/parabank-pages/parabankLoginPage";

const l = new MainParabankPageLoginRegister();
describe ("First test suite for Parabank", function () {
    beforeEach('login to the app', () => {
        l.open()
    })
    it("Test 1 'Register test'", function () {
        l.registerToTheApp(usersParabank.standardUser)
        .checkingIfThereAreEnoughtInputs()
        .buttonRegister()
    })

    it("Test 2 'Login test'", function () {
        l.loginToTheApp(usersParabank.login);
    })

   
    it("Test 3 'Forgot login info'", function () {
        l.forgotInfo()
        l.checkCustomerLookup()
        l.forgotLoginInformation(usersParabank.forgotInformation)   
          })
    
    it("Test 4 'Forgot login info'", function () {
        l.forgotInfo()
        l.checkCustomerLookup()
        l.forgotFillAllInputs(usersParabank.forgotAllInformation)
        l.responsWhenTheAllInputsAreNotFilled() 
        })

        afterEach(function () {
            cy.log("after Each");
        });
    })
    


        


    
