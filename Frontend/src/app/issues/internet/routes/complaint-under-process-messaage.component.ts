import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { flowCodes, infoImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'complaint-under-process-message',
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
export class ComplaintUnderProcessMessageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  referenceNo;
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
    const navigation = this.router.getCurrentNavigation();
    this.referenceNo = navigation?.extras?.state?.referenceNo
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
    this.Section1Data = CustomerJourneyConstants.compliantUnderProcessTrackComplaint;
  }

  button1Listener() {
    console.log(this.formValue);
    this.sharedService.setLoader(true);

      this.backendService.complaintUnderProcessRemarks(this.formValue,this.referenceNo).subscribe((data: any) => {
        this.sharedService.setLoader(false);
           if (data?.result?.screenCode === flowCodes.QACOMFU4) {
        this.router.navigate(['track-complaint/feedback-submitted-successfully']);
      } else if (data?.result?.screenCode === flowCodes.QACOMFU1) {
        this.router.navigate(['track-complaint/complaint-not-found-message']);
      } else {
        this.router.navigate(['track-complaint/feedback-try-again'], { state: { feedback: this.formValue } });
      }
      });

  }

  button2Listener() {
    this.sharedService.TicketCloseAPICallWithURL('thanks');
  }

  getFormValue(data) {
    this.formValue = data;
  }
}