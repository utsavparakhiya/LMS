import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './../../data-service.service';

@Component({
  selector: 'app-getstudents',
  templateUrl: './getstudents.component.html',
  styleUrls: ['./getstudents.component.css']
})

export class GetstudentsComponent implements OnInit {
  student: any;

  constructor(private servie: DataServiceService) { }

  ngOnInit(): void {
    this.servie.getStudent().subscribe(res => {
      this.student = res;
    });
  }

  

}
