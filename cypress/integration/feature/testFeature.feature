Feature: test Application Swaglabs
  The feature contains the set of testing scenarios to Swaglabs-Application

  Scenario: Verify that a user can login to the app
    Given Existing user navigates to the app
    When They provide correct credentials
    And Click on Login button
    When They add all products to the cart
    Then All products should be in the cart

#   Scenario Outline: Verify that a user can't login to the app
#     Given Existing user navigates to the app
#     When They provide login <login>
#     And They provide password <password>
#     And Click on Login button
#     Then They must bee confident that they are in the correct page <errorMessage>

#     Examples:
#       | login         | password     | errorMessage |
#       | standard_user | secret_sauce | Products     |