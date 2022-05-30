import loginPage from "../support/pages/loginPage";
import users from "../data/users";
import names from "../data/names";
import productPage from "../support/pages/productPage";
import purchasePage from "../support/pages/purchasePage";


describe('saucedemo1', function () {
    it('Test 1: main - add some products / check number of products / remove', function () {
        loginPage.open()
                .loginToTheApp(users.standardUser)
                .verityfyThatNamberExist()
                .selectedSomeOF()
                .verifyThatNumberOfSelectedProductsEqualsTo(3)
                .removeToChartAllProducts()
                .verityfyThatNamberExist()
                .allNames()
                .allPrise()
                .wait()
        
    })
    it('Test 2: main - open menu/ All Items/ About/ Reset Items/ Log Out', function () {
        loginPage.open()
                .loginToTheApp(users.standardUser)
                .openAllItems()
                .openAbout()
        loginPage.open()
                .loginToTheApp(users.standardUser)
                .openMenu()
                .resetSidebarLinks()
                .logOutOf()
                .wait()
    })

    it('Test 3: main - check sotial media', function () {
        loginPage.open()
                .loginToTheApp(users.standardUser)
                .checkSotialIcons()
    })
       
    it('Test 4: main - sorting items', function () {
        loginPage.open()
                .loginToTheApp(users.standardUser)
                .useSelectorForItems()
    })
    it('Test 5: main - make purchase ', function () {
        loginPage.open()
                .loginToTheApp(users.standardUser)
                .addToChartAllProducts()
                .makePurchase()
                .deselectedSomeOF()
        productPage.verifyThatNumberOfSelectedProductsEqualsTo(3)
        purchasePage.goShoping()
        productPage.makePurchase()
        productPage.verifyThatNumberOfSelectedProductsEqualsTo(3)
        purchasePage.continueBuy(names.first)       
    })

    it('Test 6: bad pasword', function () {
        loginPage.open()
                .loginToTheApp(users.standardUser);
    })
    it('Test 7: none pasword with press "enter"', function () {
        loginPage.open()
        loginPage.usernameInput.type('standard_user')
        loginPage.passwordInput.type('{enter}')
        productPage.wait();
    })
    it('Test 8: locked user', function () {
        loginPage.open()
                .loginToTheApp(users.lockedOutUser);
    })
    it('Test 9: problem user', function () {
        loginPage.open()
                .loginToTheApp(users.problemUser)
                .verityfyThatNamberExist()
                .selectedSomeOF()
                .verifyThatNumberOfSelectedProductsEqualsTo(3)
                .removeToChartAllProducts()
                .verityfyThatNamberExist()
                .allNames()
                .allPrise()
                .wait()
        
    })
    it('Test 2: main - open menu/ All Items/ About/ Reset Items/ Log Out', function () {
        loginPage.open()
                .loginToTheApp(users.problemUser)
                .openAllItems()
                .openAbout()
        loginPage.open()
                .loginToTheApp(users.problemUser)
                .openMenu()
                .resetSidebarLinks()
                .logOutOf()
                .wait()
    })

    it('Test 3: main - check sotial media', function () {
        loginPage.open()
                .loginToTheApp(users.problemUser)
                .checkSotialIcons()
    })
       
    it('Test 4: main - sorting items', function () {
        loginPage.open()
                .loginToTheApp(users.problemUser)
                .useSelectorForItems()
    })
    it('Test 5: main - make purchase ', function () {
        loginPage.open()
                .loginToTheApp(users.problemUser)
                .addToChartAllProducts()
                .makePurchase()
                .deselectedSomeOF()
        productPage.verifyThatNumberOfSelectedProductsEqualsTo(3)
        purchasePage.goShoping()
        productPage.makePurchase()
        productPage.verifyThatNumberOfSelectedProductsEqualsTo(3)
        purchasePage.continueBuy(names.first)        
    })
    it('Test 7: performance', function () {
        loginPage.open()
                .loginToTheApp(users.performanceGlitchUser);
    })
});


/*
describe('saucedemo2', function () {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });
    it('login with press "enter"', function () {
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce').type('{enter}');
    })
    
});
*/