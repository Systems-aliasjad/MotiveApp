import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { motiveSubscriptions } from 'src/app/shared/constants/constants';
import { ICard, IPageHeader } from 'src/app/shared/constants/types';
import { BackendService } from '../services/backend.service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-quick-links-all',
  templateUrl: './quick-links-all.component.html',
  styleUrls: ['./quick-links-all.component.scss'],
})
export class QuickLinksAllComponent implements OnInit {
  codeType: string = '3P';
  quickLinks: ICard[];

  width: number = window.innerWidth;
  mobileWidth: number = 760;

  subscription: Subscription;
  constructor(private sharedService: SharedService, private router: Router, private actRoute: ActivatedRoute, private backendService: BackendService) {
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
    // this.sharedService.setHeaderConfig('HEADER.QUICK_LINKS', false);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.QUICK_LINKS',
    showBackBtn: true,
  };

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

  goToLanding() {
    this.router.navigate(['landing']);
  }
}
