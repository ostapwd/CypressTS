import loginPage from "../support/pages/loginPage-practice";
import users from "../data/users";

describe ("Test suite 1", function () {

    before(function () {
    cy.log("Main before");
});

    beforeEach(function () {
        cy.log("before each");
        loginPage.open();
       
    });

describe ("Test suite for login (possitive)", function () {

    before(function () {
        cy.log("Internal before");
    });

    beforeEach(function () {
        cy.log("before each");
    })

    it("Test 1 (possitive)", function () {
        loginPage.loginToTheApp(users.standardUser);
        cy.get("div .title").should("contain", "Products");
    });



    it("Test 2 (possitive)", function () {
        loginPage.loginToTheApp(users.standardUser);
        cy.get("div .title").should("contain", "Products");
    });


    afterEach(function () {
        cy.log("after Each");
    });

    after(function () {
        cy.log("Internal after");

    });


    })
describe ("Test suite for login (negative)", function () {

    it("Test 3 (negative)", function () {
  
        loginPage.loginToTheApp(users.wrongPasswordUser);
        cy.get("h3[data-test='error']").should("contain", "Epic sadface: Username and password do not match any user in this service");
    });


    it("Test 4 (negative without password)", function () {

        loginPage.usernameInput.type('standard_user');
        loginPage.loginButton.click();
        cy.get("h3[data-test='error']").should("contain", "Epic sadface: Password is required");
    });
    afterEach(function () {
        cy.log("after Each");
    });

    after(function () {
        cy.log("Main after");
    })

    })
})

