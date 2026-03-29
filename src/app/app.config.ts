import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners, provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {provideKeycloak} from 'keycloak-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    provideKeycloak({
      config: {
        url: 'http://localhost:8180',
        realm: 'InventoryNexus',
        clientId: 'inventorynexuspublic'
      },
      initOptions: {
        pkceMethod: 'S256',
        redirectUri: window.location.href,
        onLoad: 'check-sso',
        checkLoginIframe: false,
        checkLoginIframeInterval: 0
      }
    }),
    provideZoneChangeDetection({eventCoalescing: true})

  ]
};
