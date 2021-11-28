import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { BackendService } from 'src/app/services/backend.service';
import { flowCodes } from 'src/app/shared/constants/constants';

/**
 * Forgot Code Control Barring (CCB) PIN
 */
@Component({
  selector: 'forgot-ccb-pin',
  template: `<app-ccb-pin-reset-form [headerConfig]="headerConfig" [button1]="button1" (button1Click)="button1Listener($event)" [rules]="rulesList"></app-ccb-pin-reset-form>`,
})
export class ForgotCcbPinComponent implements OnInit, AfterViewInit, OnDestroy {
  subscription: Subscription;
  quickLinkNextSignal;
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.NEXT',
  };

  rulesList: string[] = ['4 random digits'];
  constructor(private backendService: BackendService, private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {}
  ngAfterViewInit(): void {
    // if (this?.quickLinkNextSignal) {
    //   this.callAPI();
    // }
  }
  callAPI() {
    if (this?.quickLinkNextSignal && this.sharedService.getQuickLinksData()) {
      this.sharedService.setLoader(true, 'MESSAGES.WE_ARE_RESETTING_YOUR_CCB_PIN');
      this.backendService.updateCCBPinQuickLinks(null).subscribe((data: any) => {
        this.sharedService.setLoader(false);
        if (data?.result?.screenCode === flowCodes.QAVOICECCB1 || data?.result?.screenCode === flowCodes.QAVOICECCB2) {
          this.router.navigate(['/issues/phone/unable-process-reset-ccb']);
        }
      });
    } else if (this?.quickLinkNextSignal) {
      this.sharedService.setLoader(true);
      this.backendService.quickActionsInitialData().subscribe((res) => {
        this.sharedService.setLoader(false);
        this.sharedService.setQuickLinksData(res?.result?.responseData);
        this.sharedService.setApiResponseData(res?.result?.responseData);
        this.sharedService.setLoader(true);
        this.backendService.updateCCBPinQuickLinks(null).subscribe((data) => {
          this.sharedService.setLoader(false);
          if (data?.result?.screenCode === flowCodes.QAVOICECCB1 || data?.result?.screenCode === flowCodes.QAVOICECCB2) {
            this.router.navigate(['/issues/phone/unable-process-reset-ccb']);
          }
        });
      });
    }
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {
    const navigation = this.router.getCurrentNavigation();
    this.quickLinkNextSignal = navigation?.extras?.state?.quickLinkNextSignal;
    //this.sharedService.setHeaderConfig('HEADER.RESET_CCB_PIN', true);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.RESET_CCB_PIN',
    showBackBtn: true,
  };

  button1Listener(event) {
    // if (this?.quickLinkNextSignal && this.sharedService.getQuickLinksData()) {
    //   this.sharedService.setLoader(true, 'MESSAGES.WE_ARE_RESETTING_YOUR_CCB_PIN');
    //   this.backendService.updateCCBPinQuickLinks(event?.value?.NewPassword).subscribe((data: any) => {
    //     this.sharedService.setLoader(false);
    //     if (data?.result?.screenCode === flowCodes.QAVOICECCB1 || data?.result?.screenCode === flowCodes.QAVOICECCB2) {
    //       //  this.router.navigate(['/issues/phone/forgot-ccb-pin-failed-message']);
    //       this.router.navigate(['/issues/phone/unable-process-reset-ccb']);
    //     } else if (data?.result?.screenCode === flowCodes.QAVOICECCB4) {
    //       this.router.navigate(['/issues/phone/reset-ccb-error-occur-try-again-later']);
    //     } else if (data?.result?.screenCode === flowCodes.QAVOICECCB) {
    //       this.router.navigate(['/issues/phone/no-issue-phone-phone-reset-ccb-pin-successfully']);
    //     } else {
    //       this.router.navigate(['/unknown-issue']);
    //     }
    //   });
    // } else
    if (this?.quickLinkNextSignal) {
      this.sharedService.setLoader(true, 'MESSAGES.WE_ARE_RESETTING_YOUR_CCB_PIN');
      this.backendService.quickActionsInitialData().subscribe((res) => {
        this.sharedService.setLoader(false);
        this.sharedService.setQuickLinksData(res?.result?.responseData);
        this.sharedService.setApiResponseData(res?.result?.responseData);

        this.sharedService.setLoader(true, 'MESSAGES.WE_ARE_RESETTING_YOUR_WIFI_PASSWORD');
        this.backendService.updateCCBPinQuickLinks(event?.value?.NewPassword).subscribe((data) => {
          this.sharedService.setLoader(false);
          if (data?.result?.screenCode === flowCodes.QAVOICECCB1 || data?.result?.screenCode === flowCodes.QAVOICECCB2) {
            //  this.router.navigate(['/issues/phone/forgot-ccb-pin-failed-message']);
            this.router.navigate(['/issues/phone/unable-process-reset-ccb']);
          } else if (data?.result?.screenCode === flowCodes.QAVOICECCB4) {
            this.router.navigate(['/issues/phone/reset-ccb-error-occur-try-again-later']);
          } else if (data?.result?.screenCode === flowCodes.QAVOICECCB) {
            this.router.navigate(['/issues/phone/no-issue-phone-phone-reset-ccb-pin-successfully']);
          } else {
            this.router.navigate(['/unknown-issue']);
          }
        });
      });
    } else {
      this.backendService.updateCCBPin(event?.value?.NewPassword).subscribe((data) => {
        if (data?.result?.screenCode === flowCodes.QAVOICECCB1 || data?.result?.screenCode === flowCodes.QAVOICECCB2) {
          this.router.navigate(['/issues/phone/unable-process-reset-ccb']);
        } else if (data?.result?.screenCode === flowCodes.QAVOICECCB4) {
          this.router.navigate(['/issues/phone/reset-ccb-error-occur-try-again-later']);
        } else if (data?.result?.screenCode === flowCodes.QAVOICECCB) {
          this.router.navigate(['/issues/phone/no-issue-phone-phone-reset-ccb-pin-successfully']);
        } else {
          this.router.navigate(['/unknown-issue']);
        }

        // if (data?.result?.screenCode === flowCodes.QAVOICECCB1) {
        //   this.router.navigate(['/issues/phone/forgot-ccb-pin-failed-message']);
        // } else if (data?.result?.screenCode === flowCodes.QAVOICECCB) {
        //   this.router.navigate(['/issues/phone/no-issue-phone-phone-reset-ccb-pin-successfully']);
        // } else {
        //   this.router.navigate(['/unknown-issue']);
        // }
      });
    }
  }
}
