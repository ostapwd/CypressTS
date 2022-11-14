//<reference types="Cypress" />

import loginPage from "../../support/pages/loginPage";

describe('Test suit 1', () => {
    it('Test 1', ()=>{

        loginPage.open();
        loginPage.loginToTheApp('standard_user','secret_sauce');
       
        cy.wait(1000);


        cy.get("#header_container .title").then(el => cy.log(el.text()))

        cy.get("#header_container .title").should('contain','Products')

        cy.contains("Add to cart").click();
        
        cy.wait(1000);

        cy.get(".inventory_item_name").each(el=>{
            cy.log(el.text())
        })
        cy.get("[id*='add-to-cart']").each(el=>{
            el.click()
        })
       

        cy.xpath("//*[@id='react-burger-menu-btn']").click();
    })
});
