import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Orders } from './app/orders/orders';

const routes = [
  { path: '/', component: App },
  { path: '/orders', component: Orders }
];


bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
