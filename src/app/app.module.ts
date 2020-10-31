import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LibrarianModule } from './librarian/librarian.module';
import { StudentModule } from './student/student.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';
import { AddBooksComponent } from './student/add-books/add-books.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StudentModule,
    HttpClientModule,
    LibrarianModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddBooksComponent]
})
export class AppModule { }
