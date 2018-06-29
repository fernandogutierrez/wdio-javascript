Feature: User can login to site page

  Scenario: Login page
    Given I am on login page for site 'botnet01'
    When I insert credentials
    And I press on login
    Then I am able to see home page of site