import urlsPagesSwagLabs from "../../data/SwagLabs/urlsPagesSwagLabs";
import users from "../../data/SwagLabs/users";
import { LoginPageSwagLabsTS } from '../../support/pagesSwagLabs/loginPageSwagLabsTS';
import { ProductPageSwagLabsTS } from "../../support/pagesSwagLabs/productPageSwagLabsTS";
import { shoppingCartSwagLabs } from "../../support/pagesSwagLabs/shoppingCartSwagLabsTS";

const loginPage = new LoginPageSwagLabsTS();
const productsPage = new ProductPageSwagLabsTS();
const shoppingCartPage = new shoppingCartSwagLabs();

describe('Test suite to test web elements on the cart page', () => {
    beforeEach('Login to the App', () => {
        cy.log('Start')
        loginPage.open().loginToTheApp(users.standardUser).clickOnButtonLogin()
    });
        it('Verify a user can open to the cart page', () => {
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
                .openShoppingCart()
                .getUrlPage(urlsPagesSwagLabs.shoppingPageUrl)
                .getPageLabel().should('be.visible').then(element => {
                    expect(element.text()).to.be.equal('Your Cart');
                }); 
        });
        
        it('Verify products are displayed on the shopping cart page', () => {
            productsPage
                .addToCartAllproducts()
                .getLogAllProducts().each(item => {
                    cy.log(item.text())
                });
            productsPage
                .getQuantityProductsInCart().then( element => {
                    expect(element.text()).to.be.equal('6');
                }); 
            productsPage
                .openShoppingCart()
                .getUrlPage(urlsPagesSwagLabs.shoppingPageUrl)
                .quantityOfSelectedProductsInCart()
                .logAllProductsInCart()
                .getPageLabel().should('be.visible').then(element => {
                    expect(element.text()).to.be.equal('Your Cart');
                }); 
            shoppingCartPage
                .getCheckoutButton().should('be.visible').should('contain', 'Checkout')
        });
        
    afterEach('Logout of the App', () => {
        productsPage
            .waitForSeconds(1)
            .logoutOfTheApp()
    })
});