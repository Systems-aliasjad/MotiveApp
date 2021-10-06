import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApplicableCodes, successImgSrc, warningImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { HelperService } from 'src/app/shared/helper/helper.service';

/**
 * Router Upgrade Success
 */
@Component({
  selector: 'router-upgrade-success',
  template: `<motive-message
    [imgSrc]="imgSrc"
    [Section1Data]="Section1Data"
    [Section2Data]="Section2Data"
    [Section2Template]="Section2Template"
    [subHeaderSectionTemplate]="subheaderSectionTemplate"
    [subHeaderSectionData]="subheaderSectionData"
    [button1]="button1"
    (button1Click)="button1Listener()"
  ></motive-message>`,
})
export class RouterUpgradeSuccessComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  subheaderSectionTemplate;
  subheaderSectionData;
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.DONE',
  };

  constructor(private helperService: HelperService, private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {}

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
    const apiResponse = this.sharedService.getApiResponseData();
    this.imgSrc = successImgSrc;
    this.Section1Data = CustomerJourneyConstants.routerUpgradesuccessfullyCase;
    this.subheaderSectionTemplate = ApplicableCodes.routerUpgradeTemplate;
    this.subheaderSectionData = apiResponse?.routerUpgrade;
  }

  button1Listener() {
    this.router.navigate(['issues/internet/no-issue']);
    // this.router.navigate(['/thanks']);
  }
}
