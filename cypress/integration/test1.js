describe('SwagLabs test suite', function() {

    it('problem user login ', function() {
        cy.visit('https://www.saucedemo.com/');

        cy.get('#user-name').type('problem_user');
        cy.get('#password').type('secret_sauce');

        cy.get('#login-button').click();

        cy.get('#item_5_title_link > div').then(elment => {
            expect(elment.text()).to.equal('Sauce Labs Fleece Jacket')
        });
    });

    it('wrong pass login ', function() {
        cy.visit('https://www.saucedemo.com/');

        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('ayay');

        cy.get('#login-button').click();

        cy.get('[data-test ="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    });

    it('should buy items', function() {
        cy.visit('https://www.saucedemo.com/');

        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');

        cy.get('#login-button').click();

        cy.get('#header_container .title').should('have.css', 'text-transform', 'uppercase').then(item =>
            expect(item.text()).to.equal('Products')
        );

        cy.get(".btn.btn_primary.btn_small.btn_inventory").click({ multiple: true });

        cy.get('#shopping_cart_container > a').click();

        cy.get('#remove-sauce-labs-onesie').click();
        cy.get('#remove-sauce-labs-bolt-t-shirt').click();

        cy.get('#checkout').click();

        cy.get('#first-name').type('Yurii');
        cy.get('#last-name').type('Nah');
        cy.get('#postal-code').type('12345');

        cy.get('#continue').click();

        cy.get('#finish').click();

        cy.get('#checkout_complete_container > img').should('be.visible')
    });
});