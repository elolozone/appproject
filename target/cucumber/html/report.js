$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("\u0027target/generated-test-sources/cucumber/8.feature\u0027");
formatter.feature({
  "id": "as-a-student-i-need-a-calculator-to-calculate-*,+,-,/",
  "description": "",
  "name": "As a student I need a calculator to calculate *,+,-,/",
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
  "id": "as-a-student-i-need-a-calculator-to-calculate-*,+,-,/;add-two-numbers;;2",
  "tags": [
    {
      "name": "@WIP",
      "line": 8
    },
    {
      "name": "@CALC-16",
      "line": 8
    }
  ],
  "description": "",
  "name": "add two numbers",
  "keyword": "Scenario Outline",
  "line": 18,
  "type": "scenario"
});
formatter.step({
  "name": "a calculator",
  "keyword": "Given ",
  "line": 10
});
formatter.step({
  "name": "I have the number 12",
  "keyword": "When ",
  "line": 11,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I have the number 1",
  "keyword": "And ",
  "line": 12,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I want to sum them",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "the result must be 13",
  "keyword": "Then ",
  "line": 14,
  "matchedColumns": [
    2
  ]
});
formatter.match({
  "location": "CommonCalcFeature.a_calculator()"
});
formatter.result({
  "duration": 143713000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 18
    }
  ],
  "location": "CommonCalcFeature.I_have_the_number(int)"
});
formatter.result({
  "duration": 2663000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "CommonCalcFeature.I_have_the_number(int)"
});
formatter.result({
  "duration": 84000,
  "status": "passed"
});
formatter.match({
  "location": "CommonCalcFeature.I_want_to_sum_them()"
});
formatter.result({
  "duration": 32000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13",
      "offset": 19
    }
  ],
  "location": "CommonCalcFeature.the_result_must_be(int)"
});
formatter.result({
  "duration": 4178000,
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
  "id": "as-a-student-i-need-a-calculator-to-calculate-*,+,-,/;add-two-negative-numbers",
  "tags": [
    {
      "name": "@WIP",
      "line": 21
    },
    {
      "name": "@CALC-16",
      "line": 21
    }
  ],
  "description": "",
  "name": "add two negative numbers",
  "keyword": "Scenario",
  "line": 22,
  "type": "scenario"
});
formatter.step({
  "name": "a calculator",
  "keyword": "Given ",
  "line": 23
});
formatter.step({
  "name": "I have the number -3",
  "keyword": "When ",
  "line": 24
});
formatter.step({
  "name": "I have the number -24",
  "keyword": "And ",
  "line": 25
});
formatter.step({
  "name": "I want to sum them",
  "keyword": "And ",
  "line": 26
});
formatter.step({
  "name": "the result must be -27",
  "keyword": "Then ",
  "line": 27
});
formatter.match({
  "location": "CommonCalcFeature.a_calculator()"
});
formatter.result({
  "duration": 102000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-3",
      "offset": 18
    }
  ],
  "location": "CommonCalcFeature.I_have_the_number(int)"
});
formatter.result({
  "duration": 100000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-24",
      "offset": 18
    }
  ],
  "location": "CommonCalcFeature.I_have_the_number(int)"
});
formatter.result({
  "duration": 151000,
  "status": "passed"
});
formatter.match({
  "location": "CommonCalcFeature.I_want_to_sum_them()"
});
formatter.result({
  "duration": 26000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-27",
      "offset": 19
    }
  ],
  "location": "CommonCalcFeature.the_result_must_be(int)"
});
formatter.result({
  "duration": 119000,
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
  "id": "as-a-student-i-need-a-calculator-to-calculate-*,+,-,/;add-two-other-numbers",
  "tags": [
    {
      "name": "@WIP",
      "line": 30
    },
    {
      "name": "@CALC-16",
      "line": 30
    }
  ],
  "description": "",
  "name": "add two other numbers",
  "keyword": "Scenario",
  "line": 31,
  "type": "scenario"
});
formatter.step({
  "name": "a calculator",
  "keyword": "Given ",
  "line": 32
});
formatter.step({
  "name": "I have the number -23",
  "keyword": "When ",
  "line": 33
});
formatter.step({
  "name": "I have the number 44",
  "keyword": "And ",
  "line": 34
});
formatter.step({
  "name": "I want to sum them",
  "keyword": "And ",
  "line": 35
});
formatter.step({
  "name": "the result must be 21",
  "keyword": "Then ",
  "line": 36
});
formatter.match({
  "location": "CommonCalcFeature.a_calculator()"
});
formatter.result({
  "duration": 154000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-23",
      "offset": 18
    }
  ],
  "location": "CommonCalcFeature.I_have_the_number(int)"
});
formatter.result({
  "duration": 179000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "44",
      "offset": 18
    }
  ],
  "location": "CommonCalcFeature.I_have_the_number(int)"
});
formatter.result({
  "duration": 155000,
  "status": "passed"
});
formatter.match({
  "location": "CommonCalcFeature.I_want_to_sum_them()"
});
formatter.result({
  "duration": 43000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 19
    }
  ],
  "location": "CommonCalcFeature.the_result_must_be(int)"
});
formatter.result({
  "duration": 152000,
  "status": "passed"
});
});