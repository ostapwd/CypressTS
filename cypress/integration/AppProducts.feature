Feature: Add products to the cart

  @smoke
  Scenario: Verify a user can add products to the cart
    Given Existing user navigates to the app
    When They provide correct credentials
    And They add all products to the cart
    Then All products should be in the cart