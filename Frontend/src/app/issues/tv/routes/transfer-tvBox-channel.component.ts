import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { IPageHeader } from 'src/app/shared/constants/types';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'transfer-tvBox-channel',
  template: `<app-package-available
    [headerConfig]="headerConfig"
    [subHeader]="subHeader"
    [packages]="packages"
    (button1Click)="(button1Listener)"
    (button2Click)="(button2Listener)"
    (cardClicked)="getCardClickedValue($event)"
  ></app-package-available>`,
})
export class TransferTvboxChannelComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  subHeader;
  packages;
  constructor(private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
    });
    this.updatePageContent();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {
    //  this.sharedService.setHeaderConfig('HEADER.AVAILABLE_PACKAGES', false, true);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.AVAILABLE_PACKAGES',
    showBackBtn: true,
  };

  updatePageContent() {
    this.subHeader = 'SUBHEADER.CHOOSE_THE_PLAN_PACKAGE_YOU_LIKE_TO_TRANSFER_TO_ANOTHER_TV_BOX';
    this.packages = [
      {
        title: 'Movies Unlimited Premium',
        description: 'STB SR#039838920',
      },
      {
        title: 'Bein Sports',
        description: 'STB SR#039838920',
        checked: false,
      },
      {
        title: 'Pehla Plus',
        description: 'STB SR#039838920',
      },
    ];
  }

  button1Listener() {
    // SKIP_TO_NEXT_STEP
  }

  button2Listener() {
    //  CANCEL
  }

  getCardClickedValue(card) {
    this.router.navigate(['issues/tv/package-transfer']);
  }
}
