import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent {
  private service;
  books : String[];
  book_id : String[];
  constructor(bookService:BookServiceService,private cookie : CookieService) {
    this.service=bookService;
    this.getBooks();
    this.getBookId();
  }

  private getBooks():void{
    this.books = this.service.getBooks();
    console.log(this.books);
    console.log("Hello");
  }

  private getBookId():void{
    this.book_id = this.service.getBookId();
    console.log(this.book_id);
    console.log("Hello");
  }

  f(val){
    console.log(val);
    this.cookie.set("bookNm",String(this.books[val]),50000);
    this.cookie.set("bookId",String(this.book_id[val]),50000);
  }


}

