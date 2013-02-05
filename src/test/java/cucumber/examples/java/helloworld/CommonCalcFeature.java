package cucumber.examples.java.helloworld;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.examples.java.Calculator;
import cucumber.runtime.PendingException;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotSame;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertFalse;



public class CommonCalcFeature {

	Calculator  myCalculator;
	
	@Given("^a calculator$")
	public void a_calculator() throws Throwable {
		 myCalculator = new Calculator(2);
		 assertNotNull(myCalculator);

	}

	@When("^I enter the number ([-+]?\\d+)$")
	public void I_enter_the_number(int arg1) throws Throwable {
	    myCalculator.pushNumber(arg1);
	}
	
	@Then("^the result is ([-+]?\\d+)$")
	public void the_result_is(int arg1) throws Throwable {
		assertEquals(arg1, myCalculator.addResult ());
	}
  

}
