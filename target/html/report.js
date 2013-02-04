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
formatter.match({
  "location": "CommonCalcFeature.a_calculator()"
});
formatter.result({
  "duration": 132502000,
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
  "duration": 2792000,
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
  "duration": 3925000,
  "status": "passed"
});
formatter.match({
  "location": "CommonCalcFeature.a_calculator()"
});
formatter.result({
  "duration": 31000,
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
  "duration": 155000,
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
  "duration": 112000,
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
  "id": "common-operation;add-three-numbers",
  "tags": [
    {
      "name": "@ORPHAN",
      "line": 18
    }
  ],
  "description": "",
  "name": "add three numbers",
  "keyword": "Scenario",
  "line": 19,
  "type": "scenario"
});
formatter.step({
  "name": "a calculator",
  "keyword": "Given ",
  "line": 20
});
formatter.step({
  "name": "I want add two numbers, the first : \u0027-23\u0027 , the second : -45, and the third : +88",
  "keyword": "When ",
  "line": 21
});
formatter.step({
  "name": "the result is 00",
  "keyword": "Then ",
  "line": 22
});
formatter.match({
  "location": "CommonCalcFeature.a_calculator()"
});
formatter.result({
  "duration": 154000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "00",
      "offset": 14
    }
  ],
  "location": "CommonCalcFeature.the_result_is(int)"
});
formatter.result({
  "status": "skipped"
});
});