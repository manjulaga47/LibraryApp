package net.corejava.Libraray.config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class BasicConnectionPooling  {

  private static int INITIAL_POOL_SIZE = 10;
   
  public static List<Connection> create(
    String url, String user, 
    String password) {

      List<Connection> pool = new ArrayList<>(INITIAL_POOL_SIZE);
      for (int i = 0; i < INITIAL_POOL_SIZE; i++) {
    	  Connection con = null;
		try {
			con = createConnection(url, user, password);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
          pool.add(con);
          System.out.println("Connection "+(i+1) +"- "+con);
      }
      
      System.out.println("Total number of connections -------------- "+pool.size());
      return pool;
  }
  
   
  private static Connection createConnection(
    String url, String user, String password) 
    throws SQLException {
      return DriverManager.getConnection(url, user, password);
  }
  

 
}
