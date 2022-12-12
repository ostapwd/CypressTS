//import {RegisterParabank} from "../../support/pages/registerParabank"
import registerParabank from  "../../support/pages/registerParaPomJS"
import loginParabank from "../../support/pages/loginParaPOM"
import {LoginParabankTS} from "../../support/pages/loginParaPomTS"
import { RegisterParabankTS } from "../../support/pages/registerParaPomTS"


const user1 = 'user1';
    const user2 = 'user2';

describe('Parabank test suit  1', () => {

    
    beforeEach(()=>{
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
    })
    it('Verify user can register', () => {       
               
        cy.contains('Register').click();
        cy.get(".title").should('contain','Signing up is easy!')
        cy.get("[name='customer.firstName']").type(user1)
        cy.get('[name="customer.lastName"]').type(user1)
        cy.get('[name="customer.address.street"]').type(user1)
        cy.get('[name="customer.address.city"]').type(user1)
        cy.get('[name="customer.address.state"]').type(user1)
        cy.get('[name="customer.address.zipCode"]').type(user1)
        cy.get('[name="customer.phoneNumber"]').type(user1)
        cy.get('[name="customer.ssn"]').type(user1)
       
        cy.get('[name="customer.username"]').type(user1)
        cy.get('[name="customer.password"]').type(user1)
        cy.get('[name="repeatedPassword"]').type(user1)
        cy.get('[value="Register"]').click();
        //cy.get('#rightPanel p').should('contain', 'Your account was created successfully. You are now logged in.')
        //cy.get('.error').should('have.text','This username already exists.')
        
    });
    it('Verify user can log in', ()=>{
        cy.get('[name="username"]').type(user1)
        cy.get('[name="password"]').type(user1)
        cy.get('[value="Log In"]').click();

    })
     it('Verify user can register via POM', ()=>{

       
        registerParabank.open().clickRegisterButton().registerToTheApp(user2);
        
        cy.get(".title").should('contain','Signing up is easy!')
        
        cy.get('#rightPanel p').should('contain', 'Your account was created successfully. You are now logged in.')

    })

    it('Positive login', ()=>{
        loginParabank.loginToTheApp(user2)
        cy.get('.smallText').should('have.text',`Welcome ${user2} ${user2}`)
        cy.get('h1.title').should('contain','Accounts Overview')
    })

    
});

describe.only('Test suite register TS',()=>{

    it('verify user can register via POM TS',()=>{
        const registerParabankTS = new RegisterParabankTS();
        registerParabankTS.open().clickRegisterButton().registerToApp(user2)
        cy.get(".title").should('contain',`Welcome ${user2}`)
        cy.get('#rightPanel p').should('contain', 'Your account was created successfully. You are now logged in.')

    })
    it('Positive login POM TS',()=>{
        const loginPageParabankTS = new LoginParabankTS();
        loginPageParabankTS.open().loginToTheApp(user2);
        cy.get('.smallText').should('have.text',`Welcome ${user2} ${user2}`)
        cy.get('h1.title').should('contain','Accounts Overview')
    })
})