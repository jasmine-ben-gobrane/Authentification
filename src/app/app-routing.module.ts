import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { LoginComponent } from './login/login.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path:'acceuil', component:AcceuilComponent},
  { path:'register', component:RegisterComponent}
]; // sets up routes constant where you define your routes



@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
