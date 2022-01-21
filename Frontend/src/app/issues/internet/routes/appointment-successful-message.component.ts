import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApplicableCodes, successImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'appointment-successfully-message',
  template: `<motive-message
    [imgSrc]="imgSrc"
    [Section1Data]="Section1Data"
    [Section2Data]="Section2Data"
    [Section2Template]="Section2Template"
    [button1]="button1"
    (button1Click)="button1Listener()"
  ></motive-message>`,
})
export class AppointmentSuccessfulMessageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  // button1: IMotiveButton = {
  //   type: 'link',
  //   title: 'BUTTONS.TRACK_COMPLAINT_STATUS',
  // };

  button1: IMotiveButton = {
    title: 'BUTTONS.DONE',
    type: 'secondary',
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
    this.Section1Data = CustomerJourneyConstants.appointmentbookssuccessfullyCase;
    this.Section2Template = ApplicableCodes.appointBookSuccessfullyTemplate;
    
    const temp = this.sharedService.getApiResponseData();
    this.Section2Data = {
      referenceNo: temp?.referenceNo ?? '-',
      dateVisit: temp?.dateOfVisit ?? '-',
      status: 'Open', // temp?.status ?? '-',
    };


    // this.Section2Data = {
    //   referenceNo: '436529873',
    //   dateVisit: 'Jul 10 2019, 10:30 AM',
    //   location: 'Xxxxx xxxxx xxxx',
    // };
  }

  // button1Listener() {}

  button1Listener() {
    this.router.navigate(['/thanks']);
  }
}
