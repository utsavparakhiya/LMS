import { issuedBooksDetails } from './student/issue-book/issuedBooksDetails';
import { studentDetails } from './librarian/register-user/studentDetails';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { bookDetails } from './librarian/register-book/bookDetails';

export const httpOptions = {
	headers: new HttpHeaders({
	  'Content-Type': 'application/json'
	})
}

@Injectable({
	providedIn: 'root'	
})
export class DataServiceService {

	public questions: any=[];
	public selections: any=[];
	constructor( private http: HttpClient) { }

	registerStudent(data:studentDetails): Observable<any> {
		return this.http.post('http://localhost:3000/registerUser',JSON.stringify(data),httpOptions);
		// return this.http.post('https://rtoexam.herokuapp.com/getrandomNquestion',JSON.stringify(data),httpOptions);
	}
	getStudent(): Observable<any> {
		return this.http.get('http://localhost:3000/getStudent')
	}

	registerBooks(data:bookDetails): Observable<any> {
		return this.http.post('http://localhost:3000/registerBooks',JSON.stringify(data),httpOptions);
	}
	getBooks(): Observable<any> {
		return this.http.get('http://localhost:3000/getBooks')
	}

	registerIssuedBooks(data:issuedBooksDetails): Observable<any> {
		return this.http.post('http://localhost:3000/registerIssuedBooks',JSON.stringify(data),httpOptions);
	}
	getIssuedBooks(): Observable<any> {
		return this.http.get('http://localhost:3000/getIssuedBooks')
	}

	updateIssuedBooks(data1:issuedBooksDetails): Observable<any> {
		console.log("hello check 1");
		console.log(data1);
		return this.http.post('http://localhost:3000/updateIssuedBooks',JSON.stringify(data1),httpOptions)
	}

	returnIssuedBooks(data1:issuedBooksDetails): Observable<any> {
		console.log("hello check 1");
		console.log(data1);
		return this.http.post('http://localhost:3000/returnIssuedBooks',JSON.stringify(data1),httpOptions)
	}

	deleteStudent(data:String): Observable<any> {
		console.log("hello check 1");
		console.log(data);
		return this.http.delete<any>('http://localhost:3000/deleteStudent/' + data)
	}
}
