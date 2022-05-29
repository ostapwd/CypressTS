import users from "../data/users"
import {SauceDemoLoginPage} from "../pages/sauceDemoLoginPage"
import {BasePage} from "../pages/basePage"
import {ProductsPage} from "../pages/sauceDemoProductsPage"
import {ProductsCart} from "../pages/sauceDemoProductsCart"
import {CheckoutForm} from "../pages/sauceDemoCheckoutForm"



const log = new SauceDemoLoginPage()
const waitSeconds = new BasePage()
const productsPage = new ProductsPage()
const productsCart = new ProductsCart()
const checkoutForm = new CheckoutForm()



describe('Test suite for SauceDemo application', ()=>{
    before('login to the app', ()=>{
        log.open()
    })
    
    it('Login to the products page',()=>{
        log.fillRegistrationForm(users.standard_user)
        waitSeconds.waiter(1)
        productsPage.checkProductsTitle().should('contain', 'Products')
    })

    it('Add products to the products cart and checkout it', ()=>{
        productsPage.clickOnTheButtonAddToTheCart()
        waitSeconds.waiter(1)
        productsPage.clickOnTheButtonProductCart()
        log.open()
        .fillRegistrationForm(users.standard_user)
        waitSeconds.waiter(1)
        productsPage.clickOnTheButtonProductCart()
        productsCart.checkTitleText().should('contain', 'Your Cart')
        productsCart.checkInventoryItemName()
        .should('contain', 'Sauce Labs Backpack')
        .and('contain', '$29.99')
        productsCart.clickCheckoutButton()
        checkoutForm.getCheckoutTitle().should('contain', 'Checkout: Your Information')
        checkoutForm.fillCheckoutForm(users.checkout_data)
        
    })
    
    it('Checkout Overview', ()=>{
        checkoutForm.getCheckoutTitle().should('contain', 'Checkout: Overview')
        checkoutForm.checkSummuryInfo()
        .should('contain', 'SauceCard #31337')
        .and('contain', 'FREE PONY EXPRESS DELIVERY!')
        .and('contain', 'Item total: $29.99')
        .and('contain', 'Tax: $2.40')
        .and('contain', 'Total: $32.39')
        checkoutForm.clickFinishButton()
    })
  
})