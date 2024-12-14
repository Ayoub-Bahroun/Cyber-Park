import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { cv } from 'src/app/model/cv.model';
import { entreprise } from 'src/app/model/entreprise.model';

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  entreprises: Array<entreprise> = [];
  SelectFilelogo!: File
  objectImage3: Array<cv> = []
  constructor() { }
  ngOnInit() {
   
  }
  
  public fileChangeLogo(event: any) {
    this.SelectFilelogo = event.target.files[0]
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,

      },
      431: {
        items: 2,
      },
      740: {
        items: 2,
      },
      940: {
        items: 2,

      }
    },
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  }
}
