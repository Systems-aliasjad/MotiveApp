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
  selector: 'try-again-error',
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
export class TryAgainErrorComponent implements OnInit, OnDestroy {
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
    type: 'link',
    title: 'BUTTONS.CLOSE',
  };

  constructor(
    private helperService: HelperService,
    private sharedService: SharedService,
    private backendService: BackendService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
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

    if (this.sharedService.getTryAgainResetSTBFlag() > 3) {
      this.button1.disable = true;
      this.router.navigate(['issues/tv/unable-tv-admin-pin']);
    }
  }

  updatePageContent() {
    this.imgSrc = warningImgSrc;
    this.Section1Data = CustomerJourneyConstants.tryAgainErrorOccured;
  }

  button1Listener() {
    this.sharedService.setLoader(true);
    this.backendService.bookComplaint({ mobileNo: localStorage.getItem('CUS_MOBILE_NO'), remarks: '', ci7: true }).subscribe(() => {
      this.sharedService.setTryAgainResetSTBFlag(); ///for try again button 3 times
      this.backendService.getIssueDiagnositic('IPTV').subscribe((data) => {
        this.sharedService.setLoader(false);
        this.helperService.IptvFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
      });
    });
  }

  button2Listener() {
    if (this.sharedService.getQuickLinksData()) {
      this.router.navigate(['/thanks']);
    } else {
      // this.sharedService.setLoader(true);
      this.backendService.bookComplaint({ mobileNo: localStorage.getItem('CUS_MOBILE_NO'), remarks: '', ci7: false, issueResolved: false }).subscribe(() => {
        // this.sharedService.setLoader(false);
      });
      this.router.navigate(['/thanks']);
    }
  }
}
