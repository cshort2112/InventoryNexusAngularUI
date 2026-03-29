import {ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateFn, UrlTree} from '@angular/router';
import {inject} from '@angular/core';
import {createAuthGuard, AuthGuardData} from 'keycloak-angular';
import Keycloak from 'keycloak-js';

const isAccessAllowed = async (
  route: ActivatedRouteSnapshot,
  _: RouterStateSnapshot,
  authData: AuthGuardData
): Promise<boolean | UrlTree> => {
  const {authenticated, grantedRoles} = authData;
  const keycloak = inject(Keycloak);
  const requiredRoles: string[] = route.data?.['roles'] || [];

  if (requiredRoles.length > 0) {
    const router = inject(Router);
    if (!authenticated) {
      await keycloak.login();
      return false;
    }

    const userRoles: string[] = [
      ...(grantedRoles.realmRoles || []),
      ...Object.values(grantedRoles.resourceRoles || {}).flat()
    ];

    const hasAccess =
      requiredRoles.some(role => userRoles.includes(role));

    if (authenticated && hasAccess) {
      return true;
    }

    return router.parseUrl('/forbidden');
  } else {
    // this endpoint doesn't need authentication.
    return true;
  }
};

export const canActivateAuthRole = createAuthGuard<CanActivateFn>(isAccessAllowed);
