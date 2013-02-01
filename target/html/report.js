$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("\u0027target/generated-test-sources/cucumber/2.feature\u0027");
formatter.feature({
  "id": "login",
  "description": "",
  "name": "Login",
  "keyword": "Feature",
  "line": 1
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 4,
  "type": "background"
});
formatter.scenario({
  "id": "login;sucess-login",
  "tags": [
    {
      "name": "@OPEN",
      "line": 8
    },
    {
      "name": "@CALC-1",
      "line": 8
    }
  ],
  "description": "",
  "name": "Sucess Login",
  "keyword": "Scenario",
  "line": 9,
  "type": "scenario"
});
formatter.step({
  "name": "a user",
  "keyword": "Given ",
  "line": 10
});
formatter.step({
  "name": "he loggs with \"lmeurisse\" password \"ekito\"",
  "keyword": "When ",
  "line": 11
});
formatter.step({
  "name": "he access to the home page",
  "keyword": "Then ",
  "line": 12
});
formatter.match({
  "location": "Cool.une_calculatrice()"
});
formatter.result({
  "duration": 144646000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});