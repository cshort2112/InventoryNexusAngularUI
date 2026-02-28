import { Routes } from '@angular/router';
import {Orders} from './component/orders/orders';
import {Landing} from './component/landing/landing';
import {Login} from './component/login/login';

export const routes: Routes = [
  { path: '', component: Landing},
  { path: 'orders', component: Orders },
  { path: 'login', component: Login }
];
