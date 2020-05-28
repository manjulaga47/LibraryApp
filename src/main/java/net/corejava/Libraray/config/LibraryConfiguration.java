package net.corejava.Libraray.config;


import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

@Configuration
public class LibraryConfiguration extends HikariConfig {
	
	@Bean
	public void createConnection() throws SQLException {
		BasicConnectionPooling.create("jdbc:h2:mem:librarydb", "sa", "");
	}
	
	/*@Bean
	 * 
	@Primary
	@ConfigurationProperties(prefix="spring.datasource")
	public DataSourceProperties applicationDataSourceProperties() {
		return new DataSourceProperties();
	}

	@Bean(name="customDataSource")
    public DataSource customDataSource(@Qualifier("applicationDataSourceProperties") DataSourceProperties applicationDataSourceProperties) {
		 HikariDataSource dataSource = applicationDataSourceProperties.initializeDataSourceBuilder().type(HikariDataSource.class).build();
	        dataSource.setMinimumIdle(10);
	        dataSource.setMaximumPoolSize(10);
	        dataSource.setMaxLifetime(3000000);
	        dataSource.setConnectionTimeout(1000);
	        //dataSource.setJdbcUrl(jdbcConnectionString);
	         dataSource.setConnectionTestQuery("select 1");
	         dataSource.setIdleTimeout(250000);
	    return dataSource;
    }
	
	@Bean 
	public Boolean testDataSource(@Qualifier("customDataSource") HikariDataSource ds) throws SQLException {
		
		System.out.println("Pool size------------"+ds.getMaximumPoolSize());
		
		return false;
	}*/
}
