import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { baseUrl } from 'src/assets/backend/api';
import Uikit from 'uikit';

declare const $: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  isArabic: boolean;
  product ;
  isLoading: boolean = false;
  baseUrl = baseUrl
  counter;

  productId = this.route.snapshot.paramMap.get('id');

  document = document;
  isOpen: boolean = false;

  arr = [
    {number: 1, img: '../../../assets/product-preview.jpg'},
    {number: 2, img: '../../../assets/product-preview.jpg'},
    {number: 3, img: '../../../assets/product-preview.jpg'}
  ];

  constructor(private api : ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getSpecificProduct();
    if (window.localStorage.getItem('lang') === 'ar') {
      this.isArabic = true;
    } else {
      this.isArabic = false;
    }

    window.addEventListener('scroll', () => {
      const scrollTop = $(window).scrollTop();
    });
  }

  private getSpecificProduct(){
    this.api.getSpecificProduct(this.productId).subscribe(res=>{
      this.isLoading = false;
      console.log(res, 'product');
      this.product = res;
      this.counter = this.product.counter;
    })
  }

  goTo(index) {
    Uikit.slider('#slider').show(index);
  }

  toggleSideNav(){
      this.isOpen = !this.isOpen;
  }
}
