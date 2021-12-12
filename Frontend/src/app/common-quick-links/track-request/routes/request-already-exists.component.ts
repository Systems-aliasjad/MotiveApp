import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApplicableCodes, infoImgSrc, successImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { BackendService } from 'src/app/services/backend.service';

/**
 * Request Already Exists
 */
@Component({
  selector: 'app-request-already-exists',
  template: `<motive-message
    [imgSrc]="imgSrc"
    [Section1Data]="Section1Data"
    [Section2Data]="Section2Data"
    [Section2Template]="Section2Template"
    [button2]="button2"
    (button2Click)="button2Listener()"
  ></motive-message>`,
})
export class RequestAlreadyExistsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;

  button1: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.CHANGE_APPOINTMENT',
    explanatoryNote: '',
  };

  button2: IMotiveButton = {
    type: 'secondary',
    title: 'BUTTONS.CLOSE',
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

  updateHeader() {
    this.sharedService.setHeaderConfig('', false, false);
  }

  updatePageContent() {
    this.imgSrc = infoImgSrc;
    this.Section1Data = CustomerJourneyConstants.requestAlreadyExists;
    this.Section2Template = ApplicableCodes.requestAlreadyExistsTemplate;
    var apiResponse = this.sharedService.getApiResponseData();
    this.Section2Data = {
      appointmentDate: apiResponse?.dateOfVisit ?? '-',
      appointmentTime: '10:30 AM',
    };
  }

  button1Listener() {
    //this.router.navigate(['/']);
  }
  button2Listener() {
    this.sharedService.TicketCloseAPICallWithURL('thanks');
  }
}
