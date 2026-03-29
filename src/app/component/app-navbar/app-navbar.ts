import {ChangeDetectorRef, Component, computed, effect, inject, Injectable, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import Keycloak, {KeycloakProfile} from 'keycloak-js';
import {User} from '../../model/shared/user.model';
import {ThemeService} from '../../services/theme/theme.service';
import {KEYCLOAK_EVENT_SIGNAL, KeycloakEventType, ReadyArgs, typeEventArgs} from 'keycloak-angular';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage
  ],
  templateUrl: './app-navbar.html',
  styleUrl: './app-navbar.css',
})

@Injectable({
  providedIn: 'root'
})
export class AppNavbar {


  themeService = inject(ThemeService);

  authenticated = false;

  constructor(private readonly keycloak: Keycloak) {
    const keycloakSignal = inject(KEYCLOAK_EVENT_SIGNAL);

    effect(() => {
      const keycloakEvent = keycloakSignal();

      if (keycloakEvent.type === KeycloakEventType.Ready) {
        this.authenticated = typeEventArgs<ReadyArgs>(keycloakEvent.args);
      }

      if (keycloakEvent.type === KeycloakEventType.AuthLogout) {
        this.authenticated = false;
      }
    });
  }

  login() {
    this.keycloak.login();
  }

  logout() {
    this.keycloak.logout();
  }

}
