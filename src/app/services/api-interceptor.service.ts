import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService {

  
  intercept(req, next){
    let token = (localStorage.getItem('user'))? JSON.parse(localStorage.getItem('user')).token: '';

    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}` 
      }
    });

    return next.handle(tokenizedReq);
}
}
