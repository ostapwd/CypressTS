import usersParabank from "../../data/usersParabank";
import {ParabankLoginPage} from "../../support/pages/parabank-pages/parabankLoginPage";

const p = new ParabankLoginPage();
describe ("First test suite for Parabank", function () {

    it("Test 1 'Register test'", function () {
        new ParabankLoginPage().open()
        .registerToTheApp(usersParabank.standardUser)
        .checkingIfThereAreEnoughtInputs()
        .buttonRegister()
    })

    it("Test 2 'Login test'", function () {
        new ParabankLoginPage().open()
        p.loginToTheApp(usersParabank.login);
    })

   
    it("Test 3 'Forgot login info'", function () {
        new ParabankLoginPage().open()
        .forgotInfo()
        p.checkIfItIsCustomerLookup()
        p.forgotLoginInformation(usersParabank.forgotInformation)   
          })
    
    it("Test 4 'Forgot login info'", function () {
        new ParabankLoginPage().open()
        .forgotInfo()
        p.checkIfItIsCustomerLookup()
        p.forgotFillAllInputs(usersParabank.forgotAllInformation)
        p.responsWhenTheAllInputsAreNotFilled() 
        })
    })
    


        


    
