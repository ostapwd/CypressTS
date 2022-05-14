
import users from "../data/users";

import {LoginPageTs} from "../support/pages/loginPageTS-practice";

//import {ProductPageTs} from "./support/pages/productPageTS-practice";


describe ("Test suite 1 for login (possitive)", function () {

    it("Test 1 (possitive)", function () {
        
        const loginPageTypeScript = new LoginPageTs();

        new LoginPageTs().open()
        .loginToTheApp(users.standardUser)
       .productsLabel.should("contain", "Products");
        
    });


    it("Test 2 (possitive)", function () {
        new LoginPageTs().open()
        .loginToTheApp(users.standardUser)
        .productsLabel.should("contain", "Products");
    });



describe ("Test suite for login (negative)", function () {

    it("Test 3 (negative)", function () {
        new LoginPageTs().open()
        .loginToTheApp(users.wrongPasswordUser)
        new LoginPageTs().wrongPassword().should("contain", "Epic sadface: Username and password do not match any user in this service");
    });


    it("Test 4 (negative without password)", function () {

        new LoginPageTs().open()
       .usernameInput().type('standard_user')
        new LoginPageTs().loginButton().click()
        new LoginPageTs().wrongPassword().should("contain", "Epic sadface: Password is required");
    });
   

    })
})

