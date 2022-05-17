
import { ProductPageTSPractice } from './../../support/pagesMyPractice/productPageTSPractice';
import { LoginPageTSPractice } from './../../support/pagesMyPractice/loginPageTSPractice';
import users from '../../data/users.js';

const loginPage = new LoginPageTSPractice();
const productsPage = new ProductPageTSPractice();

describe('Test suite to test web elements on the products page', () => {
    beforeEach('Opened the Products page', () => {
        cy.log('Start')
        loginPage.open().loginToTheApp(users.standardUser);
    });
        it('Verify the URL of the products page is displayed in the browser address bar', () => {
            productsPage.verifyUrlProductsPage();
        });

        it('Verify a user can login to the aplication', () => {
            productsPage.verifyProductsLabel();
        });

        it('Verify the cart is displayed on the products page', () => {
            productsPage.verifyShoppingCartLabel()
        });
        it.only('Verify the cart is displayed on the products page', () => {
            productsPage.verifyShoppingCartLabel()
        });

    afterEach(() => {
        cy.log('Finish')
    });

    // it('Verify a user can login to the aplication', () => {
    //     productPagePractice.productsLabel.then((element) => {
    //         expect(element.text()).to.equal('Products')
    //     })
    // });

    // it('Verify a user can add all products to the cart', () => {
    //     productPagePractice.addToCartAllproducts().selectedProductsNumber.then((element) => {
    //         expect(element.text()).to.equal('6')
    //     })
    // });

    // it('Verify a user can logout form the app', () => {
    //     productPagePractice.openMenu().waitTime().logoutApp();
    //     loginPagePractice.loginPageLogoLabel.should("be.visible")
    // });
});
