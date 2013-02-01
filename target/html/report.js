$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("\u0027target/generated-test-sources/cucumber/3.feature\u0027");
formatter.feature({
  "id": "common-operation",
  "description": "",
  "name": "common operation",
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
  "id": "common-operation;good-addition",
  "tags": [
    {
      "name": "@OPEN",
      "line": 8
    },
    {
      "name": "@CALC-5",
      "line": 8
    }
  ],
  "description": "",
  "name": "good addition",
  "keyword": "Scenario",
  "line": 9,
  "type": "scenario"
});
formatter.step({
  "name": "a calculator",
  "keyword": "Given ",
  "line": 10
});
formatter.step({
  "name": "I have the number 23 and 45",
  "keyword": "When ",
  "line": 11
});
formatter.step({
  "name": "I want to display the addition",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "The result should 68",
  "keyword": "Then ",
  "line": 13
});
formatter.match({
  "location": "CommonCalcFeature.a_calculator()"
});
formatter.result({
  "duration": 192399000,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
});