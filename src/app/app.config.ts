import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners, provideZoneChangeDetection,
} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {
  provideKeycloak,
  withAutoRefreshToken,
  createInterceptorCondition,
  includeBearerTokenInterceptor,
  INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
  IncludeBearerTokenCondition, AutoRefreshTokenService, UserActivityService
} from 'keycloak-angular';
import {provideHttpClient, withInterceptors} from '@angular/common/http';

const urlCondition = createInterceptorCondition<IncludeBearerTokenCondition>({
  urlPattern: /^(http:\/\/localhost:8080)(\/.*)?$/i,
  bearerPrefix: 'Bearer',
});

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
      },
      features: [
        withAutoRefreshToken({
          onInactivityTimeout: 'logout',
          sessionTimeout: 60000
        })
      ],
      providers: [
        AutoRefreshTokenService,
        UserActivityService
      ]
    }),
    provideZoneChangeDetection({eventCoalescing: true}),

    {
      provide: INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
      useValue: [urlCondition]
    },

    provideHttpClient(withInterceptors([includeBearerTokenInterceptor]))

  ]
};

