import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApplicableCodes, successImgSrc, warningImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/components/diagnose-issue/diagnose-issue.component';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';

/**
 * Open Service Request present
 */
@Component({
  selector: 'forgot-ccb-pin-message-phone',
  template: `<motive-message
    [imgSrc]="imgSrc"
    [Section1Data]="Section1Data"
    [Section2Data]="Section2Data"
    [Section2Template]="Section2Template"
    [button1]="button1"
    (button1Click)="button1Listener()"
  ></motive-message>`,
})
export class ForgotCcbPinMessageComponent implements OnInit {
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  button1: IMotiveButton = {
    type: 'secondary',
    title: 'BUTTONS.DONE',
    explanatoryNote: '',
  };

  constructor(private router: Router) {}

  ngOnInit() {
    this.imgSrc = successImgSrc;
    this.Section1Data = CustomerJourneyConstants.resetCCBPinsuccessfullyCase;
  }

  button1Listener() {
    this.router.navigate(['/thanks']);
  }
}