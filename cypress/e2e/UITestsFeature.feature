Feature: Set of scenarios to test application
    
    Scenario: verify user can add items to card
        Given Existing user navigates to the app
        When They provide correct credentials
        And They add all products to card
        Then All products should be in card



