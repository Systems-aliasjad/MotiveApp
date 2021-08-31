import { Component, Input, OnInit } from '@angular/core';
import { HelperService } from '../../shared/helper/helper.service';

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
  quickLinks;
  slideOpts = {
    slidesPerView: 5,
    spaceBetween: 5,
  };

  width: number = window.innerWidth;
  mobileWidth: number = 760;

  constructor(private helperService: HelperService) {
    this.setSlideOpts();
  }

  ngOnInit(): void {
    this.quickLinks = this.helperService.filterCard(this.codeType, 'quickLinkCards');
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
}
