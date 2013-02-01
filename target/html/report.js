$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("\u0027target/generated-test-sources/cucumber/4.feature\u0027");
formatter.feature({
  "id": "common-operation",
  "description": "",
  "name": "Common operation",
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
  "id": "common-operation;add-two-numbers-and-the-result-is-good",
  "tags": [
    {
      "name": "@WIP",
      "line": 8
    },
    {
      "name": "@CALC-6",
      "line": 8
    }
  ],
  "description": "",
  "name": "add two numbers and the result is good",
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
  "name": "I want add two numbers, the first : 23 , and the second : 45",
  "keyword": "When ",
  "line": 11
});
formatter.step({
  "name": "the result is 68",
  "keyword": "Then ",
  "line": 12
});
formatter.match({
  "location": "CommonCalcFeature.a_calculator()"
});
formatter.result({
  "duration": 122714000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 36
    },
    {
      "val": "45",
      "offset": 58
    }
  ],
  "location": "CommonCalcFeature.I_want_add_two_numbers_the_first_and_the_second_(int,int)"
});
formatter.result({
  "duration": 2487000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "68",
      "offset": 14
    }
  ],
  "location": "CommonCalcFeature.the_result_is(int)"
});
formatter.result({
  "duration": 2567000,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 4,
  "type": "background"
});
formatter.scenario({
  "id": "common-operation;add-two-numbers-including-one-is-zero-and-the-result-is-good",
  "tags": [
    {
      "name": "@ORPHAN",
      "line": 15
    }
  ],
  "description": "",
  "name": "add two numbers including one is zero and the result is good",
  "keyword": "Scenario",
  "line": 16,
  "type": "scenario"
});
formatter.step({
  "name": "a calculator",
  "keyword": "Given ",
  "line": 17
});
formatter.step({
  "name": "I want add two numbers, the first : 23 , and the second : 0",
  "keyword": "When ",
  "line": 18
});
formatter.step({
  "name": "the result is 23",
  "keyword": "Then ",
  "line": 19
});
formatter.match({
  "location": "CommonCalcFeature.a_calculator()"
});
formatter.result({
  "duration": 88000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 36
    },
    {
      "val": "0",
      "offset": 58
    }
  ],
  "location": "CommonCalcFeature.I_want_add_two_numbers_the_first_and_the_second_(int,int)"
});
formatter.result({
  "duration": 117000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 14
    }
  ],
  "location": "CommonCalcFeature.the_result_is(int)"
});
formatter.result({
  "duration": 128000,
  "status": "passed"
});
});