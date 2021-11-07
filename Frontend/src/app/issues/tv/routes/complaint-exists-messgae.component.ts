import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApplicableCodes, warningImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'complaint-exists-message',
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
export class ComplaintExistsMessageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.YES',
  };
  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.NO_I_WANT_TO_REPORT_ANOTHER_ISSUE',
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
    this.imgSrc = warningImgSrc;
    this.Section2Template = ApplicableCodes.openServiceRequestTemplateCompliant;
    this.Section1Data = CustomerJourneyConstants.complaintExistsCase1;
    const temp = this.sharedService.getApiResponseData();
    this.Section2Data = {
      // complaintNo: '436529873',
      // dateVisit: 'Jul 10 2019, 10:30 AM',
      // status: 'Xxxxx xxxxx xxxx',

      complaintNo: temp?.referenceNo ?? '-',
      dateVisit: temp?.dateOfVisit ?? '-',
      status: temp?.status ?? '-',
    };
  }

  button1Listener() {
    // this.router.navigate(['/thanks']);
    //  this.sharedService.setLoader(true);
    this.backendService.bookComplaint({ mobileNo: localStorage.getItem('CUS_MOBILE_NO'), remarks: '', ci7: true }).subscribe(() => {
      //    this.sharedService.setLoader(false);
    });
    this.router.navigate(['/thanks']);
  }

  button2Listener() {}
}
