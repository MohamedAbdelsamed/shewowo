import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forgetPassword, login, signUpUrl, vendorSignUpUrl } from './../../assets/backend/api';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token;
  userLogged:boolean;
  constructor(private http: HttpClient) {
    this.getToken();
   }

  vendorSignUP(form){
    return this.http.post(vendorSignUpUrl, form).pipe(map((res:any)=>res.data));
  }

  signUP(form){
    return this.http.post(signUpUrl, form).pipe(map((res:any)=>res.data));
  }


  isUserLogedIn(){
    if(this.isTokenExpired(this.token)){
      return this.userLogged = false;
    }
    
    return this.userLogged = true;

  }

  login(form){
    return this.http.post(login, form).pipe(map((res:any)=>res.data));
  }

  forgetPassword(email){
    return this.http.post(forgetPassword , email)
  }

  getToken(){
    this.token = localStorage.getItem('token')

    if(this.token){
      return JSON.parse(this.token)
    }

    return  null;
  }

  isTokenExpired(token: string) {
    if(!token) return true;
    
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

}
