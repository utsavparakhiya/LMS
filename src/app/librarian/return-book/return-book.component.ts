import { DataServiceService } from './../../data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.css']
})
export class ReturnBookComponent implements OnInit {

  issuedBooks: any[];
  students: any[];
  returned = true;
  msg = "";

  constructor(private service: DataServiceService) { }

  ngOnInit(): void {
  }

  returnBook(stdid: String, bkid: String) {
    this.service.getIssuedBooks().subscribe(res => {
      this.issuedBooks = res;
      var found = false;
      for (var book of this.issuedBooks) {
        if (book.bookId == bkid && book.studentId == stdid && book.returned == false) {
          console.log("Ssmnamsk");
          found = true;
          this.service.returnIssuedBooks(book).subscribe(res => { });
          this.service.updateReturnedBook(book).subscribe(res => { });
          break;
        }
        console.log(book.bookId);
      }
      if (found == false) {
        this.msg = "Incorrect Book ID / Student ID";
      }
      else
      {
        this.msg = "Book has been returned successfully";
      }
    });



  }
}
