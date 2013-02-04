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
  "id": "common-operation;add-two-numbers",
  "tags": [
    {
      "name": "@OPEN",
      "line": 8
    },
    {
      "name": "@CALC-6",
      "line": 8
    }
  ],
  "description": "",
  "name": "add two numbers",
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
formatter.step({
  "name": "a calculator",
  "keyword": "Given ",
  "line": 13
});
formatter.step({
  "name": "I want add two numbers, the first : -23 , and the second : -45",
  "keyword": "When ",
  "line": 14
});
formatter.step({
  "name": "the result is -68",
  "keyword": "Then ",
  "line": 15
});
formatter.step({
  "name": "a calculator",
  "keyword": "Given ",
  "line": 16
});
formatter.step({
  "name": "I want add two numbers, the first : -23 , and the second : 0",
  "keyword": "When ",
  "line": 17
});
formatter.step({
  "name": "the result is -23",
  "keyword": "Then ",
  "line": 18
});
formatter.match({
  "location": "CommonCalcFeature.a_calculator()"
});
formatter.result({
  "duration": 144094000,
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
  "duration": 3641000,
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
  "duration": 6311000,
  "status": "passed"
});
formatter.match({
  "location": "CommonCalcFeature.a_calculator()"
});
formatter.result({
  "duration": 43000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-23",
      "offset": 36
    },
    {
      "val": "-45",
      "offset": 59
    }
  ],
  "location": "CommonCalcFeature.I_want_add_two_numbers_the_first_and_the_second_(int,int)"
});
formatter.result({
  "duration": 213000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-68",
      "offset": 14
    }
  ],
  "location": "CommonCalcFeature.the_result_is(int)"
});
formatter.result({
  "duration": 247000,
  "status": "passed"
});
formatter.match({
  "location": "CommonCalcFeature.a_calculator()"
});
formatter.result({
  "duration": 48000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-23",
      "offset": 36
    },
    {
      "val": "0",
      "offset": 59
    }
  ],
  "location": "CommonCalcFeature.I_want_add_two_numbers_the_first_and_the_second_(int,int)"
});
formatter.result({
  "duration": 226000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-23",
      "offset": 14
    }
  ],
  "location": "CommonCalcFeature.the_result_is(int)"
});
formatter.result({
  "duration": 171000,
  "status": "passed"
});
});