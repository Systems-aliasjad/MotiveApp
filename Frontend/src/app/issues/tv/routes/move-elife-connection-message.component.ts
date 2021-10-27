import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApplicableCodes, warningImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'move-elife-connection-message',
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
export class MoveElifeConnectionMessageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.YES_FOLLOW_UP',
    explanatoryNote: 'MESSAGES.DO_YOU_WANT_TO_FOLLOW_UP_THE_REQUEST',
  };

  button2: IMotiveButton = {
    title: 'BUTTONS.NO_EXIT_TROUBLESHOOTING',
    type: 'link',
  };

  constructor(private backendService: BackendService, private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updatePageContent();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updatePageContent() {
    this.imgSrc = warningImgSrc;
    this.Section1Data = CustomerJourneyConstants.openServiceRequestCase1;
    this.Section2Template = ApplicableCodes.openServiceRequestTemplate;
    const temp = this.sharedService.getApiResponseData();
    this.Section2Data = {
      // reqNo: '436529873',
      // reqType: 'Xxxxx xxxxx xxxx',
      // dateVisit: 'Jul 10 2019, 10:30 AM',
      // status: 'Xxxxx xxxxx xxxx',

      reqNo: temp?.referenceNo ?? '-',
      reqType: temp?.requestType ?? '-',
      dateVisit: temp?.dateOfVisit ?? '-',
      status: temp?.status ?? '-',
    };
  }

  button1Listener() {
    //   this.router.navigate(['/thanks']);
  }

  button2Listener() {
    this.sharedService.setLoader(true);
    this.backendService.bookComplaint({ mobileNo: localStorage.getItem('CUS_MOBILE_NO'), remarks: '', ci7: true }).subscribe(() => {
      this.sharedService.setLoader(false);
      this.router.navigate(['/thanks']);
    });
  }
}
