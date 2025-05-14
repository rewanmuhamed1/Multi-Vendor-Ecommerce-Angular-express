import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,of} from 'rxjs';
import { SellerRegister, UserInfo } from '../types/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl= "http://localhost:5000/api";
  constructor(private http:HttpClient) { }
   getLoginUser( email:string , password:string) : Observable<{ token: string; message: string }>{

    
    return  this.http.post<{ token: string; message: string }>(this.baseUrl+'/admin-login', {email , password}, {  withCredentials: true });
    
     
  }

  registerSeller( sellerData : SellerRegister ) : Observable<{ token: string; message: string }>{

    
    return  this.http.post<{ token: string; message: string }>(this.baseUrl+'/seller-register ', sellerData, {  withCredentials: true });
    
     
  }

  getLoginSeller( email:string , password:string) : Observable<{ token: string; message: string }>{

    
    return  this.http.post<{ token: string; message: string }>(this.baseUrl+'/seller-login', {email , password}, {  withCredentials: true });
    
     
  }
  getUser( ) : Observable<UserInfo>{

    
    return  this.http.get<UserInfo>(this.baseUrl+'/get-user', {  withCredentials: true });
    
     
  }
}
