import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-tab-tile',
  templateUrl: './tab-tile.component.html',
  styleUrls: ['./tab-tile.component.scss'],
})
export class TabTileComponent implements OnInit {
  @Input() tileConfig: any;
  test = 'okay';
  // /assets/images/network-map-icons/icon_smartphone_all_okay.svg
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
  constructor(private sharedService: SharedService, private router: Router) {}

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

export class TabTiles {
  className: string;
  imgPath: string;
  altText: string;
  text1: string;
  text2: string;
}
