import { Component } from '@angular/core';
import { BooksService } from './books.service';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public libraries: Array<any> = [];
  public books: Array<any> = [];
  public bookDetails:any = null;
  public bookList = undefined;
  public selectedBook;
  public selectedLibrary;

  constructor(private bookService: BooksService) {
  }

  ngOnInit(){
    this.bookList = new FormGroup({
      title:new FormControl(''),
      author:new FormControl(''),
      publisher:new FormControl(''),
      rating:new FormControl(''),
      content:new FormControl('')
    });
    this.getLibraries();
  }

  getLibraries(){
    this.bookService.getLibraries().subscribe((data) =>{
      if(data instanceof Array){
        this.libraries = data;
      }
    });
  }

  getBooks(library){
    this.books =[];
    this.bookDetails = null;

    this.selectedLibrary = library;
    this.bookService.getBooks(library.LIB_ID).subscribe((data) =>{
      if(data instanceof Array){
        this.books = data;
      }
       console.log(data instanceof Array); 
    });
  }

  getBookInfo(book){
    this.selectedBook =book;
    this.bookService.getBookInfo(book.ID).subscribe((data) =>{
        this.bookDetails = data; 
        this.bookList = new FormGroup({
          title:new FormControl(this.bookDetails.TITLE,Validators.required),
          author:new FormControl(this.bookDetails.AUTHOR, Validators.required),
          publisher:new FormControl(this.bookDetails.PUBLISHER,Validators.required),
          rating:new FormControl(this.bookDetails.RATING),
          content:new FormControl(this.bookDetails.CONTENT,Validators.required )
        });
    });
  }

  updateBooks(){
    console.log("--------------------");
    this.bookService.updateBook(this.bookDetails,this.bookList.value,this.selectedLibrary ).subscribe({
      next: data => { if(data == "Success"){alert(this.bookList.value.title +" updated successfully.")}else{ alert("Error while updating.")}},
      error: error => alert('There was an error!'+ error)
    });
  }

}
