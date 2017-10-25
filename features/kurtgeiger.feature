Feature: Log in
  
  Scenario: log in
    Given I log in to the multi channel app
    When I search for a random product
    Then I should see a list of items