import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApplicableCodes, warningImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/components/diagnose-issue/diagnose-issue.component';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';

/**
 * Open Service Request present
 */
@Component({
  selector: 'osrp-internet',
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
export class OSRPComponent implements OnInit {
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.FOLLOW_UP',
    explanatoryNote: 'TEXT.FOLLOW_UP_QUESTION',
  };
  button2: IMotiveButton = {
    type: 'link',
    title: 'LINKS.EXIT_TROUBLESHOOTING',
  };

  constructor(private router: Router) {}

  ngOnInit() {
    this.imgSrc = warningImgSrc;
    this.Section1Data = CustomerJourneyConstants.openServiceRequestCase1;
    this.Section2Template = ApplicableCodes.openServiceRequestTemplate;
    this.Section2Data = {
      reqNo: '436529873',
      reqType: 'Xxxxx xxxxx xxxx',
      dateVisit: 'Jul 10 2019, 10:30 AM',
      status: 'Xxxxx xxxxx xxxx',
    };
  }

  button1Listener() {
    console.log('====================================');
    console.log('hello from main-component - parent');
    console.log('====================================');
  }

  button2Listener() {
    this.router.navigate(['/thanks']);
  }
}
