import {LoginPageTS} from "../support/pages/SauceDemoPages/loginPageTS"
import {sideMenuPageTS} from "../support/pages/SauceDemoPages/sideMenuPageTS"
import {CartPageTS} from "../support/pages/SauceDemoPages/CartPageTS"
import {checkoutPage} from "../support/pages/SauceDemoPages/checkoutPage"
import users from "../data/users"

describe ('Test suit : testing basic functionality', function(){

    it ('Test case : login positive path', function(){
        new LoginPageTS().open()
        .loginToTheApp(users.standardUser)
        .verifyPageTitle('Products')
    })

    it ('Test case : login negative path', function(){
        new LoginPageTS().open()
        .loginWithWrongCreads(users.wrongPasswordUser)
        .checkErrorMessage('Epic sadface: Username and password do not match any user in this service')
    })

    it ('Test case : add all products to cart', function(){
        new LoginPageTS().open()
        .loginToTheApp(users.standardUser)
        .addAllProductsToCart()
        .verifyProductsNumberInCart("6")
    })

    it ('Test case : log out from side menu', function(){
        new LoginPageTS().open()
        .loginToTheApp(users.standardUser)
        new sideMenuPageTS().openSideMenu().logOut()
        cy.url().should('eq', Cypress.env('UI_URL'))
    })

    it ('Test case : open About section from side menu', function(){
        new LoginPageTS().open()
        .loginToTheApp(users.standardUser)
        new sideMenuPageTS().openSideMenu().openAbout()
        cy.url().should('eq', 'https://saucelabs.com/')
    })

    it ('Test case : sort items by name and price', function(){
        new LoginPageTS().open()
        .loginToTheApp(users.standardUser)
        .filterFromDropdown('Name (A to Z)')
        .filterFromDropdown('Name (Z to A)')
        .filterFromDropdown('Price (low to high)')
        .filterFromDropdown('Price (high to low)')
    })

    it ('Test case : remove all items from cart', function(){
        new LoginPageTS().open()
        .loginToTheApp(users.standardUser)
        .addAllProductsToCart()
        .openCart()
        new CartPageTS()
        .removeAllItemsFromCart()
    })

    it ('Test case : make a purchase', function(){
        new LoginPageTS().open()
        .loginToTheApp(users.standardUser)
        .addAllProductsToCart()
        .openCart()
        new checkoutPage()
        .clickCheckout()
        .clickContinue(users.userForCheckout)
        .clickFinish()
        cy.get(".complete-header").should('have.text', 'THANK YOU FOR YOUR ORDER')
        new checkoutPage().clickBackHome()
    })

})

