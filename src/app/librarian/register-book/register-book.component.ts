import { DataServiceService } from './../../data-service.service';
import { Component, OnInit } from '@angular/core';
import { bookDetails } from './bookDetails';

@Component({
  selector: 'app-register-book',
  templateUrl: './register-book.component.html',
  styleUrls: ['./register-book.component.css']
})
export class RegisterBookComponent implements OnInit {

  public bookNm: String;
  public isbnNo: String;
  public publisher: String;
  public author1: String;
  public author2: String;
  public author3: String;
  public price: Number;
  public numberOfCopies: Number;
  fullBookNm = "";
  msg="";
  constructor(private service: DataServiceService) { }

  ngOnInit(): void {
  }

  data : bookDetails
  onSubmit() {
    this.fullBookNm = this.bookNm + " by " + this.author1;

    if(this.author2 != null) this.fullBookNm += ", " + this.author2;
    if(this.author3 != null) this.fullBookNm += ", " + this.author3;
    this.data = {
      "bookNm": this.fullBookNm,
      "isbnNo": this.isbnNo,
      "publisher": this.publisher,
      // "author1": this.author1,
      // "author2": this.author2,
      // "author3": this.author3,
      "price": this.price,
      "numberOfCopies": this.numberOfCopies,
      "available": this.numberOfCopies,
    }
    this.service.registerBooks(this.data).subscribe(res => { });
    console.log(this.data);

    this.msg = "Book has been registered successfully";
  }


}
