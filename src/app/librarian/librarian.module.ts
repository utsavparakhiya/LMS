import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrarianHomeComponent } from './librarian-home/librarian-home.component';
import { HeaderComponent } from './header/header.component';
import { RegisterBookComponent } from './register-book/register-book.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RemoveUserComponent } from './remove-user/remove-user.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, LibrarianHomeComponent,FooterComponent, RegisterBookComponent, RegisterUserComponent, RemoveUserComponent, ReturnBookComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class LibrarianModule { }
