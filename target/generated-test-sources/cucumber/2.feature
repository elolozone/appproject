Feature: Connection to the system
    

      Background:
    

  
  @OPEN @DEMO-1     
  Scenario: correct login 
    Given a user "Laurent Meurisse"
    And his login is "lmeurisse" and Password "coucou"
    When he wants to be connected with this login "lmeurisse" and password "coucou"
    Then the system authorize him
  

  @ORPHAN     
  Scenario: to login error 
    Given a user "Laurent Meurisse"
    And his login is "lmeurisse" and Password "coucou"
    When he wants to be connected with this login "lmeurisse" and password "coucoux"
    Then the system display the password fail
  

  @ORPHAN     
  Scenario: Password fail three times  
    Given a user "Laurent Meurisse"
    And his login is "lmeurisse" and Password "coucou"
    When he wants to be connected with this login "lmeurisse" and password "coucoux"
    Then the system display the password fail
    When he wants to be connected with this login "lmeurisse" and password "coucoux"
    Then the system display the password fail
    When he wants to be connected with this login "lmeurisse" and password "coucoux"
    Then the system display that the account is locked
    When he wants to be connected with this login "lmeurisse" and password "coucou"
    Then the system display that the account is locked
  

  @ORPHAN     
  Scenario: password fail 2x but good after 
    Given a user "Laurent Meurisse"
    And his login is "lmeurisse" and Password "coucou"
    When he wants to be connected with this login "lmeurisse" and password "coucoux"
    Then the system display the password fail
    When he wants to be connected with this login "lmeurisse" and password "coucoux"
    Then the system display the password fail
    When he wants to be connected with this login "lmeurisse" and password "coucou"
    Then the system authorize him
  

  @ORPHAN     
  Scenario: password fail 2x , good after, and fail 2x again , good after 
    Given a user "Laurent Meurisse"
    And his login is "lmeurisse" and Password "coucou"
    When he wants to be connected with this login "lmeurisse" and password "coucoux"
    Then the system display the password fail
    When he wants to be connected with this login "lmeurisse" and password "coucoux"
    Then the system display the password fail
    When he wants to be connected with this login "lmeurisse" and password "coucou"
    Then the system authorize him
    When he wants to be connected with this login "lmeurisse" and password "coucoux"
    Then the system display the password fail
    When he wants to be connected with this login "lmeurisse" and password "coucoux"
    Then the system display the password fail
    When he wants to be connected with this login "lmeurisse" and password "coucou"
    Then the system authorize him
  
