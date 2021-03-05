import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { RenewBookComponent } from './renew-book/renew-book.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [HeaderComponent, StudentHomeComponent, IssueBookComponent, RenewBookComponent, AddBooksComponent, FooterComponent, ContactusComponent, AboutusComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [DatePipe,UpperCasePipe],
  entryComponents: [AddBooksComponent]
})
export class StudentModule { }
