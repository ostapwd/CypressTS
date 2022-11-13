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

describe.only('Test suite for login',()=>{

    before(() => {
        cy.log("Main before")
    });

    beforeEach(() => {
        cy.log("MAIN beforeEach")
        cy.visit("https://www.saucedemo.com/")
       
    });
    describe('Test suite for login (positive)',()=>{

        before(() => {
            cy.log("Internal before")
        });

        beforeEach(() => {
            cy.log("beforeEach")
            
        });
    it('Test1 (positive login)', ()=>{
       
        cy.get("#user-name").type('standard_user');
        cy.get("#password").type('secret_sauce');
        cy.get("#login-button").click();
        cy.get("span.title").should('have.text', 'Products')
        
    })
    it('Test2 (positive login)', ()=>{
        
        cy.get("#user-name").type('standard_user');
        cy.get("#password").type('secret_sauce');
        cy.get("#login-button").click(); 
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
            
            cy.get("#user-name").type('standard_user');
        });

        it('Test3 (negative login)', ()=>{
            
            
            cy.get("#password").type('secret_sauce1');
            cy.get("#login-button").click();
            cy.get("h3[data-test='error']").should('contain', 'Epic sadface: Username and password do not match any user in this service')
            
        })

        it('Test4 (negative login)', ()=>{
                        
            cy.get("#login-button").click();
            cy.get("h3[data-test='error']").should('contain', 'Epic sadface: Password is required')
            
        })
    })
    after(() => {
        cy.log("Main after")
    });
})