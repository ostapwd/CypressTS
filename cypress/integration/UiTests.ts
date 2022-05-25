import users from "../data/users";
import {LoginPage} from "../support/pages/loginPage";

describe('Login to the application', () => {
    let inventoryPage;
    beforeEach(() => {
        inventoryPage = new LoginPage().open().loginToTheApp(users.standardUser);
    });

    it('Verify a user can login to the application', () => {
        inventoryPage.waitForPageToBeLoaded().productsLabel().then(label => {
            expect(label.text()).to.be.equal("Products");
        });
    });

    it('Verify a user can add products to cart', () => {
        inventoryPage.waitForPageToBeLoaded().addToCartAllProducts().cartNumberLabel().then(label => {
            expect(label.text()).to.be.equal("5");
        });
    });

    it('Verify a user can logout form the app', () => {
        inventoryPage.waitForPageToBeLoaded().menu().logout();
        new LoginPage().waitForPageToBeLoaded().loginPageLogoLabel().should("be.visible");
    });
});

describe('Login functionality', function() {
    const tests = [
        {args: ["login1", "Password1"], expected: "Epic sadface: Username and password do not match any user in this service"},
        {args: ["login2", "Password2"], expected: "Epic sadface: Username and password do not match any user in this service"}
    ];

    tests.forEach(({args, expected}) => {
        it(`Test Login functionality for many users`, function() {
            new LoginPage().open().loginToTheAppWithCreds(args[0], args[1]);

            let page = new LoginPage();
            page.loginErrorMessage().then(element => {
                expect(element.text()).to.be.equal(expected);
            })
        });
    });
});


it.skip('Verify a user can login to the app', () => {
    cy.visit("https://www.saucedemo.com/");

    cy.get("#user-name").clear().type("standard_user");
    cy.get("#password").clear().type("secret_sauce");
    cy.xpath(".//*[@id = 'login-button']").click();

    cy.get(".app_logo").should("be.visible");
});

it.skip('Verify a user can login to the app', () => {
    let user = {
        username: "standard_user",
        password: "secret_sauce"
    }

    new LoginPage().open()
        .loginToTheApp(user)
        .inventoryPageLogoLabel().should("be.visible");
});

it.skip('Verify a user can login to the app', () => {
    new LoginPage().open()
        .loginToTheApp(users.standardUser)
        .inventoryPageLogoLabel().should("be.visible");
});