import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  getAllHomeSlidersUrl, getHomeDataUrl, getNavDataUrl, getSpecificProductUrl, getSubCategoriesUrl } from './../../assets/backend/api';
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

  getSubCategories(id){
    return this.http.get(getSubCategoriesUrl + id).pipe(map(res=> res['data']));
  }

  getSpecificProduct(id){
    return this.http.get(getSpecificProductUrl + id).pipe(map(res=> res['data'][0]));
  }

  getHomeSlider(){
    return this.http.get(getAllHomeSlidersUrl).pipe(map(res=> res['data']))
  }
}
