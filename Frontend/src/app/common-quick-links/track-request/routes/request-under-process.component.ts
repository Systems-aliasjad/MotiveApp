import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApplicableCodes, infoImgSrc, successImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { BackendService } from 'src/app/services/backend.service';

/**
 * Request under process
 */
@Component({
  selector: 'app-request-under-process',
  template: `<motive-message [imgSrc]="imgSrc" [Section1Data]="Section1Data" [button1]="button1" (button1Click)="button1Listener()"></motive-message>`,
})
export class RequestUnderProcessComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;

  button1: IMotiveButton = {
    type: 'secondary',
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
    this.Section1Data = CustomerJourneyConstants.requestUnderProcess;
  }

  button1Listener() {
    this.sharedService.TicketCloseAPICallWithURL('thanks');
  }
}
