package cucumber.examples.java.helloworld;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.junit.Assert.assertEquals;

public class Cool {

	
 

	@Given("^this$")
	    public void I_have_a_hello_app_with() {
	        new Hello("jj");
	    }
	    
	    
}
