import { Component, OnInit  } from '@angular/core';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
//import { faGauge } from '@fortawesome/free-solid-svg-icons';
import {allNav} from '../../navigation/allNav';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from '../../types/auth.model';
import { Store } from '@ngrx/store';
import {    selectAuthState} from '../../store/auth/auth.selectors';


@Component({
  selector: 'app-sidebar',
  imports: [FontAwesomeModule ,RouterLink ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
 // faGauge=faGauge;
   allNav :Array<{title:string , icon:IconDefinition ,role?:string , path:string, ability?:string , status?:string , visibility?:string[]}>=  allNav;
   auth$: Observable<Auth> ;
role : string = '';
   constructor(private store: Store) {
    this.auth$ = this.store.select(selectAuthState);
   }

  ngOnInit() {
    
     this.auth$.subscribe((auth)=> {
      if(auth){
        this.role = auth.role  ; 
      }
    });
  }

}
