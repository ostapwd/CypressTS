Feature: Fill registration form 
    
  @smoke
    Scenario: Verify a user can navigate the registration form  
        Given user navigates to the application 
        When user choose Insurance Project item  
        And click it
        Then user navigates to the registration form page


    @smoke
    Scenario: Fill registration form
        Given registration form
        Then user should select title
        And fill general data
        Then user should fill information about birthday
        And user should check licence type
        And licence period
        Then user should choose occupation
        And press create button
        Then user should navigates to the Login Page 