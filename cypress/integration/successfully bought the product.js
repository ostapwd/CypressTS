import loginPage from "../support/pages/loginPage";
import registrationPage from "../support/pages/registrationPage";



describe(" Log in", function(){
    it("google", function(){
        loginPage.open()
        loginPage.loginUser('standard_user','secret_sauce')
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.wait(1000)
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()
        registrationPage.registrationUser('Paraniak','Nataliia','79491')
        cy.wait(1000)
        cy.get('#continue').click()
        cy.wait(1000)
        cy.get('#finish').click()
    });
    it("choose the two cheapest products", function(){
        loginPage.open()
        loginPage.loginUser('standard_user','secret_sauce')
        cy.get('.product_sort_container').select('Price (low to high)')
        cy.get('#add-to-cart-sauce-labs-onesie').click()
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()
        registrationPage.registrationUser('Paraniak','Nataliia','79491')
        cy.wait(1000)
        cy.get('#continue').click()
        cy.wait(1000)
        cy.get('#finish').click()
});
})