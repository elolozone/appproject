package cucumber.examples.java;

public class Calculator {

	int[] numbers;
	int nbValue;
	
	
	public Calculator(int dim) {
 
		this.nbValue = 0;
		numbers = new int[dim];
	}

 
	
	public void pushNumber (int arg)
	{
		numbers[nbValue++] = arg;
	};
	
	public int addResult ()
	{
		int result = 0;
		int i;
		for (i=0; i<nbValue; i++) {
		   result = result + numbers[i];
		}
		return result;
	}
	
}
 