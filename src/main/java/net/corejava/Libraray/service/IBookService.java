package net.corejava.Libraray.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.stereotype.Component;

import net.corejava.Libraray.model.Book;
import net.corejava.Libraray.model.Library;

public interface IBookService {
	public List<Map<Integer,String>> findLibraryBookNames(int id);
	public Map<String,Object> findById(int id);
	public String update(Book book);
}
