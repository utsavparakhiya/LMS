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
  bookRenewed = false;
  newReturnDate : Date;

  constructor(private service: DataServiceService,private router: Router,private cookie : CookieService) { }

  ngOnInit(): void {
  }

  onSubmit(bookId) {
    var renewed = false;
    this.service.getIssuedBooks().subscribe(res => {
      this.books = res;
      console.log(this.books);
      console.log("A");
      console.log(res);

      for (var book of this.books) {
        if (book.bookId == bookId) {
          renewed = true;
          this.service.updateIssuedBooks(book).subscribe(res => { });
          break;
        }
      }

      if (renewed == false)
      {
        this.bookRenewed = false;
        this.invalid = true;
      }
      else
      {
        this.newReturnDate = new Date();
        this.newReturnDate = new Date(this.newReturnDate.setDate(this.newReturnDate.getDate() + 15));
        this.invalid = false;
        this.bookRenewed = true;
      }


    
    });

  }

}
