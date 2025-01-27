import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  addToCaret, chanePassword, forgetPassword, getAllHomeSlidersUrl, getBestBrandsUrl, getCaret, getCategorySlidersUrl, getHomeDataUrl, getNavDataUrl, getProfileUrl, getSpecificMainCategoryNamesUrl, getSpecificProductUrl, getSubCategoriesUrl, getSubCategoryItemsUrl, updateName } from './../../assets/backend/api';
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

  getProfile(){
    return this.http.get(getProfileUrl).pipe(map(res=> res['data']))
  }

  updateName(form){
    return this.http.post(updateName, form )
  }

  changPassword(password){
    return this.http.post(chanePassword ,password )
  }
  
  getSpecificCategory(id){
    return this.http.get(getSpecificMainCategoryNamesUrl + id).pipe(map(res=> res['data']))
  }

  getCategorySliders(id){
    return this.http.get(getCategorySlidersUrl + id).pipe(map(res=> res['data']))
  }

  getSubCategoryItems(id){
    return this.http.get(getSubCategoryItemsUrl + id).pipe(map(res=> res['data']))
  }

  getCategoryBrands(id){
    return this.http.get(getBestBrandsUrl + id).pipe(map(res=> res['data']))
  }

  addToCaret(item){
    return this.http.post(addToCaret,item)
  }

  getCart(){
    return this.http.get(getCaret).pipe(map(res =>res['data']))
  }
}

