import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient){
    
  }

  getLibraries(){
    return this.http.get("/api/getLibraries");
  }

  getBooks(id){
    console.log(id)
    return this.http.get("/api/getBooks?id="+id);
  }

  getBookInfo(id){
    return this.http.get("/api/getBookInfo?id="+id);
  }

  updateBook(bookDetails,newBookDetails,library){
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
    }); 
   
  const option = {
        responseType :'text'
  }
  let updatedBookDetails = {
    'author': newBookDetails.author,
    'content': newBookDetails.content,
    'id': parseInt(bookDetails.ID),
    'publisher': newBookDetails.publisher,
    'rating': parseInt(newBookDetails.rating),
    'title': newBookDetails.title,
    'library':{
      'lib_id':library.LIB_ID,
      'libraryName':library.LIBRARY_NAME
    }
    
  }
console.log("------------------------------")
  return this.http.post("/api/updateBookInfo",  updatedBookDetails ,{responseType :'text'});
  } 
}
