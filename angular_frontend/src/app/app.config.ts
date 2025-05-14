import { provideStore } from '@ngrx/store';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { authReducer } from './dashboard/store/auth/auth.reducer';
import { AuthEffects } from './dashboard/store/auth/auth.effects';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { CategoryEffects } from './dashboard/store/category/category.effects';
import { categoryReducerFunction } from './dashboard/store/category/category.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), 
     provideStore({ auth: authReducer , category : categoryReducerFunction }),
      provideEffects([AuthEffects , CategoryEffects]),
      provideHttpClient(), provideAnimationsAsync(),
      provideAnimations(), // required animations providers
    provideToastr({
      closeButton:true ,
      timeOut:1500
    }), provideCharts(withDefaultRegisterables()), // Toastr providers
    ]
};
