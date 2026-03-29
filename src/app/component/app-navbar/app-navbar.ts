import {ChangeDetectorRef, Component, computed, inject, Injectable, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import Keycloak, {KeycloakProfile} from 'keycloak-js';
import {User} from '../../model/shared/user.model';
import {ThemeService} from '../../services/theme/theme.service';

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

  private readonly keycloak = inject(Keycloak);

  private readonly _isLoggedIn = signal(false);
  private readonly _user = signal<User | null>(null);

  isLoggedIn = computed(() => this._isLoggedIn());
  user = computed(() => this._user());

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.initializeAuth();
  }

  private async initializeAuth() {
    try {
      const loggedIn = this.keycloak.authenticated ?? false;
      this._isLoggedIn.set(loggedIn);

      if (loggedIn) {
        const profile: KeycloakProfile = await this.keycloak.loadUserProfile();
        this.updateUser(profile);
      }
    } catch (error) {
      console.error(error);
    }
  }

  private updateUser(profile: KeycloakProfile) {
    const currentUser: User = {
      active: false, admin: false, createdBy: '', id: '', mfaType: '', password: '', userPrivileges: [], userRoles: [],
      authStatus: 'AUTH',
      username: profile.username || '',
      email: profile.email || ''
    };

    this._user.set(currentUser);

    window.sessionStorage.setItem("userDetails", JSON.stringify(this._user()));
  }

  login() {
    this.keycloak.login();
  }

  logout() {
    const redirectUri = 'http://localhost:4200/';
    this.keycloak.logout();
  }

  async refreshProfile() {
    if (this.keycloak.authenticated) {
      const profile = await this.keycloak.loadUserProfile();
      this.updateUser(profile);
    }
  }

}
