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
      "name": "@DEMO-1",
      "line": 8
    }
  ],
  "description": "giwen �a \nwhen �e�e�e\nthen lksdjkfsd",
  "name": "scenario1",
  "keyword": "Scenario",
  "line": 9,
  "type": "scenario"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 4,
  "type": "background"
});
formatter.scenario({
  "id": "feature1;deuxi�me-scenario",
  "tags": [
    {
      "name": "@ORPHAN",
      "line": 15
    }
  ],
  "description": "given �a devrait marcher\nwhen �a marche\nthen coucou",
  "name": "deuxi�me scenario",
  "keyword": "Scenario",
  "line": 16,
  "type": "scenario"
});
});