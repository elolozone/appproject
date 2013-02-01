Feature: common operation
    

      Background:
    

  
  @OPEN @CALC-5     
  Scenario: good addition 
    Given a calculator
    When I have the number 23 and 45
    And I want to display the addition
    Then The result should 68
  
