import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApplicableCodes, infoImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'complaint-details-message',
  template: `<motive-message
    [imgSrc]="imgSrc"
    [Section1Data]="Section1Data"
    [Section2Data]="Section2Data"
    [Section2Template]="Section2Template"
    [button1]="button1"
    (button1Click)="button1Listener()"
    [button2]="button2"
    (button2Click)="button2Listener()"
    [button3]="button3"
    (button3Click)="button3Listener()"
  ></motive-message>`,
})
export class ComplaintDetailsMessageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  button1: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.CHANGE_APPOINTMENT',
  };
  button2: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.TRACK_COMPLAINT',
  };

  button3: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.CANCEL_COMPLAINT',
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
    this.imgSrc = infoImgSrc;
    this.Section1Data = CustomerJourneyConstants.compliantDetailsTrackComplaint;
    this.Section2Template = ApplicableCodes.complaintDetailsTarckComplaintTemplate;
    this.Section2Data = {
      referecneNo: '436529873',
      dateVisit: 'Jul 10 2019, 10:30 AM',
      appointmentDetails: 'Lorem ipsum',
    };
  }

  button1Listener() {
    //this.router.navigate(['/issues/internet/router-install-successfully']);
  }

  button2Listener() {
    // this.router.navigate(['/bookComplaint']);
  }

  button3Listener() {
    // this.router.navigate(['/bookComplaint']);
  }
}
