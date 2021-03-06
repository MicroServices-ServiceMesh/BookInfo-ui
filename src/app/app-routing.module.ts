import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookUpdateComponent } from './components/book-update/book-update.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'bookDetails' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'bookDetails',
    component: BookDetailsComponent,
    canActivate: [AuthGuard],
    data: { roles: ['BookInfo/read', 'BookInfo/update'] },
  },
  {
    path: 'updateBook',
    component: BookUpdateComponent,
    canActivate: [AuthGuard],
    data: { roles: ['BookInfo/read', 'BookInfo/update'] },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
