package net.corejava.Libraray.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class BooksDao {
	public List<HashMap> getBooks(){
		List<HashMap> lsBooks = new ArrayList<HashMap>();
		HashMap ls =  new HashMap();
		ls.put("id",1);
		ls.put("title","test");
		lsBooks.add(ls);
		
		return lsBooks;
	}
	
	public Book getBookInfo(int id) {
        Book book = new Book(1,"author","test","test","test",0);
		/*HashMap bookInfo =  new HashMap();
		//bookInfo.put("id",new Integer(1));
		bookInfo.put("title","test");
		bookInfo.put("author","test");
		bookInfo.put("content","test are dsjfkhdsjkfds dskjfdsnkf sdjfknhdskjf dsjfndskjfkds kjdsfds");
		bookInfo.put("publisher","test");*/
		return book;
	}
}
