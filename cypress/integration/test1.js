describe('Test suite', function () {
  it('Test1', function () {
    cy.visit('https://www.saucedemo.com/');
    //cy.wait(2000);

    //cy.get('form > div').click();

    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');

    cy.get('#login-button').click();
    cy.get('#header_container .title').then((el) => cy.log(el.text()));

    cy.get('#header_container .title').should('contain', 'Products');
    cy.contains('Add to cart').click();

    cy.get('.inventory_item_name').each((item) => cy.log(item.text));

    cy.get("[id*='add-to-cart']").each((item) => item.click());

    cy.get('#react-burger-menu-btn').click();
  });
});

describe('Test suite for login', function () {
  before(function () {
    cy.log('Main before');
  });

  describe('Test suite for login (positive)', function () {
    it('Test1 (positive login)', function () {
      cy.visit('https://www.saucedemo.com/');

      cy.get('#user-name').type('standard_user');

      cy.get('#password').type('secret_sauce');

      cy.get('#login-button').click();

      cy.get('span.title').should('contain', 'Products');
    });

    it('Test2 positive login', function () {
      cy.visit('https://www.saucedemo.com/');

      cy.get('#user-name').type('standard_user');

      cy.get('#password').type('secret_sauce');

      cy.get('#login-button').click();

      cy.get('span.title').should('contain', 'Products');
    });
  });

  describe('Test suite for login (negative)', function () {
    it('Test 3 (negative login)', function () {
      cy.visit('https://www.saucedemo.com/');

      cy.get('#user-name').type('standard_user');

      cy.get('#password').type('secret_sauce111');

      cy.get('#login-button').click();

      cy.get("h3[data-test = 'error']").should(
        'contain',
        'Epic sadface: Username and password do not match any user in this service'
      );
    });
  });

  after(function () {
    cy.log('Main after');
  });
});
