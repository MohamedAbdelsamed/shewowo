import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { baseUrl } from 'src/assets/backend/api';
import Uikit from 'uikit';

declare const $: any;
export interface item{
  item_id?:number,
  count?:number,
  price?:number,
  user_id?:number,
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  isArabic: boolean;
  product ;
  subCatId;
  isLoading: boolean = false;
  baseUrl = baseUrl
  counter = 1;

  productId = this.route.snapshot.paramMap.get('id');

  document = document;
  isOpen: boolean = false;
  item: item = {};
  imageToCaret:string;
  totalPrice:number;
  isLogin:boolean = false;

  arr = [
    {number: 1, img: '../../../assets/product-preview.jpg'},
    {number: 2, img: '../../../assets/product-preview.jpg'},
    {number: 3, img: '../../../assets/product-preview.jpg'}
  ];

  constructor(private api : ApiService, 
              private route: ActivatedRoute,
              private auth: AuthService) { }

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

    this.getProductId();

    this.item.user_id = JSON.parse(localStorage.getItem('user')).id
    this.item.count = this.counter;
  }

  getProductId(){
    this.route.paramMap.subscribe(res => {
      this.item.item_id = +res.get('id')
    })
  }

  getCount(){
    this.item.count = this.counter;
  }

  private getSpecificProduct(){
    this.api.getSpecificProduct(this.productId).subscribe(res=>{
      this.isLoading = false;
      console.log(res, 'product');
      this.product = res;
      this.item.price = res.price
    })
  }

  goTo(index) {
    Uikit.slider('#slider').show(index);
  }

  toggleSideNav(){
    if(this.isLogin = this.auth.isUserLogedIn()){
      this.isOpen = !this.isOpen;
    }
  }

  addToCaret(){
    if(this.isLogin = this.auth.isUserLogedIn()){
      this.api.addToCaret(this.item).subscribe(res =>{
        this.imageToCaret = this.arr[0].img
        this.totalPrice = this.item.price * this.counter
      })
    }else{
      alert("you should login")
    }
  }
}
