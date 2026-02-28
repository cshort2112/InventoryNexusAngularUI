import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Orders } from './app/component/orders/orders';
import { Login } from './app/component/login/login';

const routes = [
  { path: '/', component: App },
  { path: '/orders', component: Orders },
  { path: '/login', component: Login },
];


bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
