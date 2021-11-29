import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApplicableCodes, successImgSrc, warningImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { BackendService } from 'src/app/services/backend.service';

/**
 * Tv Box Not Reachable Success
 */
@Component({
  selector: 'single-stb-found-error',
  template: `<motive-message [imgSrc]="imgSrc" [Section1Data]="Section1Data" [button1]="button1" (button1Click)="button1Listener()"></motive-message>`,
})
export class SingleSTBFoundComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  button1: IMotiveButton = {
    type: 'secondary',
    title: 'BUTTONS.CONTINUE',
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

  updateHeader() {}

  updatePageContent() {
    this.imgSrc = warningImgSrc;
    this.Section1Data = CustomerJourneyConstants.singleSTBFountError;
  }

  button1Listener() {
    this.backendService.bookComplaint({ mobileNo: localStorage.getItem('CUS_MOBILE_NO'), remarks: '', ci7: false, issueResolved: true }).subscribe(() => {
      // this.sharedService.setLoader(false);
    });
    this.router.navigate(['/thanks']);
  }

  button2Listener() {
    // this.sharedService.setLoader(true);
    this.backendService.bookComplaint({ mobileNo: localStorage.getItem('CUS_MOBILE_NO'), remarks: '', ci7: false, issueResolved: true }).subscribe(() => {
      // this.sharedService.setLoader(false);
    });
    this.router.navigate(['/thanks']);
  }
}
