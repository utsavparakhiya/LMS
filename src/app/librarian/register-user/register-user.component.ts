import { DataServiceService } from './../../data-service.service';
import { studentDetails } from './studentDetails';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  public name = '';
  public phoneNumber = '';
  public emailId = '';
  public gender = '';
  public date: Date;
  msg = "";

  constructor(private service: DataServiceService) { }

  ngOnInit(): void {
  }

  data: studentDetails;
  onSubmit() {
    var today = new Date();
    var yyyy = today.getFullYear();
    var password = String((this.date)).replace(/-/g,'/');
    var studentId = yyyy.toString().substr(2,4) + Math.random().toString(36).substr(2, 8).toUpperCase();
    this.data = {
      "name": this.name,
      "emailId": this.emailId,
      "dateOfRegistration": String(today),
      "phoneNumber": this.phoneNumber,
      "gender": this.gender,
      "password": String(password),
      "studentId":studentId,
      "issuedBooks":0,
    }
    this.service.registerStudent(this.data).subscribe(res => {});
    // console.log(this.data);

    this.msg = "Student has been registered with student ID as " + studentId;
  }



}
