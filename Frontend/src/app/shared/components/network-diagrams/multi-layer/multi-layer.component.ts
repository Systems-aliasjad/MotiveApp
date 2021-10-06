import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { networkDiagramClasses, SVGs } from 'src/app/shared/constants/constants';
import { ITabTile } from 'src/app/shared/constants/types';

@Component({
  selector: 'app-multi-layer',
  templateUrl: './multi-layer.component.html',
  styleUrls: ['./multi-layer.component.scss'],
})
export class MultiLayerComponent implements OnInit {
  @Input()
  devices;
  slideOpts = {
    slidesPerView: 3,
    slidesPerColumn: 2,
    // spaceBetween: 1,
    // loop: false,
    speed: 500,
    grid: {
      rows: 2,
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

  ngOnInit() {}

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
}
