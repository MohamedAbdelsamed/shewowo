import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  getAllHomeSlidersUrl, getHomeDataUrl, getNavDataUrl, getProfileUrl, updateName } from './../../assets/backend/api';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getNavData(){
    return this.http.get(getNavDataUrl).pipe(map(res=> res['data']))
  }

  getHomeData(){
    return this.http.get(getHomeDataUrl).pipe(map(res=> res['data']))
  }

  getHomeSlider(){
    return this.http.get(getAllHomeSlidersUrl).pipe(map(res=> res['data']))
  }

  getProfile(){
    return this.http.get(getProfileUrl).pipe(map(res=> res['data']))
  }

  updateName(form){
    return this.http.post(updateName, form )
  }
  
}
