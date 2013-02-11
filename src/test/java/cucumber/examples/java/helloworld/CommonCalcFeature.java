package cucumber.examples.java.helloworld;

import java.util.ArrayList;
import java.util.Collection;

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

	Calculator myCalculator;
	
	private int result;

	@Given("^a calculator$")
	public void a_calculator() throws Throwable {

		myCalculator = new Calculator();

	}
	
	@When("^I have the number ([+-]?\\d+)$")
	public void I_have_the_number(int arg1) throws Throwable {
		myCalculator.addNumber(arg1);	    
	}

	@When("^I want to sum them$")
	public void I_want_to_sum_them() throws Throwable {
	    result = myCalculator.doSum();
	}

	@Then("^the result must be ([+-]?\\d+)$")
	public void the_result_must_be(int arg1) throws Throwable {
	    assertEquals(arg1, result);
	}

}
