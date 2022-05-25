import users from "../../data/SwagLabs/users";
import { LoginPageSwagLabsTS } from "../../support/pagesSwagLabs/loginPageSwagLabsTS";
import { ProductPageSwagLabsTS } from "../../support/pagesSwagLabs/productPageSwagLabsTS";

const loginPage = new LoginPageSwagLabsTS();
const productsPage = new ProductPageSwagLabsTS();

describe('Verify the sort drop-down list on the product page', () => {
    beforeEach('Login to the App', () => {
        cy.log('Start')
        loginPage.open().loginToTheApp(users.standardUser);
    });
        it('Verify the sort drop-down list is shown on the screen', () => {
            productsPage
                .selectSortVerify('Name (A to Z)')
        });

        it('Verify the sort drop-down list', () => {
            productsPage
                .selectSortByIndex(3)
                .selectSortLabelVerify()
                .waitForSeconds(2)
                .selectSortVerify('Name (A to Z)')
                .selectSortLabelVerify()
                .waitForSeconds(2)
                .selectSortByIndex(2)
                .waitForSeconds(2)
        });
            
    afterEach('Logout of the App', () => {
        productsPage
            .logoutOfTheApp()
    })
});