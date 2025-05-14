import { Action, createReducer, on } from '@ngrx/store';
import { Auth , UserInfo } from '../../types/auth.model';
import { login, loginFailure, loginSuccess, clearSuccessMessage ,clearErrorMessage ,
  sellerRegister ,  sellerRegisterFailure , sellerRegisterSuccess , sellerRegisterClearSuccessMessage , sellerRegisterClearErrorMessage,
sellerLogin , sellerLoginFailure , sellerLoginSuccess , sellerLoginClearSuccessMessage , sellerLoginClearErrorMessage , setUser } from './auth.action';
import { jwtDecode } from "jwt-decode";


interface DecodedToken {
  exp?: number;
  role?: string;
}

const returnRole = (token: string | null): string => {
  if (!token) return '';

  const decodedToken: DecodedToken = jwtDecode(token);
  const expireTime = decodedToken.exp ? new Date(decodedToken.exp * 1000) : null;

  if (!expireTime || new Date() > expireTime) {
    localStorage.removeItem('accessToken');
    return '';
  }

  return decodedToken.role ?? '';
};



const initialState  : Auth = {
  successMessage: '',
  errorMessage: '',
  loader: false,
  token : localStorage.getItem('accessToken') || '',
  role: returnRole(localStorage.getItem('accessToken') ),
  userInfo : null
};



export const authReducer = createReducer(
  initialState ,
  on(login, state => ({ ...state, loader: true })),
  on(loginSuccess, (state, { user }) => ({
    ...state,
    loader: false,
    successMessage: user.message,
    token: user.token ,
    role: returnRole(user.token)
  })),
  on(clearSuccessMessage ,state => ({
    ...state , 
    successMessage:''
  }) )
  ,
  on(loginFailure, (state, { error }) => ({
    ...state,
    loader: false,
    errorMessage: error
  })),
  on(clearErrorMessage ,state => ({
    ...state , 
    errorMessage:''
  }) )
  ,
// seller register 

on(sellerRegister, state => ({ ...state, loader: true })),
  on(sellerRegisterSuccess, (state, { user }) => ({
    ...state,
    loader: false,
    successMessage: user.message,
    token: user.token ,
    role: returnRole(user.token)
  })),
  on(sellerRegisterClearSuccessMessage ,state => ({
    ...state , 
    successMessage:''
  }) )
  ,
  on(sellerRegisterFailure, (state, { error }) => ({
    ...state,
    loader: false,
    errorMessage: error
  })),
  on(sellerRegisterClearErrorMessage ,state => ({
    ...state , 
    errorMessage:''
  }) ),

// seller login 
on(sellerLogin, state => ({ ...state, loader: true })),
  on(sellerLoginSuccess, (state, { user }) => ({
    ...state,
    loader: false,
    successMessage: user.message,
    token: user.token ,
    role: returnRole(user.token)
  })),
  on(sellerLoginClearSuccessMessage ,state => ({
    ...state , 
    successMessage:''
  }) )
  ,
  on(sellerLoginFailure, (state, { error }) => ({
    ...state,
    loader: false,
    errorMessage: error
  })),
  on(sellerLoginClearErrorMessage ,state => ({
    ...state , 
    errorMessage:''
  }) ),
  // get user
  on(setUser, (state, { user }) => ({
    ...state,
    loader: false,
    userInfo : user
  })),
);


