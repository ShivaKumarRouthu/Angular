import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  images = [
      { "title": "We are covered", "url": "../../../assets/images/1.svg" },
      { "title": "Generation Gap", "url": "../../../assets/images/2.svg" },
      { "title": "Potter Me", "url": "../../../assets/images/3.svg" },
      { "title": "Pre-School Kids", "url": "../../../assets/images/2.svg" },
      { "title": "Young Peter Cech", "url": "../../../assets/images/1.svg" }	
    ];
  constructor() { }

  ngOnInit() {
  }

}
