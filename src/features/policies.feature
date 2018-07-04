Feature: User can login to site page

  Scenario: Policies page
    Given I am on home page for site 'botnet01'
    When I go to Policies page
    And I remove 'z1' policy
    Then I am not able to see 'z1' listed inside Policies page
