import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApplicableCodes, successImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'feedback-submitted-successfully-message',
  template: `<motive-message [imgSrc]="imgSrc" [Section1Data]="Section1Data" [button1]="button1" (button1Click)="button1Listener()"></motive-message>`,
})
export class FeebbackSubmittedSuccessfullyMessageComponent implements OnInit, OnDestroy {
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

  constructor(private backendService: BackendService, private router: Router, private activatedRoute: ActivatedRoute, private sharedService: SharedService) {}

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
    this.Section1Data = {
      header: 'MESSAGES.FEEDBACK_SUBMITTED_SUCCESSFULLY',
      // paragraphs: ['MESSAGES.WE_HAVE_RECEIVED_YOUR_COMPLAIN_AND_BOOKED_AN_APPOINTMENT_OUR_TECHNICIAN_WILL_CONTACT_YOU_SOON'],
    };
  }

  // button1Listener() {}

  button1Listener() {
    this.backendService.bookComplaint({ mobileNo: this.sharedService.getLocalStorage('CUS_MOBILE_NO'), remarks: '', ci7: false, issueResolved: false }).subscribe(() => {});
    this.router.navigate(['/thanks']);
  }
}
