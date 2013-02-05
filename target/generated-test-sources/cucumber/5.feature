@CALC-11
Feature: Common Operations
     As Josette a student, I want give numbers to the system so that I can have result of many operations like +,-,/,*

      Background:
    

  
  @OPEN @CALC-12     
  Scenario: enter to positive numbers and get the addition 
    Given a calculator
    When I enter the number 34
    And I enter the number 98
    Then the result is 132
  

  @OPEN @CALC-12     
  Scenario: enter to negative numbers and get the addition 
    Given a calculator
    When I enter the number -34
    And I enter the number -98
    Then the result is -132
  
