package cucumber.examples.java.helloworld;

import java.io.IOException;

public class Loggin {
	
	private class User {
		 String username;
		 String login ;
		 String password;
		 int failCount ; 
		 }
	
	User user;
	
	public void createUser (String username, String login, String password ) {
		user = new User();
		user.username = username;
		user.login = login ; 
		user.password = password;
		user.failCount = 0;
	}

	public String connect (String login, String password )   {
		
		if (user == null ) return "No User already defined";
		if (!user.login.equals(login)) return "This user does not exist";
		if (user.login.equals(login) && !user.password.equals(password)) {
			if (user.failCount >= 2) return "account locked" ;
			user.failCount +=1; 
			return "password fail";
			}
		return "OK";
	}
	
}
