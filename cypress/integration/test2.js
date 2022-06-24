import loginPage from '../support/pages/loginPage';

describe('Test suite 1', function () {
  it('Test 1', function () {
    loginPage.open();

    loginPage.loginToTheApp('standard_user', 'secret_sauce');
    //cy.visit('https://www.saucedemo.com/');
    //cy.wait(2000);

    //cy.get('form > div').click();

    //cy.get('#user-name').type('standard_user');
    //cy.get('#password').type('secret_sauce');

    //cy.get('#login-button').click();
    cy.get('#header_container .title').then((el) => cy.log(el.text()));

    cy.get('#header_container .title').should('contain', 'Products');
    cy.contains('Add to cart').click();

    cy.get('.inventory_item_name').each((item) => cy.log(item.text));

    cy.get("[id*='add-to-cart']").each((item) => item.click());

    cy.get('#react-burger-menu-btn').click();
  });
});
