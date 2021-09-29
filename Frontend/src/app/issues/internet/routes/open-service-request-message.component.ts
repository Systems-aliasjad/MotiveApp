import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApplicableCodes, warningImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/components/diagnose-issue/diagnose-issue.component';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'open-service-request-message',
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
export class OpenServiceRequestMessageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.YES_FOLLOW_UP',
    explanatoryNote: 'MESSAGES.DO_YOU_WANT_TO_FOLLOW_UP_THE_REQUEST',
  };

  button2: IMotiveButton = {
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
    type: 'link',
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
    this.Section1Data = CustomerJourneyConstants.OpenTechnicalSR;
    this.Section2Template = ApplicableCodes.openServiceRequestTemplate;
    this.Section2Data = {
      reqNo: '436529873',
      reqType: 'Xxxxx xxxxx xxxx',
      dateVisit: 'Jul 10 2019, 10:30 AM',
      status: 'Xxxxx xxxxx xxxx',
    };

    CustomerJourneyConstants.openTechnicalSrButtons;
  }

  button1Listener() {}

  button2Listener() {}
}
