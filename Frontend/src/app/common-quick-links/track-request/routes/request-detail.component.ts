import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApplicableCodes, infoImgSrc, successImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { BackendService } from 'src/app/services/backend.service';

/**
 * Request Details
 */
@Component({
  selector: 'app-request-detail',
  template: `<motive-message
    [imgSrc]="imgSrc"
    [Section1Data]="Section1Data"
    [Section2Data]="Section2Data"
    [Section2Template]="Section2Template"
    [button3]="button3"
    (button3Click)="button3Listener()"
  ></motive-message>`,
})
export class RequestDetailComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;

  // button1: IMotiveButton = {
  //   type: 'link',
  //   title: 'BUTTONS.CHANGE_APPOINTMENT',
  //   explanatoryNote: '',
  // };

  button2: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.TRACK_REQUEST',
  };

  button3: IMotiveButton = {
    type: 'link',
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
    var apiResponse = this.sharedService.getApiResponseData();
    this.Section1Data = CustomerJourneyConstants.requestDetails;
    this.Section2Template = ApplicableCodes.requestDetailsTemplate;
    this.Section2Data = {
      referenceNo: apiResponse?.referenceNo ?? '-',
      // dateCreated: 'Jul 10 2019, 10:30 AM',
    };
  }

  button1Listener() {
    //this.router.navigate(['/']);
  }
  button2Listener() {
    //this.router.navigate(['/']);
  }
  button3Listener() {
    this.backendService.bookComplaint({ mobileNo: this.sharedService.getLocalStorage('CUS_MOBILE_NO'), remarks: '', ci7: false, issueResolved: false }).subscribe(() => {});
    this.router.navigate(['/thanks']);
  }
}
