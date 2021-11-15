import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { IOntDetail, IRouterDetail } from 'src/app/shared/constants/types';

@Component({
  selector: 'app-five-layer',
  templateUrl: './five-layer.component.html',
  styleUrls: ['./five-layer.component.scss'],
})
export class FiveLayerComponent implements OnInit {
  @Input()
  ontConfig: IOntDetail;
  @Input()
  etisalatConfig;
  @Input()
  devices;
  arrayPointer: number = -1;
  // onTile: number = 0;
  slideOpts = {
    slidesPerView: 4,
    spaceBetween: 1,
    loop: false,
    speed: 500,
    grid: {
      row: 2,
    },
    /*  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }, */
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  };
  @ViewChild('slides') slides: IonSlides;
  arrow_right: boolean = false;
  arrow_left: boolean = true;

  constructor() {}

  ngOnInit() {
  }

  next() {
    this.slides.slidePrev();
  }

  prev() {
    this.slides.slideNext();
  }

  doCheck() {
    this.slides.isBeginning().then((val) => {
      this.arrow_left = val;
    });
    this.slides.isEnd().then((val) => {
      this.arrow_right = val;
    });
  }

  // getArrayPointer(forTile: number): number {
  //   if (this.onTile === forTile) {
  //     return this.arrayPointer;
  //   } else {
  //     this.onTile = forTile;
  //     return ++this.arrayPointer;
  //   }
  // }
}
