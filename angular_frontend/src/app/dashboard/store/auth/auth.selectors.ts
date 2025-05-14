import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Auth } from '../../types/auth.model';

// Feature selector for the auth state
export const selectAuthState = createFeatureSelector<Auth>('auth');

export const selectLoader = createSelector(
  selectAuthState,
  (state: Auth) => state.loader
);

export const selectSuccessMessage = createSelector(
  selectAuthState,
  (state: Auth) => state.successMessage
);

export const selectErrorMessage = createSelector(
  selectAuthState,
  (state: Auth) => state.errorMessage
);

export const selectUserInfo = createSelector(
  selectAuthState,
  (state: Auth) => state.userInfo
);
// seller register 


export const selectSellerRegisterLoader = createSelector(
  selectAuthState,
  (state: Auth) => state.loader
);

export const selectSellerRegisterSuccessMessage = createSelector(
  selectAuthState,
  (state: Auth) => state.successMessage
);

export const selectSellerRegisterErrorMessage = createSelector(
  selectAuthState,
  (state: Auth) => state.errorMessage
);

export const selectSellerRegisterUserInfo = createSelector(
  selectAuthState,
  (state: Auth) => state.userInfo
);

// seller Login
// Individual selectors for specific properties
export const selectSellerLoginLoader = createSelector(
  selectAuthState,
  (state: Auth) => state.loader
);

export const selectSellerLoginSuccessMessage = createSelector(
  selectAuthState,
  (state: Auth) => state.successMessage
);

export const selectSellerLoginErrorMessage = createSelector(
  selectAuthState,
  (state: Auth) => state.errorMessage
);

export const selectSellerLoginUserInfo = createSelector(
  selectAuthState,
  (state: Auth) => state.userInfo
);