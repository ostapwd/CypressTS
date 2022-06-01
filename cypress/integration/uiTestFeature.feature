Feature: Fill registration form 
    
  @smoke
    Scenario: Verify a user can navigate the registration form  
        Given user navigate to the application 
        When user login to the application  
        When user add product
        When user go to cart
        When user choose product
        Then user regisatration on the site