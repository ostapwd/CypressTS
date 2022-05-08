import loginPage from '../pages/loginPage'
import ProductsPage from '../pages/ProductsPage'
import users from './data/users'

describe('Test1', ()=>{
    it('open page',()=>{
        loginPage.open()
        loginPage.loginToTheApp(users.correctLogin)
        ProductsPage.addAllButtons()
        ProductsPage.checkProductCart()
    })
    
})