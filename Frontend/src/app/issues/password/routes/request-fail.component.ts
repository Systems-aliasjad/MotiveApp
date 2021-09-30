import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { warningImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';

/**
 * Unable To Process Request
 */
@Component({
  selector: 'request-fail',
  template: `<motive-message
    [imgSrc]="imgSrc"
    [Section1Data]="Section1Data"
    [Section2Data]="Section2Data"
    [Section2Template]="Section2Template"
    [button1]="button1"
    (button1Click)="button1Listener()"
  ></motive-message>`,
})
export class RequestFailComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  button1: IMotiveButton = {
    type: 'secondary',
    title: 'BUTTONS.CLOSE',
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
    this.Section1Data = CustomerJourneyConstants.unableToProcessRequest;
  }

  button1Listener() {
    this.router.navigate(['/thanks']);
  }
}
