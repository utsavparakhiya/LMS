import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private books : String[];
  private book_id : String[];

  constructor() { }

  public setBooks(books):void{
    this.books=books;
  }

  public getBooks() : String[]{
    return this.books;
  }

  public setBookId(book_id):void{
    this.book_id=book_id;
  }

  public getBookId() : String[]{
    return this.book_id;
  }

}
