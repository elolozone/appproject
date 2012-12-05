$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("\u0027target/generated-test-sources/cucumber/1.feature\u0027");
formatter.feature({
  "id": "feature1",
  "description": "",
  "name": "feature1",
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
  "id": "feature1;scenario1",
  "tags": [
    {
      "name": "@OPEN",
      "line": 8
    },
    {
      "name": "@tag1",
      "line": 8
    },
    {
      "name": "@DEMO-1",
      "line": 8
    }
  ],
  "description": "",
  "name": "scenario1",
  "keyword": "Scenario",
  "line": 9,
  "type": "scenario"
});
formatter.step({
  "name": "a",
  "keyword": "Given ",
  "line": 10
});
formatter.step({
  "name": "aaaaa",
  "keyword": "When ",
  "line": 11
});
formatter.step({
  "name": "lksdjkfsd",
  "keyword": "Then ",
  "line": 12
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
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 4,
  "type": "background"
});
formatter.scenario({
  "id": "feature1;coucou",
  "tags": [
    {
      "name": "@ORPHAN",
      "line": 15
    }
  ],
  "description": "",
  "name": "coucou",
  "keyword": "Scenario",
  "line": 16,
  "type": "scenario"
});
formatter.step({
  "name": "this",
  "keyword": "Given ",
  "line": 17
});
formatter.step({
  "name": "that",
  "keyword": "When ",
  "line": 18
});
formatter.step({
  "name": "This",
  "keyword": "Then ",
  "line": 19
});
formatter.match({
  "location": "Cool.I_have_a_hello_app_with()"
});
formatter.result({
  "duration": 140079000,
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