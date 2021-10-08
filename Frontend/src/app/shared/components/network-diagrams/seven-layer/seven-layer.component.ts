import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { IOntDetail, IRouterDetail } from 'src/app/shared/constants/types';

@Component({
  selector: 'app-seven-layer',
  templateUrl: './seven-layer.component.html',
  styleUrls: ['./seven-layer.component.scss'],
})
export class SevenLayerComponent implements OnInit {
  @Input()
  ontConfig: IOntDetail;
  @Input()
  routerConfig: IRouterDetail;
  @Input()
  etisalatConfig;
  @Input()
  devices;
  arrayPointer: number = -1;
  onTile: number = 0;
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
  arrow_right: boolean = true;
  arrow_left: boolean = false;

  constructor() {}

  ngOnInit() {
    console.log('====================================');
    console.log('devices', this.devices);
    console.log('====================================');
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  doCheck() {
    this.slides.isBeginning().then((val) => {
      this.arrow_right = val;
    });
    this.slides.isEnd().then((val) => {
      this.arrow_left = val;
    });
  }

  getArrayPointer(forTile: number): number {
    if (this.onTile === forTile) {
      return this.arrayPointer;
    } else {
      this.onTile = forTile;
      return ++this.arrayPointer;
    }
  }
}
