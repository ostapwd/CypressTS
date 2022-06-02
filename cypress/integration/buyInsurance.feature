Feature: Fill registration form
    
  @smoke
    Scenario: Verify that user can navigate the registration form  
        Given Application is open 
        When User chooses Insurance Project item
        And User clicks to the Insurance Project item
        Then User navigates to the registration form page


    @smoke
    Scenario: Fill registration form
        Given Registration form page
        And User selects title
        Then User fills general user data
        And User fills information about birthday
        Then Usert checks licence type, licence period, and occupation
        And User press create button
        Then User navigates into the Login Page

    @smoke
    Scenario: Login into the Broker Insurance WebPage
        Given Registrated user
        And User navigates into the Broker Insurance WebPage
        Then User press Request Quotation Button
        And User navigates into the Request quotation page

    @smoke
        Scenario: Fill quotation form
        Given Request Quotation page
        And User selects Breakdown cover options
        Then User selects Windscreen repair option 
        And User inputs Incidents, Registration, Annual mileage, Estimated value, Parking Location fields
        Then User checks Parking Location
        And User selects Start of policy field
        Then User press Save Quotation button
        And Successfully saved the quotation


