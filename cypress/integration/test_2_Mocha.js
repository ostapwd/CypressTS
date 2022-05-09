describe('Test suite for login', () => {
    beforeEach(function() { 
        cy.visit('https://www.saucedemo.com');
    });
    before(function() { 
        cy.log('Main before');
    });
    describe.only('Test suite for login', () => {
        before(function() { 
            cy.log('Internal before');
        });

        beforeEach(function() { 
            cy.get('#user-name').should('be.visible').type('standard_user');
            cy.get("input[id='password']").type('secret_sauce');
        });
        
        it('Test 1 (positive login)', () => {
            cy.get("input[id='login-button']").click();
            cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
            cy.xpath("//*[@id='inventory_container']").should('be.visible');
            cy.get("span.title").should('contain', 'Products');
            cy.get("span.title").should('have.text', 'Products')
        })

        it.only('Test 2 (positive login)', () => {
            cy.get("input[id='login-button']").click();
            cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
            cy.xpath("//*[@id='inventory_container']").should('be.visible');
            cy.get("span.title").should('contain', 'Products')
        })
        after(function() {
            cy.log('internal after Finish')
        });
    })

    describe('Test suite for login', () => {
        beforeEach(function() { 
            cy.get('#user-name').should('be.visible').type('standard_user');
        });
        it('Test 2 (negative login)', () => {
            cy.get("input[id='password']").type('secret_sauce111');
            cy.get("input[id='login-button']").click();
            cy.xpath("//*[@data-test='error']").should('be.visible');
            cy.get("h3[data-test='error']").should('contain', 'Epic sadface: Username and password do not match any user in this service');
        })
        it('Test 2 (negative login)', () => {
            cy.get("input[id='login-button']").click();
            cy.xpath("//*[@data-test='error']").should('be.visible');
            cy.get("h3[data-test='error']").should('contain', 'Epic sadface: Password is required');
        })
    })
    after(function() {
        cy.log('Finish')
    });
})