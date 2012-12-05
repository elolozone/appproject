package cucumber.examples.java.helloworld;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.runtime.PendingException;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotSame;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertFalse;



public class Cool {


	String username;
	Loggin loggin ;
	String RetourConnect; 


	@Given("^a user \"([^\"]*)\"$")
	public void a_user(String arg1) throws Throwable {

		assertNotNull(arg1);
		username  = arg1;




	}

	@Given("^his login is \"([^\"]*)\" and Password \"([^\"]*)\"$")
	public void his_login_is_and_Password(String arg1, String arg2) throws Throwable {
		// Express the Regexp above with the code you wish you had
		assertNotNull ( username);
		assertNotNull (arg1,arg2);

		loggin = new Loggin ();
		loggin.createUser( username, arg1, arg2);

	}

	@When("^he wants to be connected with this login \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void he_wants_to_be_connected_with_this_login_and_password(String arg1, String arg2)   {

		RetourConnect = loggin.connect(arg1, arg2);
		 
	}

	@Then("^the system authorize him$")
	public void the_system_authorize_him() throws Throwable {



		assertEquals("OK",RetourConnect);
	}

	@Then("^the system display the password fail$")
	public void the_system_display_the_password_fail() throws Throwable {


		assertEquals("password fail",RetourConnect);
	}



	@Then("^the system display that the account is locked$")
	public void the_system_display_that_the_account_is_locked() throws Throwable {

		assertEquals("account locked",RetourConnect );

	}
	
	@Then("^the system has to display this \"([^\"]*)\"$")
	public void the_system_has_to_display_this(String arg1) throws Throwable {
		assertEquals(arg1,RetourConnect );
	}
	
	
	//***
	
	@Given("^he is already logged$")
	public void he_is_already_logged() throws Throwable {
		
		loggin = new Loggin ();
		loggin.createUser( username, username, username);
		RetourConnect = loggin.connect(username, username);
		assertEquals("OK",RetourConnect);
	}

	@Given("^he has the following next flights :$")
	public void he_has_the_following_next_flights_(DataTable arg1) throws Throwable {
	    // Express the Regexp above with the code you wish you had
	    // For automatic conversion, change DataTable to List<YourType>
	    throw new PendingException();
	}

	@When("^I want the list of the next (\\d+) flights$")
	public void I_want_the_list_of_the_next_flights(int arg1) throws Throwable {
	    // Express the Regexp above with the code you wish you had
	    throw new PendingException();
	}

	@Then("^I get the following list :$")
	public void I_get_the_following_list_(DataTable arg1) throws Throwable {
	    // Express the Regexp above with the code you wish you had
	    // For automatic conversion, change DataTable to List<YourType>
	    throw new PendingException();
	}


}
