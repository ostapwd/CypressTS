import {BasePage} from "../support/pages/ParabanPages/BasePage"
import {RegisterPage} from "../support/pages/ParabanPages/RegisterPage"
import {MainPage} from "../support/pages/ParabanPages/MainPage"
import user from "../data/userForParabank"

describe ('Test suit : testing main functionality', function(){

    it ('Test case : user registation', function(){
        new BasePage()
        .open()
        .clickRegisterButton()
        new RegisterPage()
        .typeRegisterInfo(user.standartUser)
        .clickRegister()
        cy.get("h1[class='title']").should('contain', "Welcome")
    })

    it ('Test case : user login', function(){
        new BasePage()
        .open()
        .login(user.standartUser)
        cy.get("h1[class='title']").should('contain', "Accounts Overview")
    })

})
