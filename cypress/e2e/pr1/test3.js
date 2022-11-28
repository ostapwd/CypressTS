/// <reference types="Cypress" />

import { Dog } from "../../support/pages/dog";
import loginPage from "../../support/pages/loginPage";
import productPage from "../../support/pages/productPage";
import {LoginPageTS} from "../../support/pages/loginPageTS";

describe('Test suit 3', () => {
    it('Verify user can add all products', ()=>{

    const loginPageTypeScript = new LoginPageTS();

    loginPageTypeScript.open().loginToTheApp("standard_user","secret_sauce")


const dog1 = new Dog('Brovko', 5)
const dog2 = new Dog('Brovko2', 15);
dog1.printMyName();
dog2.printMyName();

        LoginPageTS.open()
        .loginToTheApp("standard_user","secret_sauce")
        .addToCardAllProducts()
        .verifyQuantityOfproducts('6')

        productPage.productLabel.should('contain','Products') 
        //productPage.logAllProducts()
        //productPage.addToCardAllProducts()
        //productPage.menu.click();
        
        productPage.selectedItemsQuantity.invoke('text').should("be.eq", "6")
    })

    it.only('Verify user can add all products1111', ()=>{

        new LoginPageTS().open()
        .loginToTheApp("standard_user","secret_sauce")
        .addToCardAllProducts()
        .verifyQuantityOfproducts('6')
    })

});

describe('Test suite for login',()=>{

    before(() => {
        cy.log("Main before")
    });

    beforeEach(() => {
        cy.log("MAIN beforeEach")
        //cy.visit("https://www.saucedemo.com/")

        loginPage.open();
       
    });
    describe('Test suite for login (positive)',()=>{

        before(() => {
            cy.log("Internal before")
        });

        beforeEach(() => {
            cy.log("beforeEach")
            
        });
    it('Test1 (positive login)', ()=>{

        loginPage.loginToTheApp('standard_user','secret_sauce');
        //cy.get("#user-name").type('standard_user');
        //cy.get("#password").type('secret_sauce');
        //cy.get("#login-button").click();
        cy.get("span.title").should('have.text', 'Products')
        
    })
    it('Test2 (positive login)', ()=>{
        
        loginPage.loginToTheApp('standard_user','secret_sauce');
        //cy.get("#user-name").type('standard_user');
        //cy.get("#password").type('secret_sauce');
        //cy.get("#login-button").click(); 
        cy.get("span.title").should('contain', 'Products')
        
    })
afterEach(() => {
    cy.log("afterEach")
});

    after(() => {
        cy.log("Internal after")
    });
})
    describe('Test suite for login (negative)',()=>{

        beforeEach(() => {
            cy.log("beforeEach")
            
            //cy.get("#user-name").type('standard_user');
        });

        it.only('Test3 (negative login)', ()=>{
            
            loginPage.loginToTheApp('standard_user','problem_user');
            //cy.get("#password").type('secret_sauce1');
            //cy.get("#login-button").click();
            cy.get("h3[data-test='error']").should('contain', 'Epic sadface: Username and password do not match any user in this service')
            
        })

        it('Test4 (negative login)', ()=>{
            loginPage.usernameInput.type('standard_user'); 
            loginPage.loginButton.click()       
            //cy.get("#login-button").click();
            cy.get("h3[data-test='error']").should('contain', 'Epic sadface: Password is required')
            
        })
    })
    after(() => {
        cy.log("Main after")
    });
})