package net.corejava.Libraray.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name = "book")
public class Book {
	
	@Id
	@GeneratedValue
	public int id;
	public String author;
	public String title;
	public String publisher ;
	@Column(length=1334)
	public String content;
	public int rating;
	
	 @ManyToOne(fetch = FetchType.LAZY)
	    @JoinColumn(name = "lib_id", referencedColumnName = "lib_id")
	public Library library;
	
	public Library getLibrary() {
		return library;
	}

	public void setLibrary(Library library) {
		this.library = library;
	}

	public Book() {
	}
	
	public Book(int id, String author, String title, String publisher, String content, int rating) {
		super();
		this.id = id;
		this.author = author;
		this.title = title;
		this.publisher = publisher;
		this.content = content;
		this.rating = rating;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getPublisher() {
		return publisher;
	}
	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	
	
	
	
}
