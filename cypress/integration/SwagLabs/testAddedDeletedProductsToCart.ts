import users from "../../data/SwagLabs/users";
import { LoginPageSwagLabsTS } from '../../support/pagesSwagLabs/loginPageSwagLabsTS';
import { ProductPageSwagLabsTS } from "../../support/pagesSwagLabs/productPageSwagLabsTS";

const loginPage = new LoginPageSwagLabsTS()
const productsPage = new ProductPageSwagLabsTS();

describe('Test suite added and deleted products to shopping cart', () => {
  
    beforeEach('Login to the App', () => {
        cy.log('Start')
        loginPage.open().loginToTheApp(users.standardUser)
    });

        it('Verify a user added products to shopping cart', () => {
            productsPage
                .logAllProducts()
                .addToCartAllproducts()
                .selectedProductsNumberVerify('6')
        });

        it('Verify a user deleted products from shopping cart', () => {
            productsPage
                .logAllProducts()
                .addToCartAllproducts()
                .selectedProductsNumberVerify('6')
                .deleteFromCartAllproducts()
                .selectedProductsNumberHiddenVerify('')
        });
        
    afterEach('Logout of the App', () => {
        productsPage
            .logoutOfTheApp()
    })
});
