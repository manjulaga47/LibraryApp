package net.corejava.Libraray.dao;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import net.corejava.Libraray.model.Library;

public interface LibraryRepo extends CrudRepository<Library,Integer>{
	
	@Query(value = "SELECT lib_id,library_name FROM library", nativeQuery = true)
	List<Map<Integer,String>> findIdAndName();
}
