import { createAction, props } from '@ngrx/store';
import { UserInfo } from '../../types/auth.model';

export const login = createAction(
  '[Login Page] Login',
  props<{ email: string; password: string }>()
);

export const setLoader = createAction(
  '[Auth] Set Loader',
  props<{ loader: boolean }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: { token: string; message: string ; } }>()
);

export const clearSuccessMessage = createAction(
  '[Auth] Clear Success Message'
); 

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

export const clearErrorMessage = createAction(
  '[Auth] Clear Error Message'
); 

// seller register actions 


export const sellerRegister = createAction(
  '[seller] Register',
  props<{ name: string ,email: string; password: string }>()
);

export const sellerRegisterLoader = createAction(
  '[Seller Register]  Loader',
  props<{ loader: boolean }>()
);

export const sellerRegisterSuccess = createAction(
  '[Seller Register] Success',
  props<{ user: { token: string; message: string ; } }>()
);

export const sellerRegisterClearSuccessMessage = createAction(
  '[Seller Register] Clear Success Message'
); 

export const sellerRegisterFailure = createAction(
  '[Seller Register]  Failure',
  props<{ error: string }>()
);

export const sellerRegisterClearErrorMessage = createAction(
  '[Seller Register] Clear Error Message'
); 

// seller login 
export const sellerLogin = createAction(
  '[Seller Login] ',
  props<{ email: string; password: string }>()
);

export const sellerLoginSuccess = createAction(
  '[Seller Login]  Success',
  props<{ user: { token: string; message: string ; } }>()
);

export const sellerLoginClearSuccessMessage = createAction(
  '[Seller] Clear Success Message'
); 

export const sellerLoginFailure = createAction(
  '[Seller Login]  Failure',
  props<{ error: string }>()
);

export const sellerLoginClearErrorMessage = createAction(
  '[Seller] Clear Error Message'
); 
// get user

// Action to trigger the fetch (no payload)
export const getUser = createAction('[Get User]');

// Action to set the user once received
export const setUser = createAction('[Set User]', props<{ user: UserInfo }>());
