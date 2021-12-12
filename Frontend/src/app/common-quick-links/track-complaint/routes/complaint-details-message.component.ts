import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApplicableCodes, infoImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'complaint-details-message',
  template: `<motive-message
    [imgSrc]="imgSrc"
    [Section1Data]="Section1Data"
    [Section2Data]="Section2Data"
    [Section2Template]="Section2Template"
    [button2]="button2"
    (button2Click)="button2Listener()"
  ></motive-message>`,

  // [button3]="button3"
  //   (button3Click)="button3Listener()"
})
export class ComplaintDetailsMessageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc = infoImgSrc;
  // button1: IMotiveButton = {
  //   type: 'link',
  //   title: 'BUTTONS.CHANGE_APPOINTMENT',
  // };
  button2: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.TRACK_COMPLAINT',
  };

  button3: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.CANCEL_COMPLAINT',
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
    const temp = this.sharedService.getApiResponseData();
    this.Section1Data = CustomerJourneyConstants.compliantDetailsTrackComplaint;
    this.Section2Template = ApplicableCodes.complaintDetailsTarckComplaintTemplate;

    this.Section2Data = {
      referenceNo: temp?.referenceNo || '-',
      appointmentDetails: temp?.complaintNature || '-',
    };
  }

  button1Listener() {
    //this.router.navigate(['/issues/internet/router-install-successfully']);
  }

  button2Listener() {
    this.router.navigate(['/track-complaint/complaint-under-process-message']);
  }

  button3Listener() {
    this.sharedService.TicketCloseAPICallWithURL('thanks');
  }
}
