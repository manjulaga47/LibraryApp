package net.corejava.Libraray.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import net.corejava.Libraray.dao.BookRepo;
import net.corejava.Libraray.model.Book;
import net.corejava.Libraray.model.Library;

@Component
public class BookServiceImpl implements IBookService {

	@Autowired
	BookRepo bookrepo;
	
	@Override
	public List<Map<Integer,String>> findLibraryBookNames(int id){
	
		return bookrepo.findLibraryBookNames(id);
	}
	
	@Override
	public Map<String,Object> findById(int id){
		return bookrepo.findBookDetailsById(id);
	}
	
	@Override
	public String update(Book book) {
		try {
			bookrepo.save(book);
			return "Success";
		}catch(Exception e) {
			return "Error";
		}
	}
}
