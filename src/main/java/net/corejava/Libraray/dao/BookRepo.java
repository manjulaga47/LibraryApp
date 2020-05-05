package net.corejava.Libraray.dao;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import net.corejava.Libraray.model.Book;

public interface BookRepo extends CrudRepository<Book, Integer> {
	
	@Query(value = "SELECT id,title FROM book where lib_id= :libId", nativeQuery = true)
	List<Map<Integer,String>> findLibraryBookNames(@Param("libId") Integer id);
	
	@Query(value = "select id, author,publisher,title,rating,content,lib_id from book where id= :Id", nativeQuery = true)
	Map<String,Object> findBookDetailsById(@Param("Id") Integer id);
	
}
