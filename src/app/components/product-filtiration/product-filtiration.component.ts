import { Component, OnInit } from '@angular/core';
import Uikit from 'uikit';
@Component({
  selector: 'app-product-filtiration',
  templateUrl: './product-filtiration.component.html',
  styleUrls: ['./product-filtiration.component.scss']
})
export class ProductFiltirationComponent implements OnInit {

  isArabic: boolean;

  crumbContainer = [
    {title: 'Home'},
    {title: 'electronics'},
    {title: 'phones'},
    {title: 'oppo'},
  ];
  constructor() { }

  ngOnInit() {
    if (window.localStorage.getItem('lang') === 'ar') {
      this.isArabic = true;
    } else {
      this.isArabic = false;
    }
    Uikit.offcanvas('#mobileFilter', {flip: this.isArabic});
    Uikit.offcanvas('#mobileSort', {flip: this.isArabic});
  }

}
