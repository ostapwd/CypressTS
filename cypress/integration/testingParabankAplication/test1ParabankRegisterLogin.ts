import usersParabank from "../../data/usersParabank";
import {MainParabankPageLoginRegister} from "../../support/pages/parabankPages/mainParabankPageLoginRegister";

const l = new MainParabankPageLoginRegister();
describe ("First test suite for Parabank ", function () {
    beforeEach('login to the app', () => {
        l.open()
    })
    it("Test 1 'Register to the app'", function () {
        l.registerToTheApp(usersParabank.secondUser)
        .welcomeForMessage() 

        .checkingIfThereAreEnoughtInputs()
        .buttonRegister()
    })

    it("Test 2 'Login to the app'", function () {
        l.loginToTheApp(usersParabank.login);
    })

   
    it("Test 3 'Forgot some login info'", function () {
        l.forgotInfo()
        .checkCustomerLookup()
        l.forgotSomeLoginInformation(usersParabank.forgotInformation)   
          })
    
    it("Test 4 'Forgot all login info and need to check data entry requirements'", function () {
        l.forgotInfo()
        .checkCustomerLookup()
        l.forgotFillAllInputs(usersParabank.forgotAllInformation)
        .responsWhenTheAllInputsAreNotFilled() 
        })

        afterEach(function () {
            cy.log("after Each");
        });
    })
    


        


    
