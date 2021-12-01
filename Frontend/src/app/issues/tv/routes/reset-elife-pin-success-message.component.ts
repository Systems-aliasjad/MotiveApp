import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApplicableCodes, successImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'unable-elife-login-message',
  template: `<motive-message
    [imgSrc]="imgSrc"
    [Section1Data]="Section1Data"
    [Section2Data]="Section2Data"
    [Section2Template]="Section2Template"
    [button1]="button1"
    (button1Click)="button1Listener()"
  ></motive-message>`,
})
export class ResetElifePinSuccessMessageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  button1: IMotiveButton = {
    title: 'BUTTONS.DONE',
    type: 'secondary',
  };

  UserID: string = '';

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
    const navigation = this.router.getCurrentNavigation();
    // this.UserID = navigation?.extras?.state?.userID;

    const resp = this.sharedService.getApiResponseDataSTBContinue();

    this.Section1Data = CustomerJourneyConstants.restELifeLoginPinResetSuccess;
    this.imgSrc = successImgSrc;
    this.Section2Template = ApplicableCodes.userCredentialsTemplate;

    this.Section2Data = {
      userId: navigation?.extras?.state?.userID, // resp?.result?.responseData?.username, //'<XXX>',
      pin: '1111@eLife',
    };
  }
  button1Listener() {
    if (this.sharedService.getQuickLinksData()) {
      this.router.navigate(['/thanks']);
    } else {
      //this.sharedService.setLoader(true);
      this.backendService.bookComplaint({ mobileNo: this.sharedService.getLocalStorage('CUS_MOBILE_NO'), remarks: '', ci7: false, issueResolved: true }).subscribe(() => {
        //this.sharedService.setLoader(false);
      });
      this.router.navigate(['/thanks']);
      // this.router.navigate(['/thanks']);
    }
  }
}
