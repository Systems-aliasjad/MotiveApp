import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApplicableCodes, infoImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'complaint-details-message',
  template: `<app-motive-message-feedback
    [imgSrc]="imgSrc"
    [Section1Data]="Section1Data"
    [button1]="button1"
    (button1Click)="button1Listener()"
    [button2]="button2"
    (button2Click)="button2Listener()"
    (formValue)="getFormValue($event)"
  ></app-motive-message-feedback>`,
})
export class ComplaintAlreadyExistsMessageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.SUBMIT_FEEDBACK',
  };
  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.CLOSE',
  };

  formValue;

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
    this.Section1Data = CustomerJourneyConstants.compliantAlreadyExistsTrackComplaint;
  }

  button1Listener() {
    console.log(this.formValue);
    // this.router.navigate(['/issues/internet/router-install-successfully']);
  }

  button2Listener() {
    this.router.navigate(['/thanks']);
  }

  getFormValue(data) {
    this.formValue = data;
  }
}
