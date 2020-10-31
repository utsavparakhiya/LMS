import { DataServiceService } from './../../data-service.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  student: any = [];
  name: String;
  dateOfRegistration: Date;
  phoneNumber: String;
  studentId: String;
  gender: String;
  emailId: String;
  issuedBooks: Number;
  valid = true;
  constructor(private servie: DataServiceService,private cookie : CookieService) { }

  ngOnInit(): void {
    this.servie.getStudent().subscribe(res => {
      this.student = res;

      for (var s of this.student) {
        if (s.studentId == this.cookie.get("userID") && s.password == this.cookie.get("paswd")) {
          this.name = s.name;
          this.dateOfRegistration = s.dateOfRegistration;
          this.phoneNumber = s.phoneNumber;
          this.gender=s.gender;
          this.studentId=s.studentId;
          this.issuedBooks=s.issuedBooks;
          this.emailId=s.emailId;
        }
      }
    });


  }




}