import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-caret',
  templateUrl: './caret.component.html',
  styleUrls: ['./caret.component.scss']
})

export class CaretComponent implements OnInit {
  images: any[];
  constructor() { }

  ngOnInit() {
    this.images = ['../../../assets/ar_banner-01-.png','../../../assets/ar_banner-01-.png','../../../assets/ar_banner-01-.png']
  }
}

