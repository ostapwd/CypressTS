describe('Test suite 4', function () {
    it.only('', function () {
        cy.setCookie("JSESSIONID", "6349B4A579427A0CABF37ED8A2A26A65")
        cy.visit("https://parabank.parasoft.com/parabank");
        cy.setCookie("JSESSIONID", "6349B4A579427A0CABF37ED8A2A26A65")
    });
});