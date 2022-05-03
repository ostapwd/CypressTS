describe('Test main page', () => {
  it('Test Login Section', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('.login_wrapper-inner')
    .should('exist')
    .should('be.visible');
  })

  it('Test User Login', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });
})
