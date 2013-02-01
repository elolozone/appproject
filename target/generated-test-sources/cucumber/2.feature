Feature: Login
    

      Background:
    

  
  @OPEN @CALC-1     
  Scenario: Sucess Login 
    Given a user
    When he loggs with "lmeurisse" password "ekito" 
    Then he access to the home page
  
