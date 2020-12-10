import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-slider',
  templateUrl: './top-slider.component.html',
  styleUrls: ['./top-slider.component.scss']
})
export class TopSliderComponent implements OnInit {
  @Input('images') images:any[];
  constructor() { }

  ngOnInit() {
  }
}
