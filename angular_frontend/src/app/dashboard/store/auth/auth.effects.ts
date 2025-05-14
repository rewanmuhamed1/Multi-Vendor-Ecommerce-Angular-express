import { UserInfo } from './../../types/auth.model';
import { Routes } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { login, loginFailure, loginSuccess, setLoader , sellerRegister , 
  sellerRegisterSuccess ,sellerRegisterFailure  , sellerLoginFailure , sellerLoginSuccess ,sellerLogin,
  getUser , setUser } from './auth.action';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login), // ngrx Listen for the 'login' action //filters an Observable of Actions
      exhaustMap(action =>
        this.authService.getLoginUser(action.email, action.password).pipe(
          tap(console.log),
          map(user => {
            const { token, message } = user;
            if(token){
              localStorage.setItem('accessToken',token);
            }
           
              return loginSuccess({ user: { token, message } });
         
           
          }),
          catchError(error => {
            // Dispatch 'loginFailure' if the API call fails
          //  console.log(error);
            return of(loginFailure({error:error.error.error}));
          })
        )
      )
    )
  );

// seller register effect 
  sellerRegister$ = createEffect(() =>
    this.actions$.pipe(
      ofType(sellerRegister), // ngrx Listen for the 'sellerRegister' action //filters an Observable of Actions
      exhaustMap(action =>
        this.authService.registerSeller(action).pipe(
          tap(console.log),
          map(seller => {
            const { token, message } = seller;
            if(token){
              localStorage.setItem('accessToken',token);
            }
           
              return sellerRegisterSuccess({ user: { token, message } });
         
           
          }),
          catchError(error => {
            // Dispatch 'loginFailure' if the API call fails
          //  console.log(error);
            return of(sellerRegisterFailure({error:error.error.error}));
          })
        )
      )
    )
  );

  // seller login effect 
  SellerLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(sellerLogin), // ngrx Listen for the 'login' action //filters an Observable of Actions
      exhaustMap(action =>
        this.authService.getLoginSeller(action.email, action.password).pipe(
          tap(console.log),
          map(user => {
            const { token, message } = user;
            if(token){
              localStorage.setItem('accessToken',token);
            }
           
              return sellerLoginSuccess({ user: { token, message } });
         
           
          }),
          catchError(error => {
            // Dispatch 'loginFailure' if the API call fails
          //  console.log(error);
            return of(sellerLoginFailure({error:error.error.error}));
          })
        )
      )
    )
  );

  // get user info 

  // seller login effect 
  GetUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUser), // now this works with no payload
      exhaustMap(() =>
        this.authService.getUser().pipe(
          tap(user =>(console.log('effect user ', user.userInfo))),
          map(user => setUser({user })) // dispatch with user data
        )
      )
    )
  );

}