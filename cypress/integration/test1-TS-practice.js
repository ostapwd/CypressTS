
import users from "../data/users";
import {productPagePractice} from "../support/pages/productPage-practice";
import {LoginPageTs} from "../support/pages/loginPageTS-practice";
import {LoginPage} from "../support/pages/loginPage-practice";



describe ("Test suite 1 for login (possitive)", function () {

    it("Test 1 (possitive)", function () {
        

        const loginPageTypeScript = new LoginPageTs();

        new LoginPageTs().open()
        .loginToTheApp(users.standardUser);
       // productPagePractice.productsLabel.should("contain", "Products");
       

        
    });


    it("Test 2 (possitive)", function () {
        new LoginPageTs().open()
        .loginToTheApp(users.standardUser);
      //  productPage.productsLabel.should("contain", "Products");
    });




describe ("Test suite for login (negative)", function () {

    it("Test 3 (negative)", function () {
  
      loginPage.loginToTheApp(users.wrongPasswordUser);
        loginPage.wrongPassword.should("contain", "Epic sadface: Username and password do not match any user in this service");
    });


    it("Test 4 (negative without password)", function () {

        loginPage.usernameInput.type('standard_user');
        loginPage.loginButton.click();
        cy.get("h3[data-test='error']").should("contain", "Epic sadface: Password is required");
    });
   

    })
})

