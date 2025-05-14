import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook , faGoogle} from '@fortawesome/free-brands-svg-icons';
import { Store } from '@ngrx/store';
import { login , clearSuccessMessage , clearErrorMessage , getUser} from '../../store/auth/auth.action';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { Observable } from 'rxjs';
import { selectErrorMessage, selectLoader, selectSuccessMessage } from '../../store/auth/auth.selectors';
import { CommonModule ,NgIf } from '@angular/common';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule ,FontAwesomeModule, MatProgressBarModule,NgIf ,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  faFacebook = faFacebook; // font awsome facebook icon 
  faGoogle = faGoogle; // font awsome google icon 
  loader$: Observable<boolean>; //login loader
  successMessage$: Observable<string>; 
  errorMessage$: Observable<string>;

  constructor(private store: Store , private toastr: ToastrService , private router: Router ){ // ngrx store 
    this.loader$ = this.store.select(selectLoader);
    this.successMessage$ = this.store.select(selectSuccessMessage);
    this.errorMessage$ = this.store.select(selectErrorMessage);
  }

  ngOnInit() {
    /*  this.errorMessage$.pipe(
      tap(errorMessage => console.log('error:',  errorMessage))
    ).subscribe(); */   

    this.successMessage$.subscribe((message) => {
      if (message) {
        this.showSuccess(message);
        this.store.dispatch(clearSuccessMessage()); // clear message action to reducer  if delete it toaster sucess message appear only one time 
        this.store.dispatch(getUser());
        this.router.navigate(['/admin/dashboard']); 
        
       
      }
    }); 

    this.errorMessage$.subscribe((message) => {
      if (message) {
        this.showError(message);
        this.store.dispatch(clearErrorMessage()); // clear message action to reducer  if delete it toaster sucess message appear only one time 

      }
    }); 

   }


  loginSubmit(loginForm:NgForm){
  //console.log("login" , loginForm.value);
  this.store.dispatch(login({ email: loginForm.value.email, password: loginForm.value.password }));
    
}

    showSuccess(message: string) {
      this.toastr.success(message);
    }

    showError(message: string) {
      this.toastr.error(message);
    }
}
