import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook , faGoogle} from '@fortawesome/free-brands-svg-icons';
import { Store } from '@ngrx/store';
import { sellerRegister , sellerRegisterClearSuccessMessage , sellerRegisterClearErrorMessage} from '../../store/auth/auth.action';
import { Observable } from 'rxjs';
import {  selectSellerRegisterSuccessMessage, selectSellerRegisterLoader , selectSellerRegisterErrorMessage } from '../../store/auth/auth.selectors';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { CommonModule ,NgIf } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@Component({
  selector: 'app-register',
  imports: [FormsModule , FontAwesomeModule ,NgIf ,CommonModule , MatProgressBarModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  faFacebook = faFacebook;
  faGoogle = faGoogle;
  loader$: Observable<boolean>; //login loader
   successMessage$: Observable<string>; 
    errorMessage$: Observable<string>;

constructor(private store: Store , private toastr: ToastrService ){ // ngrx store 
this.loader$ = this.store.select(selectSellerRegisterLoader);
    this.successMessage$ = this.store.select(selectSellerRegisterSuccessMessage);
    this.errorMessage$ = this.store.select(selectSellerRegisterErrorMessage);
    
  }
 
ngOnInit() {
     this.errorMessage$.pipe(
      tap(errorMessage => console.log('error:',  errorMessage))
    ).subscribe();   
    this.successMessage$.subscribe((message) => {
      if (message) {
        this.showSuccess(message);
        this.store.dispatch(sellerRegisterClearSuccessMessage()); // clear message action to reducer  if delete it toaster sucess message appear only one time 

      }
    }); 

    this.errorMessage$.subscribe((message) => {
      if (message) {
        this.showError(message);
        this.store.dispatch(sellerRegisterClearErrorMessage()); // clear message action to reducer  if delete it toaster sucess message appear only one time 

      }
    });  

   }


   registerSubmit(registerForm:NgForm){
  //console.log("login" , loginForm.value);
 
  this.store.dispatch(sellerRegister(registerForm.value));
    }

    showSuccess(message: string) {
      this.toastr.success(message);
    }

    showError(message: string) {
      this.toastr.error(message);
    }
}
