import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-caret',
  templateUrl: './caret.component.html',
  styleUrls: ['./caret.component.scss']
})

export class CaretComponent implements OnInit {
  images: any[];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.images = ['../../../assets/ar_banner-01-.png','../../../assets/ar_banner-01-.png','../../../assets/ar_banner-01-.png'];
    this.api.getCart().subscribe(res=>console.log("here",res));
    
  }
}

