import { Routes } from '@angular/router';
import {Orders} from './component/orders/orders';
import {Landing} from './component/landing/landing';
import {About} from './component/about/about';
import {Dashboard} from './component/dashboard/dashboard';
import {ContactForm} from './component/contact-form/contact-form';
import {canActivateAuthRole} from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: Landing},
  { path: 'orders', component: Orders, canActivate: [canActivateAuthRole], data: { roles: ['user']}},
  { path: 'admin', component: Orders, canActivate: [canActivateAuthRole], data: { roles: ['admin', 'super-admin']}},
  { path: 'about', component: About},
  { path: 'contact-form', component: ContactForm},
  { path: 'dashboard', component: Dashboard, canActivate: [canActivateAuthRole], data: { roles: ['user']}}
];
