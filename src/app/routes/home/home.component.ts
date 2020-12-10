import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
