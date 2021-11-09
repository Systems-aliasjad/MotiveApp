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
  selector: 'unable-process-reset-ccb-error',
  template: `<motive-message
    [imgSrc]="imgSrc"
    [Section1Data]="Section1Data"
    [Section2Data]="Section2Data"
    [Section2Template]="Section2Template"
    [button1]="button1"
    (button1Click)="button1Listener()"
  ></motive-message>`,
})
export class UnableProcessResetCcbErrorComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  quickLinkNextSignal;
  button1: IMotiveButton = {
    title: 'BUTTONS.CLOSE',
    type: 'secondary',
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

  updateHeader() {}

  updatePageContent() {
    this.imgSrc = warningImgSrc;
    this.Section1Data = {
      header: 'MESSAGES.UNABLE_TO_PROCESS_REQUEST',
      paragraphs: ['MESSAGES.IT_LOOKS_LIKE_YOU_ARE_NOT_SUBSCRIBED_TO_CODE_CONTROL_BARRING_SERVICE'],
    };
  }

  button1Listener() {
    this.router.navigate(['/thanks']);
    // if (this?.sharedService.getQuickLinksData()) {
    //   this.router.navigate(['landing']);
    // } else {
    //   this.router.navigate(['/thanks']);
    // }
  }
}
