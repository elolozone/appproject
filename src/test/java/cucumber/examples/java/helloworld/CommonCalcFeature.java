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
	int resultadd;
	
	@Given("^a calculator$")
	public void a_calculator() throws Throwable {
		Calculator  myCalculator = new Calculator();
	}
	
	 
	@When("^I want add two numbers, the first : ([-+]?\\d+) , and the second : (-?\\d+)$")
	public void I_want_add_two_numbers_the_first_and_the_second_(int arg1, int arg2) throws Throwable {
	    // Express the Regexp above with the code you wish you had
	    resultadd = arg1+arg2;
	}

	@Then("^the result is (-?\\d+)$")
	public void the_result_is(int arg1) throws Throwable {
	    assertEquals(arg1, resultadd) ;
	}
	
	
	



  

}
