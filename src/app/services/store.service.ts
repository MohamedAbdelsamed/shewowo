import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  getSubCategory$ = new BehaviorSubject(null);
  navData$ = new BehaviorSubject([])
  constructor() { }
}
