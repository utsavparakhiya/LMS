import { DataServiceService } from './../../data-service.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  found = false;
  student: any = [];
  books: any = [];
  book1: String;
  book2: String;
  book3: String;
  name: String;
  dateOfRegistration: Date;
  phoneNumber: String;
  studentId: String;
  gender: String;
  emailId: String;
  issuedBooks: Number;
  valid = true;
  constructor(private servie: DataServiceService, private cookie: CookieService) { }

  ngOnInit(): void {

    this.book1 = "No book issued so far";
    this.servie.getStudent().subscribe(res => {
      this.student = res;

      console.log(this.student);
      for (var s of this.student) {
        if (s.studentId == this.cookie.get("userID") && s.password == this.cookie.get("paswd")) {
          this.name = s.name;
          this.dateOfRegistration = s.dateOfRegistration;
          this.phoneNumber = s.phoneNumber;
          this.gender = s.gender;
          this.studentId = s.studentId;
          this.issuedBooks = Number(s.issuedBooks);
          this.emailId = s.emailId;
          this.found = true;
          break;
        }
      }


    });

    // console.log(this.found);

    // if(this.found)
    // {
    this.servie.getIssuedBooks().subscribe(res => {
      // this.student = res;
      this.books = res;

      console.log(this.books);

      var i = 1;

      for (var b of this.books) {
        console.log(i);
        if (b.studentId == this.cookie.get("userID")) {
          if (i == 1) {
            this.book1 = b.bookNm;
          }

          if (i == 2) {
            this.book2 = b.bookNm;
          }

          if (i == 3) {
            this.book3 = b.bookNm;
          }

          i++;
        }
        }


      });
  }






}