describe(" Log in", function(){
    it ("google", function(){
        cy.visit("https://www.saucedemo.com/")
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.wait(1000)
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()
        cy.get('#first-name').type('Paraniak')
        cy.get('#last-name').type('Nataliia')
        cy.get('#postal-code').type('79491')
        cy.wait(1000)
        cy.get('#continue').click()
        cy.wait(1000)
        cy.get('#finish').click()
    });
    });
