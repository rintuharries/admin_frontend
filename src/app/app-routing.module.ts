import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './sections/home/home.component';
import { PostComponent } from './sections/post/post.component';
import { UsersComponent } from './sections/users/users.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'users', component:UsersComponent },
  { path: 'post', component: PostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
