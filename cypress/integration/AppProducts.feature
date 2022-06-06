
Feature: test Application Swaglabs. The feature contains the set of testing scenarios to Swaglabs-Application

@smoke
    Scenario Outline: Verify that a user can login to the app
        Given Existing user navigates to the app
        When They provide login <login>
        And They provide password <password>
        And Click on Login button
        Then They must bee confident that they are in the correct page <message>
        Examples:
            | login         | password     | message  |
            | standard_user | secret_sauce | Products |

@smoke
    Scenario Outline: Verify that a user can't login to the app
        Given Existing user navigates to the app
        When They provide login <login>
        And They provide password <password>
        And Click on Login button
        Then They must bee confident that they are in the correct page <errorMessage>
        Examples:
            | login         | password     | errorMessage |
            | standard_user | secret_sauce | Products     |

@smoke
    Scenario: Verify that a user can add products to a cart
        Given Existing user navigates to the app
        When They provide correct credentials
        When They add all products to the cart
        When They click on the cart container
        Then All products should be in the cart

@smoke
    Scenario: Verify that a user can add all products to the cart and delete one item
        Given Existing user navigates to the app
        When They provide correct credentials
        When They add all one products to the cart
        When They click on the cart container
        When They click on the cart container the page must contain a text
        When They remove one product from the container
        When They click on the button continue shopping
        Then The page contain a text

@smoke
    Scenario: Verify that a user can select Price (low to high) and chack it praces
        Given Existing user navigates to the app
        When They provide correct credentials
        And They select Price (low to high)
        Then The price of the items is selected right



