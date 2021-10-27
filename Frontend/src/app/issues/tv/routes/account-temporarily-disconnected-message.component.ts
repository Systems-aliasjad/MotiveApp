import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { warningImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'account-temporarily-disconnected-message',
  template: `<motive-message [imgSrc]="imgSrc" [Section1Data]="Section1Data" [button1]="button1" (button1Click)="button1Listener()"></motive-message>`,
})
export class AccountTemporarilyDisconnectedMessageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  imgSrc;
  button1: IMotiveButton = {
    title: 'BUTTONS.CLOSE',
    type: 'secondary',
  };

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
    });
    this.updatePageContent();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {}

  updatePageContent() {
    this.imgSrc = warningImgSrc;
    this.Section1Data = CustomerJourneyConstants.openServiceRequestCase2;
  }

  button1Listener() {
    this.router.navigate(['/thanks']);
  }
}
