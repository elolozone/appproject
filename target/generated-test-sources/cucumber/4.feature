Feature: Common operation
    

      Background:
    

  
  @OPEN @CALC-6     
  Scenario: add two numbers 
    Given a calculator 
    When I want add two numbers, the first : 23 , and the second : 45
    Then the result is 68
    Given a calculator 
    When I want add two numbers, the first : -23 , and the second : -45
    Then the result is -68
    Given a calculator 
    When I want add two numbers, the first : -23 , and the second : 0
    Then the result is -23
     
  
