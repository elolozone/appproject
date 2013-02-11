package cucumber.examples.java;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class Calculator {

	private List<Integer> numbers = new ArrayList<Integer>();

	public void addNumber(int number) {
		numbers.add(number);
	}

	public int doSum() {
		int result = 0;
		for (int i = 0; i<2 ; i++ ) {
			int n = numbers.get(i);
			result += n;
		}
		return result;
	}

}
