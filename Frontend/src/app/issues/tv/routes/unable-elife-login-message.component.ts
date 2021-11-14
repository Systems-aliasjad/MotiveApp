import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { flowCodes, warningImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'reset-elife-pin-success-message',
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
export class UnableElifeLoginMessageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  quickLinkNextSignal;
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.RESET_PIN',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.CANCEL',
    type: 'link',
  };

  constructor(private sharedService: SharedService, private backendService: BackendService, private router: Router, private activatedRoute: ActivatedRoute) {}

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
    this.quickLinkNextSignal = navigation?.extras?.state?.quickLinkNextSignal;
  }

  updatePageContent() {
    this.Section1Data = CustomerJourneyConstants.restELifeLoginPin;
    this.imgSrc = warningImgSrc;
  }

  button1Listener() {
    if (this?.quickLinkNextSignal) {
      this.sharedService.setLoader(true);
      this.backendService.quickActionsInitialData().subscribe((res) => {
        this.sharedService.setLoader(false);
        this.sharedService.setQuickLinksData(res?.result?.responseData);
        this.sharedService.setApiResponseData(res?.result?.responseData);

        this.sharedService.setLoader(true, "MESSAGES.YOUR_ELIFEON_PIN_IS_BEING_RESET");
        this.backendService.quickActionsNextStep(this.quickLinkNextSignal).subscribe((data) => {
          this.sharedService.setLoader(false);
          if (data?.result?.screenCode === flowCodes.QAIPTVELON) {
            this.router.navigate(['issues/tv/reset-elife-pin-success'], { state: { userID: data?.responseData?.userID } });
          } else {
            //if (data?.result?.screenCode === flowCodes.QAIPTVELON1) {
            this.router.navigate(['issues/tv/unable-elife-error-occur-try-again-later']);
          }
        });
      });
    } else {
      this.sharedService.setLoader(true, "MESSAGES.YOUR_ELIFEON_PIN_IS_BEING_RESET");
      this.backendService.elifeOnReset().subscribe((data: any) => {
        this.sharedService.setLoader(false);
        if (data?.result?.screenCode === flowCodes.QAIPTVELON) {
          this.router.navigate(['issues/tv/reset-elife-pin-success'], { state: { userID: data?.responseData?.userID } });
        } else if (data?.result?.screenCode === flowCodes.QAIPTVELON1) {
          //  this.sharedService.setLoader(true);
          this.backendService.bookComplaint({ mobileNo: localStorage.getItem('CUS_MOBILE_NO'), remarks: '', ci7: false, issueResolved: false }).subscribe(() => {
            //  this.sharedService.setLoader(false);
          });
          this.router.navigate(['issues/tv/unable-elife-error-occur-try-again-later']);
        }
      });
    }

    //this.router.navigate(['issues/tv/reset-elife-pin-success']);
  }

  button2Listener() {
    if (this?.sharedService.getQuickLinksData()) {
      this.router.navigate(['/thanks']);
    } else {
      this.router.navigate(['issues/tv/detail']);
    }

    // this.sharedService.setLoader(true);
    // this.backendService.bookComplaint({ mobileNo: localStorage.getItem('CUS_MOBILE_NO'), remarks: '', ci7: false }).subscribe(() => {
    //   this.sharedService.setLoader(false);
    //   this.router.navigate(['/thanks']);
    // });
  }
}
