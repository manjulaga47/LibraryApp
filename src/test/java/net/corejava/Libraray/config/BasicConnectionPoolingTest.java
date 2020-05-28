package net.corejava.Libraray.config;

import static org.junit.jupiter.api.Assertions.*;

import java.sql.Connection;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
@SpringBootTest
class BasicConnectionPoolingTest {

	@Test
	void test10ConnectionsCreated() {
		List<Connection> pool = BasicConnectionPooling.create("jdbc:h2:mem:librarydb", "sa", "");
		assertEquals(10,pool.size(),"10 connections not created");
		
		for(int i = 0;i<pool.size();i++) {
			assertNotNull(pool.get(i));
		}
	}

}
