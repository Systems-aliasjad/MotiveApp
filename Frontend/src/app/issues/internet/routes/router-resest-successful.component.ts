import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { successImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { SharedService } from 'src/app/shared/shared.service';
import { HelperService } from 'src/app/shared/helper/helper.service';

@Component({
  selector: 'router-reset-successful',
  template: `<motive-message
    [imgSrc]="imgSrc"
    [Section1Data]="Section1Data"
    [Section2Data]="Section2Data"
    [Section2Template]="Section2Template"
    [button1]="button1"
    (button1Click)="button1Listener()"
  ></motive-message>`,
})
export class RouterResetSuccessfulComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  routerResetSuccessful=false;
  hsiPasswordReset;
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.CONTINUE',
    explanatoryNote: '',
  };

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private sharedService: SharedService, private backendService: BackendService, private helperService: HelperService) {}

  ngOnInit() {
    this.routerResetSuccessful = this.router.getCurrentNavigation()?.extras?.state?.routerResetSuccessful;
    this.hsiPasswordReset = this.router.getCurrentNavigation()?.extras?.state?.hsiPasswordReset;
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
    if(this.routerResetSuccessful){this.button1.title = "BUTTONS.OK";}
    this.imgSrc = successImgSrc;
    this.Section1Data = CustomerJourneyConstants.routerResetSuccess;
  }

  button1Listener() {
    if(this.routerResetSuccessful){
      this.helperService.handleInternetPasswordResetCase(this.hsiPasswordReset, 'internet');
    } else {
      this.sharedService.TicketCloseAPICallWithURL('thanks');
    }
  }
}
