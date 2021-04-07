import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './../../data-service.service';

@Component({
  selector: 'app-get-books',
  templateUrl: './get-books.component.html',
  styleUrls: ['./get-books.component.css']
})
export class GetBooksComponent implements OnInit {
  books: any;

  constructor(private servie: DataServiceService) { }

  ngOnInit(): void {
    this.servie.getBooks().subscribe(res => {
      this.books = res;
    });
  }

}
