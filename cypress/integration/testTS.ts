import loginPageTS from "../support/pages/loginPageTS";
import productPageTS from "../support/pages/productPageTS";
import purchasePageTS from "../support/pages/purchasePageTS";
import users from "../data/users";
import names from "../data/names";


describe("Check users in authentication", () => {
    beforeEach(() => {
        loginPageTS.open();
    });
    it("Test 1: Check users with correct data", () => {
        loginPageTS.loginToTheApp(users.standardUser);

    });
    it("Test 2: Check users with uncorrect data (locked)", () => {
        loginPageTS.loginToTheApp(users.lockedOutUser);

    });
    it("Test 3: Check users, which has problem", () => {
        loginPageTS.loginToTheApp(users.problemUser);

    });
    it("Test 4: Check users, which data is correct but has problem with performance", () => {
        loginPageTS.loginToTheApp(users.performanceGlitchUser);

    });
})

describe("Add some/all poducts. Check number of products. Remove them", () => {
    beforeEach(() => {
        loginPageTS.open();
    });
    it("Test 1: Check users with correct data", () => {
        loginPageTS.loginToTheApp(users.standardUser);

    });
    it("Test 2: Check users, which has problem", () => {
        loginPageTS.loginToTheApp(users.problemUser);

    });
    it("Test 3: Check users, which data is correct but has problem with performance", () => {
        loginPageTS.loginToTheApp(users.performanceGlitchUser);

    });
    afterEach(() => {
        productPageTS.verityfyThatNamberExist()
            .selectedSomeOF()
            .verifyThatNumberOfSelectedProductsEqualsTo(3)
            .removeToChartAllProducts()
            .verityfyThatNamberExist()
    })
})

describe("Open menu and choose: All Items/ Reset Items/ Log Out/ Reset app state", () => {
    beforeEach(() => {
        loginPageTS.open();
    });
    it("Test 1: Check users with correct data", () => {
        loginPageTS.loginToTheApp(users.standardUser);

    });
    it("Test 2: Check users, which has problem", () => {
        loginPageTS.loginToTheApp(users.problemUser);

    });
    it("Test 3: Check users, which data is correct but has problem with performance", () => {
        loginPageTS.loginToTheApp(users.performanceGlitchUser);

    });
    afterEach(() => {
        productPageTS.openMenu()
            .openAllItemsInMenu()
            .resetSidebarLinks()
            .logOutOf()
    })
})

describe("Check work icons of sotialmedia. Click on logo. Open menu and choose: About", () => {
    beforeEach(() => {
        loginPageTS.open();
    });
    it("Test 1: Check users with correct data", () => {
        loginPageTS.loginToTheApp(users.standardUser);

    });
    it("Test 2: Check users, which has problem", () => {
        loginPageTS.loginToTheApp(users.problemUser);

    });
    it("Test 3: Check users, which data is correct but has problem with performance", () => {
        loginPageTS.loginToTheApp(users.performanceGlitchUser);

    });
    afterEach(() => {
        productPageTS.checkSotialIcons()
            .openMenu()
            .openAbout()
    })
})
describe("Check work select and sorting", () => {
    beforeEach(() => {
        loginPageTS.open();
    });
    it("Test 1: Check users with correct data", () => {
        loginPageTS.loginToTheApp(users.standardUser);

    });
    it("Test 2: Check users, which has problem", () => {
        loginPageTS.loginToTheApp(users.problemUser);

    });
    it("Test 3: Check users, which data is correct but has problem with performance", () => {
        loginPageTS.loginToTheApp(users.performanceGlitchUser);

    });
    afterEach(() => {
        productPageTS.useSelectorForItems()
    })
})
describe("Check different input values in 'Your information'", () => {
    beforeEach(() => {
        loginPageTS.open();
    });
    it("Test 1: Check users with correct data", () => {
        loginPageTS.loginToTheApp(users.standardUser);

    });
    it("Test 2: Check users, which has problem", () => {
        loginPageTS.loginToTheApp(users.problemUser);

    });
    it("Test 3: Check users, which data is correct but has problem with performance", () => {
        loginPageTS.loginToTheApp(users.performanceGlitchUser);

    });
    afterEach(() => {
        productPageTS.addToChartAllProducts()
            .makePurchase()
        purchasePageTS.continueBuy(names.first)
            .getAllPrise()
            .finish()
        productPageTS.addToChartAllProducts()
            .makePurchase()
        purchasePageTS.continueBuy(names.second)
            .getAllPrise()
            .finish()
        productPageTS.addToChartAllProducts()
            .makePurchase()
        purchasePageTS.continueBuy(names.third)
            .getAllPrise()
            .finish()
        productPageTS.addToChartAllProducts()
            .makePurchase()
        purchasePageTS.continueBuy(names.fourth)
            .getAllPrise()
            .finish()
    })
})

describe("Make purchase", () => {
    beforeEach(() => {
        loginPageTS.open();
    });
    it("Test 1: Check users with correct data", () => {
        loginPageTS.loginToTheApp(users.standardUser);

    });
    it("Test 2: Check users, which has problem", () => {
        loginPageTS.loginToTheApp(users.problemUser);

    });
    it("Test 3: Check users, which data is correct but has problem with performance", () => {
        loginPageTS.loginToTheApp(users.performanceGlitchUser);

    });
    afterEach(() => {
        productPageTS.addToChartAllProducts()
            .makePurchase()
            .deselectedSomeOF()
        productPageTS.verifyThatNumberOfSelectedProductsEqualsTo(3)
        purchasePageTS.goShoping()
        productPageTS.makePurchase()
        productPageTS.verifyThatNumberOfSelectedProductsEqualsTo(3)
        purchasePageTS.continueBuy(names.first)
            .getAllPrise()
            .finish()

    })
})