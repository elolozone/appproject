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
  "location": "CommonCalcFeature.une_calculatrice()"
});
formatter.result({
  "duration": 163564000,
  "status": "failed",
  "error_message": "java.lang.AssertionError: expected:\u003ccucumber.examples.java.helloworld.CommonCalcFeature$Caculatrice@643cb075\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:93)\n\tat org.junit.Assert.failNotEquals(Assert.java:647)\n\tat org.junit.Assert.assertEquals(Assert.java:128)\n\tat org.junit.Assert.assertEquals(Assert.java:147)\n\tat cucumber.examples.java.helloworld.CommonCalcFeature.une_calculatrice(CommonCalcFeature.java:31)\n\tat ✽.Given a user(target/generated-test-sources/cucumber/2.feature:10)\n"
});
formatter.match({
  "arguments": [
    {
      "val": "lmeurisse",
      "offset": 15
    },
    {
      "val": "ekito",
      "offset": 36
    }
  ],
  "location": "CommonCalcFeature.he_loggs_with_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonCalcFeature.he_access_to_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
});