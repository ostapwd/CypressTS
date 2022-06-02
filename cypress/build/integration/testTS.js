"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var loginPageTS_1 = __importDefault(require("../support/pages/loginPageTS"));
var productPageTS_1 = __importDefault(require("../support/pages/productPageTS"));
var purchasePageTS_1 = __importDefault(require("../support/pages/purchasePageTS"));
var users_1 = __importDefault(require("../data/users"));
var names_1 = __importDefault(require("../data/names"));
describe("Check users in authentication", function () {
    beforeEach(function () {
        loginPageTS_1.default.open();
    });
    it("Test 1: Check users with correct data", function () {
        loginPageTS_1.default.loginToTheApp(users_1.default.standardUser);
    });
    it("Test 2: Check users with uncorrect data (locked)", function () {
        loginPageTS_1.default.loginToTheApp(users_1.default.lockedOutUser);
    });
    it("Test 3: Check users, which has problem", function () {
        loginPageTS_1.default.loginToTheApp(users_1.default.problemUser);
    });
    it("Test 4: Check users, which data is correct but has problem with performance", function () {
        loginPageTS_1.default.loginToTheApp(users_1.default.performanceGlitchUser);
    });
});
describe("Add some/all poducts. Check number of products. Remove them", function () {
    beforeEach(function () {
        loginPageTS_1.default.open();
    });
    it("Test 1: Check users with correct data", function () {
        loginPageTS_1.default.loginToTheApp(users_1.default.standardUser);
    });
    it("Test 2: Check users, which has problem", function () {
        loginPageTS_1.default.loginToTheApp(users_1.default.problemUser);
    });
    it("Test 3: Check users, which data is correct but has problem with performance", function () {
        loginPageTS_1.default.loginToTheApp(users_1.default.performanceGlitchUser);
    });
    afterEach(function () {
        productPageTS_1.default.verityfyThatNamberExist()
            .selectedSomeOF()
            .verifyThatNumberOfSelectedProductsEqualsTo(3)
            .removeToChartAllProducts()
            .verityfyThatNamberExist();
    });
});
describe("Open menu and choose: All Items/ Reset Items/ Log Out/ Reset app state", function () {
    beforeEach(function () {
        loginPageTS_1.default.open();
    });
    it("Test 1: Check users with correct data", function () {
        loginPageTS_1.default.loginToTheApp(users_1.default.standardUser);
    });
    it("Test 2: Check users, which has problem", function () {
        loginPageTS_1.default.loginToTheApp(users_1.default.problemUser);
    });
    it("Test 3: Check users, which data is correct but has problem with performance", function () {
        loginPageTS_1.default.loginToTheApp(users_1.default.performanceGlitchUser);
    });
    afterEach(function () {
        productPageTS_1.default.openMenu()
            .openAllItemsInMenu()
            .resetSidebarLinks()
            .logOutOf();
    });
});
describe("Check work icons of sotialmedia. Click on logo. Open menu and choose: About", function () {
    beforeEach(function () {
        loginPageTS_1.default.open();
    });
    it("Test 1: Check users with correct data", function () {
        loginPageTS_1.default.loginToTheApp(users_1.default.standardUser);
    });
    it("Test 2: Check users, which has problem", function () {
        loginPageTS_1.default.loginToTheApp(users_1.default.problemUser);
    });
    it("Test 3: Check users, which data is correct but has problem with performance", function () {
        loginPageTS_1.default.loginToTheApp(users_1.default.performanceGlitchUser);
    });
    afterEach(function () {
        productPageTS_1.default.checkSotialIcons()
            .openMenu()
            .openAbout();
    });
});
describe("Check work select and sorting", function () {
    beforeEach(function () {
        loginPageTS_1.default.open();
    });
    it("Test 1: Check users with correct data", function () {
        loginPageTS_1.default.loginToTheApp(users_1.default.standardUser);
    });
    it("Test 2: Check users, which has problem", function () {
        loginPageTS_1.default.loginToTheApp(users_1.default.problemUser);
    });
    it("Test 3: Check users, which data is correct but has problem with performance", function () {
        loginPageTS_1.default.loginToTheApp(users_1.default.performanceGlitchUser);
    });
    afterEach(function () {
        productPageTS_1.default.useSelectorForItems();
    });
});
describe("Check different input values in 'Your information'", function () {
    beforeEach(function () {
        loginPageTS_1.default.open();
    });
    it("Test 1: Check users with correct data", function () {
        loginPageTS_1.default.loginToTheApp(users_1.default.standardUser);
    });
    it("Test 2: Check users, which has problem", function () {
        loginPageTS_1.default.loginToTheApp(users_1.default.problemUser);
    });
    it("Test 3: Check users, which data is correct but has problem with performance", function () {
        loginPageTS_1.default.loginToTheApp(users_1.default.performanceGlitchUser);
    });
    afterEach(function () {
        productPageTS_1.default.addToChartAllProducts()
            .makePurchase();
        purchasePageTS_1.default.continueBuy(names_1.default.first)
            .getAllPrise()
            .finish();
        productPageTS_1.default.addToChartAllProducts()
            .makePurchase();
        purchasePageTS_1.default.continueBuy(names_1.default.second)
            .getAllPrise()
            .finish();
        productPageTS_1.default.addToChartAllProducts()
            .makePurchase();
        purchasePageTS_1.default.continueBuy(names_1.default.third)
            .getAllPrise()
            .finish();
        productPageTS_1.default.addToChartAllProducts()
            .makePurchase();
        purchasePageTS_1.default.continueBuy(names_1.default.fourth)
            .getAllPrise()
            .finish();
    });
});
describe("Make purchase", function () {
    beforeEach(function () {
        loginPageTS_1.default.open();
    });
    it("Test 1: Check users with correct data", function () {
        loginPageTS_1.default.loginToTheApp(users_1.default.standardUser);
    });
    it("Test 2: Check users, which has problem", function () {
        loginPageTS_1.default.loginToTheApp(users_1.default.problemUser);
    });
    it("Test 3: Check users, which data is correct but has problem with performance", function () {
        loginPageTS_1.default.loginToTheApp(users_1.default.performanceGlitchUser);
    });
    afterEach(function () {
        productPageTS_1.default.addToChartAllProducts()
            .makePurchase()
            .deselectedSomeOF();
        productPageTS_1.default.verifyThatNumberOfSelectedProductsEqualsTo(3);
        purchasePageTS_1.default.goShoping();
        productPageTS_1.default.makePurchase();
        productPageTS_1.default.verifyThatNumberOfSelectedProductsEqualsTo(3);
        purchasePageTS_1.default.continueBuy(names_1.default.first)
            .getAllPrise()
            .finish();
    });
});
