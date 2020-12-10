import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  images: any[];
  isArabic: boolean;

  constructor() { }

  ngOnInit() {
    this.images = ['../../../assets/ar_banner-01-.png','../../../assets/ar_banner-01-.png','../../../assets/ar_banner-01-.png']
    if (window.localStorage.getItem('lang') === 'ar') {
      this.isArabic = true;
    } else {
      this.isArabic = false;
    }
  }


}
