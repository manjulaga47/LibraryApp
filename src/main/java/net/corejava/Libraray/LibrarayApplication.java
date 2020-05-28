package net.corejava.Libraray;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LibrarayApplication implements CommandLineRunner{
	@Autowired
    DataSource dataSource;
	public static void main(String[] args) {
		SpringApplication.run(LibrarayApplication.class, args);
	}

	@Override
    public void run(String... args) throws Exception {

        System.out.println("DATASOURCE = " + dataSource);

    }
}
