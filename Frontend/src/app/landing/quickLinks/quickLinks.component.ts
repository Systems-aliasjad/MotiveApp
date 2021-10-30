import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { motiveSubscriptions } from 'src/app/shared/constants/constants';
import { ICard } from 'src/app/shared/constants/types';
import { SharedService } from 'src/app/shared/shared.service';

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
  subscription: Subscription;
  constructor(private router: Router, private actRoute: ActivatedRoute, private backendService: BackendService, private sharedService: SharedService) {
    this.subscription = this.actRoute.data.subscribe((data) => {
      this.initialization();
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  initialization() {
    this.quickLinks = motiveSubscriptions[this.codeType].quickLinkCard;
    this.setSlideOpts();
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

  onCardClick(link) {
    if (this.sharedService.getQuickLinksData()) {
      this.router.navigate([link?.linkTo], { state: { quickLinkNextSignal: link?.nextSignal } });
    } else {
      this.sharedService.setLoader(true);
      this.backendService.quickActionsInitialData().subscribe((res) => {
        this.sharedService.setLoader(false);
        this.sharedService.setQuickLinksData(res?.result?.responseData);
        this.sharedService.setApiResponseData(res?.result?.responseData);
        this.router.navigate([link?.linkTo], { state: { quickLinkNextSignal: link?.nextSignal } });
      });
    }
  }

  // this.backendService.quickActionsNextStep(link?.nextSignal).subscribe((res) => {
  //   this.sharedService.setLoader(false);
  // });
}
