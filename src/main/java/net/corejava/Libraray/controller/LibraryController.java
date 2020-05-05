package net.corejava.Libraray.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import net.corejava.Libraray.model.Book;
import net.corejava.Libraray.model.BooksDao;
import net.corejava.Libraray.service.IBookService;
import net.corejava.Libraray.service.ILibraryService;

@RestController 
public class LibraryController {
	@Autowired
	ILibraryService libService ;
	@Autowired
	IBookService bookService;
	@Autowired
	BooksDao bookDao ;
	
	@RequestMapping("/api/getLibraries")
	public List<Map<Integer,String>> getLibrary() {
       return libService.findIdAndName();
	}

	@RequestMapping("/api/getBooks")
	public List<Map<Integer, String>> getBooks(Integer id) {
       
		return bookService.findLibraryBookNames(id);
	}
	
	@RequestMapping("/api/getBookInfo")
	public Map<String, Object> getBookInfo(Integer id) {
		return bookService.findById(id);
	}
	
	
	@RequestMapping(value="/api/updateBookInfo",method=RequestMethod.POST)
	public String updateBookInfo(@RequestBody Book book) {
		return bookService.update(book);
	}

}

