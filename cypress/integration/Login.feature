Feature: Test login functionality

  @smoke
  Scenario: Verify user can login to the app by clicking the Login button
    Given Login page is open
    When They input standardUser credentials
    And Click on Login button
    Then Inventory page is displayed

  @smoke
  Scenario: Verify user can login to the app by pressing the Enter key
    Given Login page is open
    When They input standardUser credentials
    And Press the Enter key in the password field
    Then Inventory page is displayed

  @smoke
  Scenario: Show error message on attempt to login with empty username
    Given Login page is open
    When They provide password password
    And Click on Login button
    Then An error message should appear Epic sadface: Username is required

  @smoke
  Scenario: Show error message on attempt to login with empty password
    Given Login page is open
    When They provide login user1
    And Click on Login button
    Then An error message should appear Epic sadface: Password is required

  @smoke
  Scenario: Show error message on attempt to login locked user
    Given Login page is open
    When They input lockedOutUser credentials
    And Click on Login button
    Then An error message should appear Epic sadface: Sorry, this user has been locked out.