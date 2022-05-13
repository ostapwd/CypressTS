import users from "../data/users"
import {LoginTS} from "../pom/login_pageTS"
import {ProductsTS} from "../pom/products_page"
import {CheckCart} from "../pom/check_products_cart"


describe('Login', ()=>{
    it('test POM model', ()=>{
        const loginTS = new LoginTS()
        loginTS.open()
        loginTS.loginToTheApp(users.correct_login)
    })
    it('Add products to the product cart',()=>{
        cy.wait(2000)
        const products = new ProductsTS()
        products.addAllProducts()
    })

    it('Check products cart', ()=>{
        cy.wait(2000)
        const checkingCart = new CheckCart()
        checkingCart.chekAddedProducts()
    })
})