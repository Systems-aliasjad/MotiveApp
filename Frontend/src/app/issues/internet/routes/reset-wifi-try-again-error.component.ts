import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { warningImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { BackendService } from 'src/app/services/backend.service';
import { HelperService } from 'src/app/shared/helper/helper.service';

/**
 * Try Again Error
 */
@Component({
  selector: 'reest-wifi-try-again-error',
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
export class ResetWifiTryAgainErrorComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  quickLinkNextSignal;
  button1: IMotiveButton = {
    title: 'BUTTONS.TRY_AGAIN',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.ISSUE_RESOLVED',
    type: 'link',
  };

  constructor(
    private helperService: HelperService,
    private backendService: BackendService,
    private sharedService: SharedService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
    });
    const navigation = this.router.getCurrentNavigation();
    this.quickLinkNextSignal = navigation?.extras?.state?.quickLinkNextSignal;

    this.updatePageContent();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {
    if (this.sharedService.getTryAgainResetWifiPasswordFlag() > 3) {
      this.button1.disable = true;
    }
  }

  updatePageContent() {
    this.imgSrc = warningImgSrc;
    this.Section1Data = CustomerJourneyConstants.tryAgainErrorOccured;
  }

  button1Listener() {
    this.sharedService.setLoader(true);
    this.backendService.bookComplaint({ mobileNo: this.sharedService.getLocalStorage('CUS_MOBILE_NO'), remarks: '', issueResolved: false }).subscribe(() => {
      this.sharedService.setTryAgainResetWifiPasswordFlag(); ///for try again button 3 times
      this.backendService.getIssueDiagnositic('INTERNET').subscribe((data) => {
        this.sharedService.setLoader(false);
      this.sharedService.SetTsOutCome(data?.result?.responseData?.tsOutcome??'');
        this.helperService.InternetFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
      });
    });
    // this.router.navigate(['/issues/tv/box-not-reachable-try-again']);
  }

  button2Listener() {
    this.sharedService.TicketCloseAPICallWithURL('thanks');
    // if (this?.sharedService.getQuickLinksData()) {
    //   this.router.navigate(['landing']);
    // } else {
    //   this.router.navigate(['/thanks']);
    // }
  }
}
