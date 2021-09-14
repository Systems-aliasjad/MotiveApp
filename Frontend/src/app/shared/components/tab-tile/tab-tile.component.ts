import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-tab-tile',
  templateUrl: './tab-tile.component.html',
  styleUrls: ['./tab-tile.component.scss'],
})
export class TabTileComponent implements OnInit {
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
    /* spaceBetween: 100, */
    loop: false,
    grid: {
      row: 2,
    },
    
  };
  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit() {
    this.initialization();
  }

  initialization() {
    this.sharedService.setDefaultValues();
  }
}

export class TabTiles {
  className: string;
  imgPath: string;
  altText: string;
  text1: string;
  text2: string;
}
