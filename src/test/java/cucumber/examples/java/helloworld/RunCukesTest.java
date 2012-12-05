package cucumber.examples.java.helloworld;

import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
//@Cucumber.Options(format = {"pretty", "html:target/cucumber-html-report", "json-pretty:target/cucumber-report.json"})

//@Cucumber.Options(format = { "pretty","json" ,"html:target/cucumber/html", "json:target/cucumber.json", "html:target/cucumber-html-report", "json-pretty:target/cucumber-report.json" }, features = { "." })
//@Cucumber.Options(format = { "json" ,"html:target/cucumber/html", "json:target/cucumber.json" }, features = { "." }, strict = true)
//@Cucumber.Options(format = {"pretty","html:target/cucumber-html-report", "json-pretty:target/cucumber-report.json"},  features = { "." })


@Cucumber.Options(format = {"pretty:target/cucumber/pretty", "html:target/cucumber/html","json:target/cucumber/json"}, features = { "." })
public class RunCukesTest {
}
