Feature: Fill registration form
    
  @smoke
    Scenario: Verify a user can navigate the registration form  
        Given new user in system and he navigates to the application 
        When user choose Insurance Project item and click to this item
        Then user navigates to the registration form page


    @smoke
    Scenario: Fill registration form
        Given registration form and verify user
        Then user select title
        And fill general user data
        Then user should fill information about birthday
        And check licence type, licence period, and occupation
        Then user press create button
        And navigates to the Login Page