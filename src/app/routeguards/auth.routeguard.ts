import {inject, Injectable} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const stored = sessionStorage.getItem('userdetails');

  if(!stored) {
    router.navigate(['/login']);
    return false;
  }

  const user = JSON.parse(stored);
  const isAuthenticated = !!user?.username?.length;

  if(!isAuthenticated) {
    router.navigate(['/login']);
    return false;
  }
  return true;
}
