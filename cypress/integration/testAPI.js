
describe ('Test', function(){
    it ('Test', function(){
        cy.setCookie('JSESSIONID', '')
        cy.visit('https://parabank.parasoft.com/parabank')
    })
})