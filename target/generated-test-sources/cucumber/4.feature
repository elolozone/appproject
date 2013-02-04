Feature: Common operation
    

      Background:
    Given un jeu de donnée XXX

  
  @WIP @CALC-6     
  Scenario: add two numbers and the result is good 
    Given a calculator 
    When I want add two numbers, the first : 23 , and the second : 45
    Then the result is 68
  

  @ORPHAN     
  Scenario: add two numbers including one is zero and the result is good  
    Given a calculator 
    When I want add two numbers, the first : 23 , and the second : 0
    Then the result is 23
  
