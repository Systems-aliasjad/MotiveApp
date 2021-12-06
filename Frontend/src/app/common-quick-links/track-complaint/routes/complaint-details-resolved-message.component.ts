import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApplicableCodes, infoImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'complaint-details-resolved-message',
  template: `<motive-message
    [imgSrc]="imgSrc"
    [Section1Data]="Section1Data"
    [Section2Data]="Section2Data"
    [Section2Template]="Section2Template"
    [Section3Data]="Section3Data"
    [button2]="button2"
    (button2Click)="button2Listener()"
  ></motive-message>`,
})
export class ComplaintDetailsResolvedMessageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  Section3Data;
  imgSrc;
  button1: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.REOPEN_COMPLAINT',
  };

  button2: IMotiveButton = {
    title: 'BUTTONS.CLOSE',
    type: 'secondary',
  };

  constructor(private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {}

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
    this.Section1Data = CustomerJourneyConstants.compliantDetailsResolvedTrackComplaint;
    this.Section2Template = ApplicableCodes.complaintDetailsResolvedTarckComplaintTemplate;
    var apiResponse = this.sharedService.getApiResponseData();
    this.Section2Data = {
      referenceNo: apiResponse?.referenceNo ?? '-', // '436529873',
      resolvedDetails: 'Jul 10 2019, 10:30 AM',
    };
    this.Section3Data = CustomerJourneyConstants.compliantDetailsResolvedSection3TrackComplaint;
  }

  button1Listener() {}

  button2Listener() {
    this.router.navigate(['/thanks']);
  }
}
