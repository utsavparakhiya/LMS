import { DataServiceService } from './../data-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  valid = true;
  students: any[];

  constructor(private router: Router, private cookie: CookieService, private service: DataServiceService) { }

  ngOnInit(): void {
    console.log(this.cookie.get("userID"));
  }

  check(usr: string, pswd: string) {

    if (usr == "18CEUOG035" && pswd == "Utsav1234") {
      this.cookie.set("userID", usr, 50000);
      this.cookie.set("paswd", pswd, 50000);
      this.router.navigate(['/librarian/home']);
    }
    this.valid = true;
    this.service.getStudent().subscribe(res => {
      this.students = res;

      console.log(usr);
      console.log(pswd);

      for (var s of this.students) {
        if (s.studentId == usr && s.password == pswd) {
          this.cookie.set("userID", usr, 50000);
          this.cookie.set("paswd", pswd, 50000);
          this.cookie.set("booksIssued", s.issuedBooks, 50000);
          this.router.navigate(['/student/home']);
        }
      }
    });


    this.valid = false;

  }
}
