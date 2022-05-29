import users from "../../data/SwagLabs/users";
import { LoginPageSwagLabsTS } from '../../support/pagesSwagLabs/loginPageSwagLabsTS';
import { ProductPageSwagLabsTS } from "../../support/pagesSwagLabs/productPageSwagLabsTS";

const loginPage = new LoginPageSwagLabsTS()
const productsPage = new ProductPageSwagLabsTS();

describe('Test suite added and deleted products to shopping cart', () => {
  
    beforeEach('Login to the App', () => {
        cy.log('Start')
        loginPage.open().loginToTheApp(users.standardUser).clickOnButtonLogin()
    });

        it('Verify a user added products to shopping cart', () => {
            productsPage
                .addToCartAllproducts()
                .getLogAllProducts().each(item => {
                    cy.log(item.text())
                });
            productsPage
                .getQuantityProductsInCart().then( element => {
                    expect(element.text()).to.be.equal('6');
                }); 
        });

        it('Verify a user deleted products from shopping cart', () => {
            productsPage
                .getLogAllProducts().each(item => {
                    cy.log(item.text())
                });
            productsPage
                .addToCartAllproducts()
                .getQuantityProductsInCart().then( element => {
                    expect(element.text()).to.be.equal('6');
                });
            productsPage 
                .deleteFromCartAllproducts()
                .getQuantityProductsInEmptyCart().then( element => {
                    expect(element.text()).to.be.equal('');
                }); 
        });
        
    afterEach('Logout of the App', () => {
        productsPage
            .waitForSeconds(1)
            .logoutOfTheApp()
    })
});
