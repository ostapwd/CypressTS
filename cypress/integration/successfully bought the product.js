import loginPageTs from "../support/pages/loginPageTs"
import registrationPage from "../support/pages/registrationPage";
import users from "../data/users";


describe(" Log in", function(){
    it("buy product", function(){
        loginPageTs.open()
        loginPageTs.loginUser(users.standardUser)
        loginPageTs.addProduct().click()        
        loginPageTs.goToCart().click()
        loginPageTs.checkOut().click()         
        registrationPage.registrationUser('Paraniak','Nataliia','79491')
        registrationPage.toOrder.click()
        registrationPage.finishEnd.click()
    });
    it("choose the cheapest products", function(){
        loginPageTs.open()
        loginPageTs.loginUser(users.standardUser)
        cy.get('.product_sort_container').select('Price (low to high)')
        loginPageTs.addProduct().click() 
        loginPageTs.goToCart().click()
        loginPageTs.checkOut().click() 
        registrationPage.registrationUser('Paraniak','Nataliia','79491')
        registrationPage.toOrder.click()
        registrationPage.finishEnd.click()
});
})