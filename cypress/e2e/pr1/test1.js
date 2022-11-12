//<reference types="Cypress" />

describe('Test suit', () => {
    it('Test1', ()=>{
        cy.visit("https://www.saucedemo.com/") 
        //cy.wait(1000);
        //cy.xpath("//form/div").click({multiple:true});
        cy.wait(1000);


        cy.get("#user-name").type('standard_user');
        cy.get("#password").type('secret_sauce');

        cy.get("#login-button").click();

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