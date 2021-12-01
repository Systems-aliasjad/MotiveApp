import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApplicableCodes, flowCodes, infoImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { SharedService } from 'src/app/shared/shared.service';

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

  constructor(private sharedService: SharedService, private backendService: BackendService, private router: Router, private activatedRoute: ActivatedRoute) {}

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
    this.sharedService.setLoader(true);
    this.backendService.complaintFollowupRemarks(this.formValue).subscribe((data: any) => {
      this.sharedService.setLoader(false);
      if (data?.result?.screenCode === flowCodes.QACOMFU4) {
        this.router.navigate(['thanks']);
      } else {
        //if (data?.result?.screenCode === flowCodes.QACOMFU1) {
        this.router.navigate(['unknown-issue']);
      }
    });
  }

  button2Listener() {
    this.router.navigate(['/thanks']);
  }

  getFormValue(data) {
    this.formValue = data;
  }
}
