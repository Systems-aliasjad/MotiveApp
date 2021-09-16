import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { successImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/components/diagnose-issue/diagnose-issue.component';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Location } from '@angular/common';

/**
 * Tv Box Reset Success
 */
@Component({
  selector: 'box-reset-success',
  template: `<motive-message
    [imgSrc]="imgSrc"
    [Section1Data]="Section1Data"
    [Section2Data]="Section2Data"
    [Section2Template]="Section2Template"
    [button1]="button1"
    (button1Click)="button1Listener()"
    [button2]="button2"
    (button2Click)="button2Listener()"
  ></motive-message>`,
})
export class TvBoxResetSuccessComponent implements OnInit {
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.ISSUE_RESLOVED',
  };
  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.STILL_FACING_ISSUE',
  };

  constructor(private router: Router, private location: Location) {}

  ngOnInit() {
    this.imgSrc = successImgSrc;
    this.Section1Data = CustomerJourneyConstants.tvBoxResetSuccessfullyCase;
  }

  button1Listener() {
    this.router.navigate(['/thanks']);
  }

  button2Listener() {
    this.router.navigate(['/troubleshoot-complete']);
  }
}
