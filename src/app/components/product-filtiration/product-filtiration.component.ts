import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Uikit from 'uikit';
@Component({
  selector: 'app-product-filtiration',
  templateUrl: './product-filtiration.component.html',
  styleUrls: ['./product-filtiration.component.scss']
})
export class ProductFiltirationComponent implements OnInit {
  isArabic: boolean;
  subCatId;
  products = [];

  crumbContainer = [
    {title: 'Home'},
    {title: 'electronics'},
    {title: 'phones'},
    {title: 'oppo'},
  ];
  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.getRoutes();
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
      this.subCatId = res.get('id');
      this.getSubCatItems();
    })
  }

  private getSubCatItems(){
    this.api.getSubCategoryItems(this.subCatId).subscribe((res:any)=>{

    
      this.products = res.data;
      console.log(this.products, 'koko');
    })
  }

}
