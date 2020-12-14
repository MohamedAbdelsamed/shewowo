import { Component, Input, OnInit } from '@angular/core';
import { baseUrl } from 'src/assets/backend/api';

@Component({
  selector: 'app-top-slider',
  templateUrl: './top-slider.component.html',
  styleUrls: ['./top-slider.component.scss']
})
export class TopSliderComponent implements OnInit {
  @Input('images') images:any[];
  @Input('sliders') sliders: any[];
  url = baseUrl;
  
  constructor() { }

  ngOnInit() {

  }
}
