$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("\u0027target/generated-test-sources/cucumber/5.feature\u0027");
formatter.feature({
  "id": "common-operations",
  "tags": [
    {
      "name": "@CALC-11",
      "line": 1
    }
  ],
  "description": "   As Josette a student, I want give numbers to the system so that I can have result of many operations like +,-,/,*",
  "name": "Common Operations",
  "keyword": "Feature",
  "line": 2
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 5,
  "type": "background"
});
formatter.scenario({
  "id": "common-operations;enter-to-positive-numbers-and-get-the-addition",
  "tags": [
    {
      "name": "@OPEN",
      "line": 9
    },
    {
      "name": "@CALC-12",
      "line": 9
    }
  ],
  "description": "",
  "name": "enter to positive numbers and get the addition",
  "keyword": "Scenario",
  "line": 10,
  "type": "scenario"
});
formatter.step({
  "name": "a calculator",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "I enter the number 34",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "I enter the number 98",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "the result is 132",
  "keyword": "Then ",
  "line": 14
});
formatter.match({
  "location": "CommonCalcFeature.a_calculator()"
});
formatter.result({
  "duration": 157939000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "34",
      "offset": 19
    }
  ],
  "location": "CommonCalcFeature.I_enter_the_number(int)"
});
formatter.result({
  "duration": 2877000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "98",
      "offset": 19
    }
  ],
  "location": "CommonCalcFeature.I_enter_the_number(int)"
});
formatter.result({
  "duration": 79000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "132",
      "offset": 14
    }
  ],
  "location": "CommonCalcFeature.the_result_is(int)"
});
formatter.result({
  "duration": 99000,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 5,
  "type": "background"
});
formatter.scenario({
  "id": "common-operations;enter-to-negative-numbers-and-get-the-addition",
  "tags": [
    {
      "name": "@OPEN",
      "line": 17
    },
    {
      "name": "@CALC-12",
      "line": 17
    }
  ],
  "description": "",
  "name": "enter to negative numbers and get the addition",
  "keyword": "Scenario",
  "line": 18,
  "type": "scenario"
});
formatter.step({
  "name": "a calculator",
  "keyword": "Given ",
  "line": 19
});
formatter.step({
  "name": "I enter the number -34",
  "keyword": "When ",
  "line": 20
});
formatter.step({
  "name": "I enter the number -98",
  "keyword": "And ",
  "line": 21
});
formatter.step({
  "name": "the result is -132",
  "keyword": "Then ",
  "line": 22
});
formatter.match({
  "location": "CommonCalcFeature.a_calculator()"
});
formatter.result({
  "duration": 140000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-34",
      "offset": 19
    }
  ],
  "location": "CommonCalcFeature.I_enter_the_number(int)"
});
formatter.result({
  "duration": 126000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-98",
      "offset": 19
    }
  ],
  "location": "CommonCalcFeature.I_enter_the_number(int)"
});
formatter.result({
  "duration": 89000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-132",
      "offset": 14
    }
  ],
  "location": "CommonCalcFeature.the_result_is(int)"
});
formatter.result({
  "duration": 71000,
  "status": "passed"
});
});