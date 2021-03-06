import { GetBooksComponent } from './librarian/get-books/get-books.component';
import { GetstudentsComponent } from './librarian/getstudents/getstudents.component';
import { ChatbotComponent } from './student/chatbot/chatbot.component';
import { FeedbackComponent } from './student/feedback/feedback.component';
import { ContactusComponent } from './student/contactus/contactus.component';
import { AboutusComponent } from './student/aboutus/aboutus.component';

import { ReturnBookComponent } from './librarian/return-book/return-book.component';
import { RemoveUserComponent } from './librarian/remove-user/remove-user.component';
import { RegisterUserComponent } from './librarian/register-user/register-user.component';
import { RegisterBookComponent } from './librarian/register-book/register-book.component';
import { LibrarianHomeComponent } from './librarian/librarian-home/librarian-home.component';
import { RenewBookComponent } from './student/renew-book/renew-book.component';
import { IssueBookComponent } from './student/issue-book/issue-book.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '',component:IndexComponent,pathMatch:'full'},
  { path: 'student/home', component: StudentHomeComponent},
  { path: 'student/issuebook', component: IssueBookComponent},
  { path: 'student/renewbook', component: RenewBookComponent},
  { path: 'librarian/home', component: LibrarianHomeComponent},
  { path: 'librarian/registerBook', component: RegisterBookComponent},
  { path: 'librarian/registerUser', component: RegisterUserComponent},
  { path: 'librarian/removeUser', component: RemoveUserComponent},
  { path: 'librarian/returnBook', component: ReturnBookComponent},
  { path: 'student/aboutus', component: AboutusComponent},
  { path: 'student/contactus', component: ContactusComponent},
  { path: 'student/feedback', component: FeedbackComponent},
  { path: 'student/chatbot', component: ChatbotComponent},
  { path: 'librarian/registeredStudents', component: GetstudentsComponent},
  { path: 'librarian/registeredBooks', component: GetBooksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
