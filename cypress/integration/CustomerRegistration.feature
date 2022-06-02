Feature: Customer registration form

  @smoke
  Scenario: A customer can register himself on the site
    Given A customer navigates to the registration page
    When They provide correct registration details
    Then New customer is successfully registered

  @smoke
  Scenario: A customer can register himself on the site
    Given A customer navigates to the registration page
    When They provide incorrect registration details
    Then Customer recieve error message

  @smoke
  Scenario: A customer cannot register himself on the site twice
    Given A customer navigates to the registration page
    When They provide correct registration details
    And They go to the registration page again
    And They provide correct registration details
    Then Customer recieve error message that such username already exists
