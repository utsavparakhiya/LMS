import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private cookie : CookieService) { }

  ngOnInit(): void {
    if(this.cookie.get("userID")=="" || this.cookie.get("paswd")=="")
    {
      this.router.navigate(['/']);
    }
  }

  logout()
  {
    this.cookie.deleteAll();
  }

}
