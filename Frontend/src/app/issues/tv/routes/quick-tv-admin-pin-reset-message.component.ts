import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { flowCodes, successImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'quick-tv-admin-pin-reset-successfully-message',
  template: `<motive-message
    [imgSrc]="imgSrc"
    [Section1Data]="Section1Data"
    [Section2Data]="Section2Data"
    [Section2Template]="Section2Template"
    [button1]="button1"
    (button1Click)="button1Listener()"
  ></motive-message>`,
})
export class QuickTvAdminPinResetSuccessfullyMessageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  button1: IMotiveButton = {
    title: 'BUTTONS.OK',
    type: 'secondary',
  };

  constructor(private sharedService: SharedService, private backendService: BackendService, private router: Router, private activatedRoute: ActivatedRoute) {}

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
    const navigation = this.router.getCurrentNavigation();
    const screenCode = navigation?.extras?.state?.screenCode;

    if (screenCode === flowCodes.QAIPTVPIN3 || screenCode === flowCodes.QAIPTVPIN4) {
      this.Section1Data = CustomerJourneyConstants.tvAdminPinResetFullSuccessfully;
    } else if (screenCode === flowCodes.QAIPTVPIN5 || screenCode === flowCodes.QAIPTVPIN6) {
      this.Section1Data = CustomerJourneyConstants.tvAdminPinResetSuccessfully;
    } else {
      this.Section1Data = CustomerJourneyConstants.tvAdminPinResetSuccessfully;
    }

    this.imgSrc = successImgSrc;
  }

  button1Listener() {
    this.router.navigate(['thanks']);
  }
}
