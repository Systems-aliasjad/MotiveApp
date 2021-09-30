import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { IOntDetail, IRouterDetail } from '../../constants/types';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-tab-tile',
  templateUrl: './tab-tile.component.html',
  styleUrls: ['./tab-tile.component.scss'],
})
export class TabTileComponent implements OnInit {
  @Input() ontConfig: IOntDetail;
  @Input() routerConfig: IRouterDetail;
  @Input() tilesList: TabTiles[] = [
    {
      className: 'default-state',
      imgPath: '/assets/images/network-map-icons/icon_smartphone_default.svg',
      altText: 'Smart Phone Default State',
      text1: 'Unamed',
      text2: '21212',
    },
    {
      className: 'okay-state',
      imgPath: '/assets/images/network-map-icons/icon_smartphone_all_okay.svg',
      altText: 'Smart Phone okay State',
      text1: 'Unamed',
      text2: '21212',
    },
    {
      className: 'error-state',
      imgPath: '/assets/images/network-map-icons/icon_smartphone_error.svg',
      altText: 'Smart Phone Error State',
      text1: 'Unamed',
      text2: '21212',
    },
    {
      className: 'pending-state',
      imgPath: '/assets/images/network-map-icons/icon_smartphone_action_pending.svg',
      altText: 'Smart Phone Pending State',
      text1: 'Unamed',
      text2: '21212',
    },
    {
      className: 'pending-state',
      imgPath: '/assets/images/network-map-icons/icon_smartphone_action_pending.svg',
      altText: 'Smart Phone Pending State',
      text1: 'Unamed',
      text2: '21212',
    },
  ];

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
