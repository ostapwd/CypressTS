import usersParabank from "../../data/registrationUsersParabank";
import {MainParabankPageLoginRegister} from "../../support/pages/parabankPagesMoreSensitive/mainParabankPageLoginRegister";
import loginUsersParabank from "../../data/loginUsersParabank";

const loginRegister = new MainParabankPageLoginRegister();
describe ("First test suite for Parabank ", function () {
    beforeEach('login to the app', () => {
        loginRegister.open()
    })
    it("Test 1 'Register to the app'", function () {
        loginRegister.registerToTheApp(usersParabank.secondUser)
        .buttonRegister() 
        .welcomeForMessage() 
        //.checkingIfThereAreEnoughtInputs()
        //.buttonRegister()
    })

    it("Test 2 'Login to the app'", function () {
        loginRegister.loginToTheApp(loginUsersParabank.login);
    })

   
    it("Test 3 'Forgot some login info'", function () {
        loginRegister.forgotInfo()
        .checkCustomerLookup()
        loginRegister.forgotSomeLoginInformation(usersParabank.forgotInformation)   
    })
    
    it("Test 4 'Forgot all login info and need to check data entry requirements'", function () {
        loginRegister.forgotInfo()
        .checkCustomerLookup()
        loginRegister.forgotFillAllInputs(usersParabank.forgotAllInformation)
        .responsWhenTheAllInputsAreNotFilled() 
    })

        afterEach(function () {
            cy.log("after Each");
        });
    })
    


        


    
