Feature: Searching for batteries
  As an Argos customer
  In order to buy batteries
  I want to be able to search for information about batteries
  
  Scenario: Argos batteries search
    When I search Argos for "batteries"
    Then I should see some results
