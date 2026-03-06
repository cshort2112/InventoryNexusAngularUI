import { Routes } from '@angular/router';
import {Orders} from './component/orders/orders';
import {Landing} from './component/landing/landing';
import {Login} from './component/login/login';
import {About} from './component/about/about';
import {Dashboard} from './component/dashboard/dashboard';
import {authGuard} from './routeguards/auth.routeguard';
import {ContactForm} from './component/contact-form/contact-form';

export const routes: Routes = [
  { path: '', component: Landing},
  { path: 'orders', component: Orders, canActivate: [authGuard]},
  { path: 'login', component: Login },
  { path: 'about', component: About},
  { path: 'contact-form', component: ContactForm},
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard]}
];
