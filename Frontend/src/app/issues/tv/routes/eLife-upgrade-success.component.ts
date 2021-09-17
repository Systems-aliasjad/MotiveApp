import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApplicableCodes, successImgSrc, warningImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/components/diagnose-issue/diagnose-issue.component';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';

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
export class ELifeUpgradeSuccessComponent implements OnInit {
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

  constructor(private router: Router) {}

  ngOnInit() {
    this.imgSrc = successImgSrc;
    this.Section1Data = CustomerJourneyConstants.eLifeUpgradeSuccess;
    this.subheaderSectionTemplate = ApplicableCodes.routerUpgradeTemplate;
    this.subheaderSectionData = {
      referenceNo: '436529873',
    };
  }

  button1Listener() {
    this.router.navigate(['/thanks']);
  }
}
