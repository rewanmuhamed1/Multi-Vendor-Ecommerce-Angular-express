import {
  CanActivateFn,
  Router,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { inject } from '@angular/core';
import {  switchMap, take, tap, of, filter } from 'rxjs';
import { selectAuthState } from '../dashboard/store/auth/auth.selectors';

export const protectRoutesGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot
) => {
  const store = inject(Store);
  const router = inject(Router);
  /*  const childData = route.firstChild?.data || {};
  const requiredRole = childData['role'];
  const requiredStatus = childData['status'];
  const requiredAbility = childData['ability'];
  const allowedStatuses = childData['visibility']; */
  const role = route.data['role'];
  const status = route.data['status'];
  const ability = route.data['ability'];
  const visibility = route.data['visibility'];

  return store.select(selectAuthState).pipe(
    filter((auth)=>!!auth.userInfo?.userInfo), // wait untile get auth.userInfo?.userInfo userinfo
    take(1),
    switchMap((auth) => {
      const user = auth.userInfo?.userInfo;
  
      if (!auth.role) {
        router.navigate(['/seller/login']);
        return of(false);
      }
  console.log('protect route' , user);
      if (!user || auth.role !== role ) {
        router.navigate(['/unauthorized']);
        return of(false);
      }
      if (!role && ability === 'seller'   ) {
        router.navigate(['/seller/dashboard']);
        return of(false);
      }
  
     
  
      // Role check
      if (user.role === role) {
        if (visibility) {
          const isVisible = visibility.some((r: string) => r === user.status);
          if (isVisible) {
            return of(true);
          } else {
            router.navigate(['/seller/account-pending']);
            return of(false);
          }
        }
      }
  
      // Status check
      if (status) {
        if (status === user.status) {
          return of(true);
        } else {
          if (user.status === 'pending') {
            router.navigate(['/seller/account-pending']);
          } else {
            router.navigate(['/seller/account-deactive']);
          }
          return of(false);
        }
      }
  
      return of(true);
})

);}

