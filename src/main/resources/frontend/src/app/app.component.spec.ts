import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { BooksService } from './books.service';
import { BrowserModule, By } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs';

describe('Library Test cases', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let booksService : BooksService;
  let spy:any;
  let fixture = null;
  let app =null;

  let mockLibData = [{"LIB_ID":100,"LIBRARY_NAME":"mock library1"}
  ,{"LIB_ID":101,"LIBRARY_NAME":"mock library2"}
  ,{"LIB_ID":102,"LIBRARY_NAME":"mock library3"}
  ,{"LIB_ID":103,"LIBRARY_NAME":"mock library4"}];
  

  let mockBookData = [{"ID":201,"TITLE":"book1"},
  {"ID":202,"TITLE":"book2"},
  {"ID":203,"TITLE":"book3"}];

  let mockBookDeatils = {"RATING":5,"ID":201,"PUBLISHER":"Favorite Fairy Tales","LIB_ID":100,"CONTENT":"One bright day in late autumn a family of Ants were bustling about in the warm sunshine, drying out the grain they had stored up during the summer, when a starving Grasshopper, his fiddle under his arm, came up and humbly begged for a bite to eat.\"What!\" cried the Ants in surprise, \"haven't you stored anything away for the winter? What in the world were you doing all last summer?\"\"I didn't have time to store up any food,\" whined the Grasshopper; \"I was so busy making music that before I knew it the summer was gone.\"The Ants shrugged their shoulders in disgust.\"Making music, were you?\" they cried. \"Very well; now dance!\" And they turned their backs on the Grasshopper and went on with their work.There's a time for work and a time for play.","AUTHOR":"Arthur Rackham","TITLE":"The Ant And The Grasshopper"};

  let content = "One bright day in late autumn a family of Ants were bustling about in the warm sunshine, drying out the grain they had stored up during the summer, when a starving Grasshopper, his fiddle under his arm, came up and humbly begged for a bite to eat.\"What!\" cried the Ants in surprise, \"haven't you stored anything away for the winter? What in the world were you doing all last summer?\"\"I didn't have time to store up any food,\" whined the Grasshopper; \"I was so busy making music that before I knew it the summer was gone.\"The Ants shrugged their shoulders in disgust.\"Making music, were you?\" they cried. \"Very well; now dance!\" And they turned their backs on the Grasshopper and went on with their work.There's a time for work and a time for play.";

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
    providers: [BooksService]
    }).compileComponents();

  }));

  it('when application is loaded then Library Component should be created', () => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('When application is loaded then library list should display with library values', () => {
    
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;

    booksService =  fixture.debugElement.injector.get(BooksService);
    spyOn(booksService  , 'getLibraries').and.returnValue(new Observable((observer) => {
      observer.next(mockLibData);
      observer.complete();
      }));

      fixture.detectChanges();
      let label = fixture.debugElement.query(By.css('[item-id="libraryItemId-0"] span')).nativeElement;
      expect("mock library1").toEqual(label.innerText);

      label = fixture.debugElement.query(By.css('[item-id="libraryItemId-1"] span')).nativeElement;
      expect("mock library2").toEqual(label.innerText);

      label = fixture.debugElement.query(By.css('[item-id="libraryItemId-2"] span')).nativeElement;
      expect("mock library3").toEqual(label.innerText);

      label = fixture.debugElement.query(By.css('[item-id="libraryItemId-3"] span')).nativeElement;
      expect("mock library4").toEqual(label.innerText);
  });

  it('When onclick of library name then library books should be loaded', () => {
    
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;

    booksService =  fixture.debugElement.injector.get(BooksService);
    spyOn(booksService  , 'getLibraries').and.returnValue(new Observable((observer) => {
      observer.next(mockLibData);
      observer.complete();
      }));

      spyOn(booksService  , 'getBooks').and.returnValue(new Observable((observer) => {
        observer.next(mockBookData);
        observer.complete();
        }));


      fixture.detectChanges();
      let library = fixture.debugElement.query(By.css('[item-id="libraryItemId-0"]'));
      library.triggerEventHandler("click",null);
      fixture.detectChanges();
      let book = fixture.debugElement.query(By.css('[item-id="booksItemId-0"]')).nativeElement;
      expect("book1").toEqual(book.innerText);

      book = fixture.debugElement.query(By.css('[item-id="booksItemId-1"]')).nativeElement;
      expect("book2").toEqual(book.innerText);

      book = fixture.debugElement.query(By.css('[item-id="booksItemId-2"]')).nativeElement;
      expect("book3").toEqual(book.innerText);

  });

  it('When onclick on library name then selected library name should display under "Books From Library"', () => {
    
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;

    booksService =  fixture.debugElement.injector.get(BooksService);
    spyOn(booksService  , 'getLibraries').and.returnValue(new Observable((observer) => {
      observer.next(mockLibData);
      observer.complete();
      }));

      spyOn(booksService  , 'getBooks').and.returnValue(new Observable((observer) => {
        observer.next(mockBookData);
        observer.complete();
        }));


      fixture.detectChanges();
      let library = fixture.debugElement.query(By.css('[item-id="libraryItemId-0"]'));
      library.triggerEventHandler("click",null);
      fixture.detectChanges();
      
      let book = fixture.debugElement.query(By.css('[item-id="libraryNameItemId"]')).nativeElement;
      expect("(mock library1)").toEqual(book.innerText);

  });

  it('When onclick on Book name then book details like Title,Author,Publisher,Rating and content should be display', () => {
    
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;

    booksService =  fixture.debugElement.injector.get(BooksService);
    spyOn(booksService  , 'getLibraries').and.returnValue(new Observable((observer) => {
      observer.next(mockLibData);
      observer.complete();
      }));

    spyOn(booksService  , 'getBooks').and.returnValue(new Observable((observer) => {
      observer.next(mockBookData);
      observer.complete();
      }));

    spyOn(booksService  , 'getBookInfo').and.returnValue(new Observable((observer) => {
      observer.next(mockBookDeatils);
      observer.complete();
      }));  


    fixture.detectChanges();
    let library = fixture.debugElement.query(By.css('[item-id="libraryItemId-0"]'));
    library.triggerEventHandler("click",null);
    fixture.detectChanges();
    let book = fixture.debugElement.query(By.css('[item-id="booksItemId-0"]'));
    book.triggerEventHandler("click",null);
    fixture.detectChanges();
   
    expect(app.bookList.value.title).toEqual("The Ant And The Grasshopper");
    expect(app.bookList.value.publisher).toEqual("Favorite Fairy Tales");
    expect(app.bookList.value.author).toEqual("Arthur Rackham");
    expect(app.bookList.value.content).toEqual(content);
    expect(app.bookList.value.rating).toEqual(5);
  });


  it('When onclick on Book name then book name should desplay in top of book details', () => {
    
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;

    booksService =  fixture.debugElement.injector.get(BooksService);
    spyOn(booksService  , 'getLibraries').and.returnValue(new Observable((observer) => {
      observer.next(mockLibData);
      observer.complete();
      }));

    spyOn(booksService  , 'getBooks').and.returnValue(new Observable((observer) => {
      observer.next(mockBookData);
      observer.complete();
      }));

    spyOn(booksService  , 'getBookInfo').and.returnValue(new Observable((observer) => {
      observer.next(mockBookDeatils);
      observer.complete();
      }));  


    fixture.detectChanges();
    let library = fixture.debugElement.query(By.css('[item-id="libraryItemId-0"]'));
    library.triggerEventHandler("click",null);
    fixture.detectChanges();
    let book = fixture.debugElement.query(By.css('[item-id="booksItemId-0"]'));
    book.triggerEventHandler("click",null);
    fixture.detectChanges();

    let bookheader = fixture.debugElement.query(By.css('[item-id="bookNameItemId"]')).nativeElement;
      expect("book1").toEqual(bookheader.innerText);
  });
  
  it('When required fields in book details is empty then "Update Book" button should be disabled', () => {
    
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;

    booksService =  fixture.debugElement.injector.get(BooksService);
    spyOn(booksService  , 'getLibraries').and.returnValue(new Observable((observer) => {
      observer.next(mockLibData);
      observer.complete();
      }));

    spyOn(booksService  , 'getBooks').and.returnValue(new Observable((observer) => {
      observer.next(mockBookData);
      observer.complete();
      }));

    spyOn(booksService  , 'getBookInfo').and.returnValue(new Observable((observer) => {
      observer.next(mockBookDeatils);
      observer.complete();
      }));  


    fixture.detectChanges();
    let library = fixture.debugElement.query(By.css('[item-id="libraryItemId-0"]'));
    library.triggerEventHandler("click",null);
    fixture.detectChanges();
    let book = fixture.debugElement.query(By.css('[item-id="booksItemId-0"]'));
    book.triggerEventHandler("click",null);
    fixture.detectChanges();

    app.bookList.patchValue({"title":""});
   
    fixture.detectChanges();

    let button = fixture.debugElement.query(By.css('[item-id="updateBookItemId"]')).nativeElement;
    console.log(button)
    expect(button.disabled).toEqual(true);
  });


  it('When required fields in book details is are not empty then "Update Book" button should be enabled', () => {
    
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;

    booksService =  fixture.debugElement.injector.get(BooksService);
    spyOn(booksService  , 'getLibraries').and.returnValue(new Observable((observer) => {
      observer.next(mockLibData);
      observer.complete();
      }));

    spyOn(booksService  , 'getBooks').and.returnValue(new Observable((observer) => {
      observer.next(mockBookData);
      observer.complete();
      }));

    spyOn(booksService  , 'getBookInfo').and.returnValue(new Observable((observer) => {
      observer.next(mockBookDeatils);
      observer.complete();
      }));  


    fixture.detectChanges();
    let library = fixture.debugElement.query(By.css('[item-id="libraryItemId-0"]'));
    library.triggerEventHandler("click",null);
    fixture.detectChanges();
    let book = fixture.debugElement.query(By.css('[item-id="booksItemId-0"]'));
    book.triggerEventHandler("click",null);
    fixture.detectChanges();

    let button = fixture.debugElement.query(By.css('[item-id="updateBookItemId"]')).nativeElement;
    expect(button.disabled).toEqual(false);
  });

  it('when click on "Update Book" button then post update request should send with modified book details',
  inject([HttpTestingController, BooksService],
    (httpMock: HttpTestingController, service: BooksService) => {
    
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    booksService =  fixture.debugElement.injector.get(BooksService);
    spyOn(booksService  , 'getLibraries').and.returnValue(new Observable((observer) => {
      observer.next(mockLibData);
      observer.complete();
      }));

    spyOn(booksService  , 'getBooks').and.returnValue(new Observable((observer) => {
      observer.next(mockBookData);
      observer.complete();
      }));

    spyOn(booksService  , 'getBookInfo').and.returnValue(new Observable((observer) => {
      observer.next(mockBookDeatils);
      observer.complete();
      }));  

    let updateBody = {"author": "Arthur Rackham",
    "content": content,
    "id": 201,
    "library":{
    "lib_id": 100,
    "libraryName": "mock library1"
    },
    "publisher": "Favorite Fairy Tales",
    "rating": 5,
    "title": "The Ant And The Grasshopper"
    };


    fixture.detectChanges();
    let library = fixture.debugElement.query(By.css('[item-id="libraryItemId-0"]'));
    library.triggerEventHandler("click",null);
    fixture.detectChanges();
    let book = fixture.debugElement.query(By.css('[item-id="booksItemId-0"]'));
    book.triggerEventHandler("click",null);
    fixture.detectChanges();

    let button = fixture.debugElement.query(By.css('[item-id="updateBookItemId"]'));
    button.triggerEventHandler("click",null);
    fixture.detectChanges();  
    // We set the expectations for the HttpClient mock
    const req = httpMock.expectOne('/api/updateBookInfo');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(updateBody);
    // Then we set the fake data to be returned by the mock
    req.flush({data: "Success"});
       
  })
  );
  
});
