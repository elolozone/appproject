package cucumber.examples.java.helloworld;

import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)

@Cucumber.Options(format = { "json", "json:target/cucumber.json" }, features = { "." }) //, strict = true)
//@Cucumber.Options(format = { "pretty:target/cucumber/pretty", "html:target/cucumber/html", "json:target/cucumber.json" }, features = { "." })

//@Cucumber.Options(format = {"pretty:target/cucumber/pretty", "html:target/cucumber/html","json:target/cucumber/cucumber.json"}, features = { "." })
public class RunCukesTest {
}
