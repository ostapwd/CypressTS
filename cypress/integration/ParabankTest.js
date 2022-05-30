import {BasePage} from "../support/pages/ParabanPages/BasePage"
import {RegisterPage} from "../support/pages/ParabanPages/RegisterPage"
import {MainPage} from "../support/pages/ParabanPages/MainPage"
import user from "../data/userForParabank"

describe ('Test suit : testing main functionality', function(){

    it ('Test case : user registation and opening new account', function(){
        new BasePage()
        .open()
        .clickRegisterButton()
        new RegisterPage()
        .typeRegisterInfo(user.standartUser)
        .clickRegister()
        cy.get("h1[class='title']").should('contain', "Welcome")
        new MainPage()
        .clickOpenNewAccount()
        .selectAccountTypeChecking()
        .selectAmountForOpening()
        .clickOpenNewAccountBTN()
        .clickNewAccountID()
        cy.get("h1[class='title']").should('contain', "Account Details")

    })

})
