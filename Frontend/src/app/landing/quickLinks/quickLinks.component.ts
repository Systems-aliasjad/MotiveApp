import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { motiveSubscriptions } from 'src/app/shared/constants/constants';
import { ICard } from 'src/app/shared/constants/types';

@Component({
  selector: 'app-quick-links',
  templateUrl: './quickLinks.component.html',
  styleUrls: ['./quickLinks.component.scss'],
  host: {
    '(window:resize)': 'onWindowResize($event)',
  },
})
export class QuickLinksComponent implements OnInit {
  @Input() codeType: string = '3P';
  quickLinks: ICard[];
  slideOpts = {
    slidesPerView: 5,
    spaceBetween: 5,
  };

  width: number = window.innerWidth;
  mobileWidth: number = 760;

  constructor(private router: Router) {
    this.setSlideOpts();
  }

  ngOnInit(): void {
    this.quickLinks = motiveSubscriptions[this.codeType].quickLinkCard;
  }

  onWindowResize(event) {
    this.width = event.target.innerWidth;
    this.setSlideOpts();
  }

  setSlideOpts() {
    if (this.width < this.mobileWidth) {
      this.slideOpts = {
        slidesPerView: 2,
        spaceBetween: 5,
      };
    } else {
      this.slideOpts = {
        slidesPerView: 5,
        spaceBetween: 5,
      };
    }
  }

  onClickSeeAllQuickLinks() {
    this.router.navigate(['quick-links-all']);
  }
}
