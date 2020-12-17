import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import Uikit from 'uikit';
@Component({
  selector: 'app-product-filtiration',
  templateUrl: './product-filtiration.component.html',
  styleUrls: ['./product-filtiration.component.scss']
})
export class ProductFiltirationComponent implements OnInit {
  isArabic: boolean;
  catId;
  products = [];

  brands$ = new Observable();

  crumbContainer = [
    // {title: 'Home'},
    // {title: 'electronics'},
    // {title: 'phones'},
    // {title: 'oppo'},
  ];

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.getRoutes();
    this.getCategoryBrands();
    if (window.localStorage.getItem('lang') === 'ar') {
      this.isArabic = true;
    } else {
      this.isArabic = false;
    }
    Uikit.offcanvas('#mobileFilter', {flip: this.isArabic});
    Uikit.offcanvas('#mobileSort', {flip: this.isArabic});
  }

  private getRoutes(){
    this.route.paramMap.subscribe(res=>{
      this.catId = res.get('id');
      this.getSubCatItems();
    })
  }

  private getSubCatItems(){
    this.api.getSubCategoryItems(this.catId).subscribe((res:any)=>{
      this.products = res.data;
    })
  }

  private getCategoryBrands(){
   this.brands$ = this.api.getCategoryBrands(this.catId);
  }
}
