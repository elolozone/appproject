Feature: Common operation
    

      Background:
    

  
  @WIP @CALC-6     
  Scenario: add two numbers and the result is good 
    Given a calculator 
    When I want add two numbers, the first : 23 , and the second : 45
    Then the result is 68
    Given a calculator 
    When I want add two numbers, the first : -23 , and the second : -45
    Then the result is -68
  

  @ORPHAN     
  Scenario: add three numbers 
    Given a calculator 
    When I want add two numbers, the first : '-23' , the second : -45, and the third : +88
    Then the result is 00
  
