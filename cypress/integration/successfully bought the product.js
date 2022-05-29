import loginPage from "../support/pages/loginPage";
import registrationPage from "../support/pages/registrationPage";
import users from "../data/users";


describe(" Log in", function(){
    it("google", function(){
        loginPage.open()
        loginPage.loginUser(users.standardUser)
        loginPage.addToCard.click() ;       
        loginPage.shoppingCard.click()
        loginPage.checkOut.click()         
        registrationPage.registrationUser('Paraniak','Nataliia','79491')
        registrationPage.continueEnd.click()
        registrationPage.finishEnd.click()
        //cy.get('#continue').click()
        //cy.get('#finish').click()
    });
    it("choose the two cheapest products", function(){
        loginPage.open()
        loginPage.loginUser(users.standardUser)

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