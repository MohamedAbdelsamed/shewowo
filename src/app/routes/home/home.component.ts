import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: any[];
  picks: any[];

  isArabic: boolean;
  sliders;

  subCategories;


  constructor(private api : ApiService, private store: StoreService) { 
    if (window.localStorage.getItem('lang') === 'ar') {
      this.isArabic = true;
    } else {
      this.isArabic = false;
    }
  }

  ngOnInit() {
    this.store.getSubCategory$.subscribe(res=>{
      if(!res) return;

      this.getSubCategories(res);
    })

    this.getHomeSliders();
    this.getHeaderData();
  }

  
  private getSubCategories(id){
    this.api.getSubCategories(id).subscribe(res=>{
      this.subCategories = res;
      
    })
  }

  private getHomeSliders(){
    this.api.getHomeSlider().subscribe(res=>{
      this.sliders = res
    });
  }

  private getHeaderData(){
    this.api.getHomeData().subscribe(res=>{
      this.picks = res.picks;
    })
  }
}
