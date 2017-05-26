import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {WelcomeComponent} from './components/welcome/welcome.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {MainComponent} from './components/main/main.component';
import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'welcome',
    pathMatch: 'full',
    component: WelcomeComponent
  },
  {
    path: 'register',
    pathMatch: 'full',
    component: RegisterComponent
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
