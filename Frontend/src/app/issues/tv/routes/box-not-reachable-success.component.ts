import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApplicableCodes, successImgSrc, warningImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/components/diagnose-issue/diagnose-issue.component';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';

/**
 * Tv Box Not Reachable Success
 */
@Component({
  selector: 'box-not-reachable-success',
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
export class TvBoxNotReachableSuccessComponent implements OnInit {
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  button1: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.TRACK_COMPLAINT_STATUS',
  };
  button2: IMotiveButton = {
    type: 'secondary',
    title: 'BUTTONS.DONE',
  };

  constructor(private router: Router) {}

  ngOnInit() {
    this.imgSrc = successImgSrc;
    this.Section1Data = CustomerJourneyConstants.tvBoxNotReachableFormsuccessfullyCase;
    this.Section2Template = ApplicableCodes.appointBookSuccessfullyTemplate;
    this.Section2Data = {
      referenceNo: '436529873',
      dateVisit: 'Jul 10 2019, 10:30 AM',
      location: 'Xxxxx xxxxx xxxx',
    };
  }

  button1Listener() {}

  button2Listener() {
    this.router.navigate(['/thanks']);
  }
}
