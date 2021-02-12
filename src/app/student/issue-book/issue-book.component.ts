import { Router } from '@angular/router';
import { issuedBooksDetails } from './issuedBooksDetails';
import { DataServiceService } from './../../data-service.service';
import { Component, ComponentFactoryResolver, ComponentRef, OnInit, NgModule, ViewChild, ViewContainerRef, Inject } from '@angular/core';
import { AddBooksComponent } from '../add-books/add-books.component';
import { BookServiceService } from '../book-service.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent implements OnInit {

  componentRef: any;
  @ViewChild('dynamicLoadComponent', { read: ViewContainerRef }) entry: ViewContainerRef;

  booksInLibrary: any[];
  books: String[];
  book_id: String[];
  msg = "";
  visible: boolean;

  constructor(private resolver: ComponentFactoryResolver, private service: DataServiceService,private bookService: BookServiceService,private cookie : CookieService,private router: Router) {
    this.bookService = bookService;
    this.msg="";
  }

  createComponent() {
    this.entry.clear();

    const factory = this.resolver.resolveComponentFactory(AddBooksComponent);
    this.componentRef = this.entry.createComponent(factory);

  }

  ngOnInit() {
    console.log(this.cookie.get("booksIssued") + "A");
  }
  
  

  check(booknm: string) {

    this.books = [];
    this.book_id=[];  
    this.service.getBooks().subscribe(res => {
      this.booksInLibrary = res;

      for (var book of this.booksInLibrary) {

        if (((String(book.bookNm)).includes(booknm)) == true && book.numberOfCopies > 0) {
          var cur = book.bookNm ;

          this.book_id.push(book._id);

          this.books.push(String(cur));
        }
      }
    });

    this.sendBooks();
    this.sendBookId();

    this.createComponent();
  }

  private sendBooks(): void {
    this.bookService.setBooks(this.books);
  }

  private sendBookId(): void {
    this.bookService.setBookId(this.book_id);
  }

  data : issuedBooksDetails
  issue() {
    console.log("YES");
    var date = new Date();
    date = new Date(date.setDate(date.getDate() + 15));
    this.data = {
      "bookNm": this.cookie.get("bookNm"),
      "studentId":  this.cookie.get("userID"),
      "bookId": 'BB' + Math.random().toString(36).substr(2, 8).toUpperCase(),
      "issueDate": new Date(),
      "returnDate": date,
      "returned": false,
    }
    this.service.registerIssuedBooks(this.data).subscribe(res => { });
    console.log(this.data);
    this.msg="Book has been issued successfully";

    // window.location.reload();


  }

  save(nm){
    console.log(nm);
  }
}