import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApplicableCodes, infoImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'appointment-set-successfully-message',
  template: `<motive-message
    [imgSrc]="imgSrc"
    [Section1Data]="Section1Data"
    [Section2Data]="Section2Data"
    [Section2Template]="Section2Template"
    [button1]="button1"
    (button1Click)="button1Listener()"
  ></motive-message>`,
})
export class AppointmentSetSuccessfullyMessageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  button1: IMotiveButton = {
    type: 'secondary',
    title: 'BUTTONS.DONE',
  };

  constructor(private backendService: BackendService, private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {}

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
    this.Section1Data = CustomerJourneyConstants.appointmentSetSuccessfullyTrackRequest;
    this.Section2Template = ApplicableCodes.appointmentSetSuccessfullyTarckRequestTemplate;
    var apiResponse = this.sharedService.getApiResponseData();
    this.Section2Data = {
      appointmentDate: apiResponse?.dateOfVisit, //'Jul 10 2019',
      appointmentTimeSlot: '10.30 AM',
    };
  }

  button1Listener() {
    this.sharedService.TicketCloseAPICallWithURL('thanks');
  }
}
