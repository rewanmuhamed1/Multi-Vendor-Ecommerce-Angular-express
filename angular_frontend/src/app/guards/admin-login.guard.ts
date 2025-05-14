import { Store } from '@ngrx/store';
import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { map, take, tap } from 'rxjs';
import { selectAuthState } from '../dashboard/store/auth/auth.selectors';

export const adminLoginGuard: CanMatchFn = () => {
  const store = inject(Store);
  const router = inject(Router);
 
 return store.select(selectAuthState).pipe(
  take(1),
  tap(auth => console.log('admin guard auth :',  auth)),
  map(auth => {
    
    if (auth.role === 'admin') {
      router.navigate(['/admin/dashboard']);
      return false;
    }else {
      //router.navigate(['/admin/dashboard']); 
       return true;
    }
})
 );


};
