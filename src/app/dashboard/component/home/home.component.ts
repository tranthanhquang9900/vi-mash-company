import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  imageArray = [
    {
      url: '../../../../assets/images/Rectangle 17.png',
      index: 0,
      alt: 'img-0',
    },
    {
      url: '../../../../assets/images/Property 1=Group 75.png',
      index: 1,
      alt: 'img-1',
    },
    {
      url: '../../../../assets/images/Property 1=Group 76.png',
      index: 2,
      alt: 'img-2',
    },
    {
      url: '../../../../assets/images/Property 1=Group 77.png',
      index: 3,
      alt: 'img-3',
    },
    {
      url: '../../../../assets/images/Property 1=Group 78.png',
      index: 4,
      alt: 'img-4',
    },
  ];
  indexImage: number = 0;
  constructor() {}
  ngOnInit(): void {
    this.slideImages();
  }
  slideImages() {
    setInterval(() => {
      if (this.indexImage == this.imageArray.length-1) {
        this.indexImage = 0;
      } else
      if (this.indexImage >= 0) {
        this.indexImage++;
      }
    }, 2000);
  }
}
