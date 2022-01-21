import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApplicableCodes, successImgSrc, warningImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';

/**
 * eLife Upgrade Success
 */
@Component({
  selector: 'eLife-upgrade-success',
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
export class ELifeUpgradeSuccessComponent implements OnInit, OnDestroy {
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

  constructor(private sharedService:SharedService, private router: Router, private activatedRoute: ActivatedRoute) {}

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
    this.imgSrc = successImgSrc;
    this.Section1Data = CustomerJourneyConstants.eLifeUpgradeSuccess;
    this.subheaderSectionTemplate = ApplicableCodes.routerUpgradeTemplate;

    

    const temp = this.sharedService.getApiResponseData();
    this.subheaderSectionData = {
    referenceNo: temp?.referenceNo ?? '-',
   
    };
    // this.subheaderSectionData = {
    //   referenceNo: '436529873',
    // };
  }

  button1Listener() {
    this.router.navigate(['/thanks']);
  }
}
