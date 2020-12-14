import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: any[];
  isArabic: boolean;
  sliders;



  constructor(private api : ApiService) { 
    if (window.localStorage.getItem('lang') === 'ar') {
      this.isArabic = true;
    } else {
      this.isArabic = false;
    }
  }

  ngOnInit() {
    this.getHomeSliders();
    this.getHeaderData();
    
  }


  private getHomeSliders(){
    this.api.getHomeSlider().subscribe(res=>{
      this.sliders = res
    });
  }

  private getHeaderData(){
    this.api.getHomeData().subscribe(res=>{
      console.log(res);
      
    })
  }
}
