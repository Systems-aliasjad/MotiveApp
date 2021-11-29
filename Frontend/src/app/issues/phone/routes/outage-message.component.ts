import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApplicableCodes, successImgSrc, warningImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';

/**
 * Open Service Request present
 */
@Component({
  selector: 'outage-message-phone',
  template: `<motive-message
    [imgSrc]="imgSrc"
    [Section1Data]="Section1Data"
    [Section2Data]="Section2Data"
    [Section2Template]="Section2Template"
    [button1]="button1"
    (button1Click)="button1Listener()"
  ></motive-message>`,
})
export class OutageMessageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  // button1: IMotiveButton = {
  //   type: 'link',
  //   title: 'BUTTONS.TRACK_COMPLAINT_STATUS',
  //   explanatoryNote: '',
  // };
  button1: IMotiveButton = {
    type: 'secondary',
    title: 'BUTTONS.DONE',
  };

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private sharedService: SharedService) {}

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
    this.Section1Data = CustomerJourneyConstants.complaintRaisedSuccessfullyCase;
    this.Section2Template = ApplicableCodes.appointBookSuccessfullyTemplate;
    const temp = this.sharedService.getApiResponseData();
    this.Section2Data = {
      referenceNo: temp?.referenceNo ?? '-',
      dateOfVisit: temp?.dateOfVisit ?? '-',
      status: 'Open', // temp?.status ?? '-',
    };
  }

  // button1Listener() {}

  button1Listener() {
    this.router.navigate(['/thanks']);
  }
}
