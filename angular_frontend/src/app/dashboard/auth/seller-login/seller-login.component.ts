import { Auth } from './../../types/auth.model';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook , faGoogle} from '@fortawesome/free-brands-svg-icons';
import { Store } from '@ngrx/store';
import { sellerLoginClearErrorMessage,sellerLoginClearSuccessMessage , sellerLogin ,getUser } from '../../store/auth/auth.action';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { Observable } from 'rxjs';
import { selectSellerLoginLoader ,selectSellerLoginErrorMessage ,selectSellerLoginSuccessMessage ,selectAuthState } from '../../store/auth/auth.selectors';
import { CommonModule ,NgIf } from '@angular/common';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-login',
  imports: [FormsModule ,FontAwesomeModule, MatProgressBarModule,NgIf ,CommonModule],
  templateUrl: './seller-login.component.html',
  styleUrl: './seller-login.component.css'
})
export class SellerLoginComponent {
faFacebook = faFacebook; // font awsome facebook icon 
  faGoogle = faGoogle; // font awsome google icon 
  loader$: Observable<boolean>; //login loader
  successMessage$: Observable<string>; 
  errorMessage$: Observable<string>;
  auth$ : Observable<Auth> ;

  constructor(private store: Store , private toastr: ToastrService , private router : Router){ // ngrx store 
    this.loader$ = this.store.select(selectSellerLoginLoader);
    this.successMessage$ = this.store.select(selectSellerLoginSuccessMessage);
    this.errorMessage$ = this.store.select(selectSellerLoginErrorMessage);
        this.auth$ = this.store.select(selectAuthState);
    
  }

  ngOnInit() {
     this.errorMessage$.pipe(
      tap(errorMessage => console.log('error:',  errorMessage))
    ).subscribe();

    this.successMessage$.subscribe((message) => {
      if (message) {
        this.showSuccess(message);
        this.store.dispatch(sellerLoginClearSuccessMessage()); // clear message action to reducer  if delete it toaster sucess message appear only one time 
               this.store.dispatch(getUser());
       
        this.router.navigate(['seller/dashboard']);
      }
    }); 


    this.errorMessage$.subscribe((message) => {
      if (message) {
        this.showError(message);
        this.store.dispatch(sellerLoginClearErrorMessage()); // clear message action to reducer  if delete it toaster sucess message appear only one time 

      }
    }); 

    this.auth$.pipe(
      tap(auth => console.log('auth:',  auth))
    ).subscribe();

   }


  loginSubmit(loginForm:NgForm){
  //console.log("login" , loginForm.value);
  this.store.dispatch(sellerLogin({ email: loginForm.value.email, password: loginForm.value.password }));
    }

    showSuccess(message: string) {
      this.toastr.success(message);
    }

    showError(message: string) {
      this.toastr.error(message);
    }
}
