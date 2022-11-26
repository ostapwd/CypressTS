
describe('Parabank test suit  1', () => {
    beforeEach(()=>{
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
    })
    it('Verify user can register', () => {
               
        cy.contains('Register').click();
        cy.get(".title").should('contain','Signing up is easy!')
        cy.get("[name='customer.firstName']").type('customer')
        cy.get('[name="customer.lastName"]').type('customer')
        cy.get('[name="customer.address.street"]').type('customer')
        cy.get('[name="customer.address.city"]').type('R')
        cy.get('[name="customer.address.state"]').type('R')
        cy.get('[name="customer.address.zipCode"]').type(3)
        cy.get('[name="customer.phoneNumber"]').type(333)
        cy.get('[name="customer.ssn"]').type(33)
       
        cy.get('[name="customer.username"]').type('vasia')
        cy.get('[name="customer.password"]').type('xxl')
        cy.get('[name="repeatedPassword"]').type('xxl')
        cy.get('[value="Register"]').click();
        //cy.get('.error').should('have.text','This username already exists.')
        
    });
    it.only('Verify user can log in', ()=>{
        cy.get('[name="username"]').type('vasia')
        cy.get('[name="password"]').type('xxl')
        cy.get('[value="Log In"]').click();

    })
});