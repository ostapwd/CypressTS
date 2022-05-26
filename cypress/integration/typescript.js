import {LoginPageTS} from "../support/pages/loginPageTS"
import {sideMenuPageTS} from "../support/pages/sideMenuPageTS"
import {CartPageTS} from "../support/pages/CartPageTS"
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
    })

    it ('Test case : open About section from side menu', function(){
        new LoginPageTS().open()
        .loginToTheApp(users.standardUser)
        new sideMenuPageTS().openSideMenu().openAbout()
    })

    it('Test case : sort items by name and price', function(){
        new LoginPageTS().open()
        .loginToTheApp(users.standardUser)
        .sortByNamefromAtoZ()
        .sortByNamefromZtoA()
        .sortByPriceFromLowToHigh()
        .sortByPriceFromHightoLow()
    })

    it('Test case : remove all items from cart', function(){
        new LoginPageTS().open()
        .loginToTheApp(users.standardUser)
        .addAllProductsToCart()
        .openCart()
        new CartPageTS()
        .removeAllItemsFromCart()
    })
})

