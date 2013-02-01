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

	class Caculatrice {
		int entier1;
		int resultat; 
		public void carre() {resultat = entier1 * entier1;};
	}
	
	Caculatrice maCalculatrice;

	@Given("^a user$")
	public void une_calculatrice() throws Throwable {
		maCalculatrice = new Caculatrice();
	}

	@When("^je saisie le nombre (\\d+) et je demande le carre$")
	public void je_saisie_le_nombre_et_je_demande_le_carre(int arg1) throws Throwable {
	    maCalculatrice.entier1  = arg1;
	    maCalculatrice.carre();
	}

	@Then("^le resultat doit etre (\\d+)$")
	public void le_resultat_doit_etre(int arg1) throws Throwable {
	   
		assertEquals(arg1, maCalculatrice.resultat);  
	}



}
