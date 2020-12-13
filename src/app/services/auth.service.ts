import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login, signUpUrl, vendorSignUpUrl } from './../../assets/backend/api';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  vendorSignUP(form){
    return this.http.post(vendorSignUpUrl, form).pipe(map((res:any)=>res.data));
  }

  signUP(form){
    return this.http.post(signUpUrl, form).pipe(map((res:any)=>res.data));
  }

  
  login(form){
    return this.http.post(login, form).pipe(map((res:any)=>res.data));
  }
}
