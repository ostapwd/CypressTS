
describe('Parabank test suit  1', () => {

    let user1 = 'user1';
    beforeEach(()=>{
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
    })
    it('Verify user can register', () => {

        
               
        cy.contains('Register').click();
        cy.get(".title").should('contain','Signing up is easy!')
        cy.get("[name='customer.firstName']").type(user1)
        cy.get('[name="customer.lastName"]').type(user1)
        cy.get('[name="customer.address.street"]').type(user1)
        cy.get('[name="customer.address.city"]').type(user1)
        cy.get('[name="customer.address.state"]').type(user1)
        cy.get('[name="customer.address.zipCode"]').type(user1)
        cy.get('[name="customer.phoneNumber"]').type(user1)
        cy.get('[name="customer.ssn"]').type(user1)
       
        cy.get('[name="customer.username"]').type(user1)
        cy.get('[name="customer.password"]').type(user1)
        cy.get('[name="repeatedPassword"]').type(user1)
        cy.get('[value="Register"]').click();
        //cy.get('#rightPanel p').should('contain', 'Your account was created successfully. You are now logged in.')
        //cy.get('.error').should('have.text','This username already exists.')
        
    });
    it('Verify user can log in', ()=>{
        cy.get('[name="username"]').type(user1)
        cy.get('[name="password"]').type(user1)
        cy.get('[value="Log In"]').click();

    })
});