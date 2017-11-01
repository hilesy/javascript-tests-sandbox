Feature: Log in
  
  Scenario: Passing
    Given I log in to the multi channel app
    When I search for boots

  Scenario: Failing
    Given I log in to the multi channel app
    When I search for boots
    Then I should see a list of items


