import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { warningImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/components/diagnose-issue/diagnose-issue.component';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';

@Component({
  selector: 'router-installation-failed',
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
export class RouterInstallationFailedMessageComponent implements OnInit {
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  button1: IMotiveButton = {
    title: 'BUTTONS.BOOK_A_COMPLAINT',
    type: 'primary',
  };

  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.CLOSE',
    explanatoryNote: '',
  };

  constructor(private router: Router) {}

  ngOnInit() {
    this.imgSrc = warningImgSrc;
    this.Section1Data = CustomerJourneyConstants.routerInstallFailedMessageCase;
  }

  button1Listener() {
    this.router.navigate(['/book-Complaint']);
  }

  button2Listener() {
    this.router.navigate(['/thanks']);
  }
}
