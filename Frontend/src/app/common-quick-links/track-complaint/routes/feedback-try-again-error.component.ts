import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { flowCodes, warningImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { BackendService } from 'src/app/services/backend.service';
import { HelperService } from 'src/app/shared/helper/helper.service';

/**
 * Try Again Error
 */
@Component({
  selector: 'feedback-try-again-error',
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
export class FeedbackTryAgainErrorComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  feedback: string = '';
  hitFlag = 0;
  button1: IMotiveButton = {
    title: 'BUTTONS.TRY_AGAIN',
    type: 'primary',
  };
  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.CLOSE',
  };

  constructor(
    private helperService: HelperService,
    private sharedService: SharedService,
    private backendService: BackendService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
    });
    this.updatePageContent();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {
    const navigation = this.router.getCurrentNavigation();
    this.feedback = navigation?.extras?.state?.feedback;
  }

  updatePageContent() {
    this.imgSrc = warningImgSrc;
    this.Section1Data = {
      header: 'MESSAGES.AN_ERROR_OCCURRED',
      paragraphs: ['MESSAGES.SORRY_THE_OPERATION_HAS_TIMED_OUT_PLEASE_TRY_AGAIN'],
    };
  }

  button1Listener() {
    this.hitFlag++;
    this.sharedService.setLoader(true);
    this.backendService.complaintFollowupRemarks(this.feedback).subscribe((data: any) => {
      if (this.hitFlag === 2) {
        this.button1 = null;
        this.Section1Data = CustomerJourneyConstants.tryAgainErrorOccured;
        this.button2.type = 'primary';
      }
      this.sharedService.setLoader(false);
      if (data?.result?.screenCode === flowCodes.QACOMFU4) {
        this.router.navigate(['track-complaint/feedback-submitted-successfully']);
      } else if (data?.result?.screenCode === flowCodes.QACOMFU1) {
        this.router.navigate(['track-complaint/complaint-not-found-message']);
      }
    });
  }

  button2Listener() {
    this.sharedService.TicketCloseAPICallWithURL('thanks');
  }
}
