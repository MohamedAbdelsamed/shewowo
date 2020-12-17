import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  images: any[];
  isArabic: boolean;
  id = this.route.snapshot.paramMap.get('id');
  subCategories = []
  constructor(private route: ActivatedRoute, private api: ApiService) {
   }

  ngOnInit() {
    this.getRoute();

    // this.images = ['../../../assets/ar_banner-01-.png','../../../assets/ar_banner-01-.png','../../../assets/ar_banner-01-.png']
    if (window.localStorage.getItem('lang') === 'ar') {
      this.isArabic = true;
    } else {
      this.isArabic = false;
    }
  }

  private getRoute(){
    this.route.paramMap.subscribe(res=>{
      this.id = res.get('id');
      this.getCategoryData();
      this.getCategorySliders();
    })
  }

  private getCategorySliders(){
    this.api.getCategorySliders(this.id).subscribe(res=>{
      this.images = res;
      // console.log(this.images, 'im');
      
    });
  }

  private getCategoryData(){
    this.api.getSpecificCategory(this.id).subscribe(res=>{
      this.subCategories = res.sub_category;

      console.log(res.sub_category, 'sub');
    })
  }

}
