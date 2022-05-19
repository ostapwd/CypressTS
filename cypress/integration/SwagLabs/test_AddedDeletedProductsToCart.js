import users from "../../data/users.js";
import { LoginPageSwagLabsTS } from '../../support/pagesSwagLabs/loginPageSwagLabsTS';
import { ProductPageSwagLabsTS } from "../../support/pagesSwagLabs/productPageSwagLabsTS";

const loginPage = new LoginPageSwagLabsTS()
const productsPage = new ProductPageSwagLabsTS();

describe('Test suite added and deleted products to shopping cart', () => {
  
    beforeEach('Opened the application', () => {
        cy.log('Start')
        loginPage.open().loginToTheApp(users.standardUser)
    });

        it('Verify a user added products to shopping cart', () => {
            productsPage
                .logAllProducts()
                .addToCartAllproducts()
                .verifySelectedProductsNumber()
        });

        it('Verify a user deleted products from shopping cart', () => {
            productsPage
                .logAllProducts()
                .addToCartAllproducts()
                .verifySelectedProductsNumber()
                .deleteFromCartAllproducts()
                .verifySelectedProductsNumberHidden()
        });
        
    afterEach(() => {
        cy.log('Finish')
    });
});
