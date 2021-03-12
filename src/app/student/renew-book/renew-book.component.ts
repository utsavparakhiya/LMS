import { Router } from '@angular/router';
import { DataServiceService } from './../../data-service.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-renew-book',
  templateUrl: './renew-book.component.html',
  styleUrls: ['./renew-book.component.css']
})
export class RenewBookComponent implements OnInit {

  books: any[];
  invalid = false;
  msg = "";
  bookRenewed = false;
  newReturnDate : Date;

  constructor(private service: DataServiceService,private router: Router,private cookie : CookieService) { }

  ngOnInit(): void {
  }

  onSubmit(bookId:String) {
    console.log(bookId);
    var renewed = false;
    console.log("sasa");
    this.service.getIssuedBooks().subscribe(res => {
      console.log("hello");
      this.books = res;
      console.log(this.books);
      console.log("A");
      console.log(res);

      for (var book of this.books) {
        if (book.bookId == bookId) {
          renewed = true;
          console.log("ksjdskdsjk");
          this.service.updateIssuedBooks(book).subscribe(res => { });
          break;
        }
        console.log(book.bookId);
      }

      if (renewed == false)
      {
        this.bookRenewed = false;
        this.invalid = true;
        this.msg="No such book found";
      }
      else
      {
        this.newReturnDate = new Date();
        this.newReturnDate = new Date(this.newReturnDate.setDate(this.newReturnDate.getDate() + 20));
        this.invalid = false;
        this.bookRenewed = true;
        this.msg="Your new date for renew is " + this.newReturnDate.getDate() + "/" + (Number(this.newReturnDate.getMonth())+1) + "/" + this.newReturnDate.getFullYear();
      }


    
    });

    console.log("mkska");

  }

}
