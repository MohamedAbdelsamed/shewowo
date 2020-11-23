import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.scss']
})
export class CategorySliderComponent implements OnInit {
  isArabic: boolean;
  dir: string;
  constructor() { }

  ngOnInit() {
    this.dir = localStorage.getItem('dir');
    console.log(this.dir);
    if (window.localStorage.getItem('lang') === 'ar') {
      this.isArabic = true;
    } else {
      this.isArabic = false;
    }
  }

}
