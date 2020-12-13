import { Component, Input, OnInit } from '@angular/core';
import { baseUrl } from 'src/assets/backend/api';

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.scss']
})
export class CategorySliderComponent implements OnInit {
  isArabic: boolean;
  dir: string;
  baseUrl: string = baseUrl;

  @Input() picks : any[]
  constructor() { }

  ngOnInit() {

    this.dir = localStorage.getItem('dir');
    
    if (window.localStorage.getItem('lang') === 'ar') {
      this.isArabic = true;
    } else {
      this.isArabic = false;
    }
  }

}
