import { Component, OnInit } from '@angular/core';
import Uikit from 'uikit';

declare const $: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  isArabic: boolean;
  document = document;

  arr = [
    {number: 1, img: '../../../assets/product-preview.jpg'},
    {number: 2, img: '../../../assets/product-preview.jpg'},
    {number: 3, img: '../../../assets/product-preview.jpg'}
  ];

  constructor() { }

  ngOnInit() {
    if (window.localStorage.getItem('lang') === 'ar') {
      this.isArabic = true;
    } else {
      this.isArabic = false;
    }

    window.addEventListener('scroll', () => {
      const scrollTop = $(window).scrollTop();
      console.log(scrollTop);
    });
  }

  goTo(index) {
    Uikit.slider('#slider').show(index);
  }
  //
  // scale(e) {
  //   const amountMovedX = (e.pageX * + 0.8);
  //   const amountMovedY = (e.pageY * + 0.8);
  //   $('.img').css('transform-origin', amountMovedX + 'px ' + amountMovedY + 'px');
  // }
}
