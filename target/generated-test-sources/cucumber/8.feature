Feature: As a student I need a calculator to calculate *,+,-,/  
    

      Background:
    

  
  @WIP @CALC-16     
  Scenario Outline: add two numbers 
    Given a calculator 
    When I have the number <firstnumber>
    And I have the number <secondnumber>
    And I want to sum them
    Then the result must be <result>
    
    Examples: 
    |firstnumber|secondnumber|result|
    |12         |1           |13    | 
  

  @WIP @CALC-16     
  Scenario: add two negative numbers 
    Given a calculator 
    When I have the number -3
    And I have the number -24
    And I want to sum them
    Then the result must be -27
  

  @WIP @CALC-16     
  Scenario: add two other numbers 
    Given a calculator 
    When I have the number -23
    And I have the number 44
    And I want to sum them
    Then the result must be 21
  
