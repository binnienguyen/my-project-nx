import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import {LoginComponent} from "../login/login.component";
import {RegisterComponent} from "../register/register.component";

export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntryComponent },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login Page'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register Page'
  }
];
