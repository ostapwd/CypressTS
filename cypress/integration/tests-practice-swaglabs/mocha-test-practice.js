describe ("Test suite for login", function () {

        before(function () {
        cy.log("Main before");
    });

        beforeEach(function () {
        cy.log("Main before each");
        cy.visit("https://www.saucedemo.com/");
        cy.xpath('//*[@id="user-name"]').type('standard_user');
        });

    describe ("Test suite for login (possitive)", function () {

            before(function () {
            cy.log("Main before");
        });


    it("Test 1 (possitive)", function () {
 
       //cy.xpath('//*[@id="user-name"]').type('standard_user');
       cy.get("input[name='password']").type("secret_sauce");
       cy.get("input[data-test='login-button']");
       cy.contains('Login')
       .click();
 
       cy.get("div .title").should("contain", "Products");
    });

    it("Test 2 (possitive)", function () {
 
       
        cy.get("input[name='password']").type("secret_sauce");
        cy.get("input[data-test='login-button']");
        cy.contains('Login')
        .click();
  
        cy.get("span.title").should("contain", "Products");
     });

        afterEach(function () {
        cy.log("after Each");
    });
 
        after(function () {
        cy.log("Internal after");

    });
    });

    describe ("Test suite for login (negative)", function () {

    it("Test 3 (negative)", function () {
      

       cy.get("input[name='password']").type("secret_sauce111");
       cy.get("input[data-test='login-button']");
       cy.contains('Login')
       .click();
 
       cy.get("h3[data-test='error']").should("contain", "Epic sadface: Username and password do not match any user in this service");
    });


    it("Test 4 (negative without password)", function () {
 
        
        cy.get("input[data-test='login-button']");
        cy.contains('Login')
        .click();
  
        cy.get("h3[data-test='error']").should("contain", "Epic sadface: Password is required");
     });
        afterEach(function () {
        cy.log("after Each");
    });
    });

         after(function () {
        cy.log("Main after");
    });

});
