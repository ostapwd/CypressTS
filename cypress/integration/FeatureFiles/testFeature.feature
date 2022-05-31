Feature: Test aplication

    The Feature contains a set of scenarios to the application

    Scenario: Verify a user can add products to the cart
        Given A new user navigates to the app
        When Theq provide correct credentials
        And They add all products to the cart
        Then All products should be in the cart