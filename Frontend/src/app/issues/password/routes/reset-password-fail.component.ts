import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { warningImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { SharedService } from 'src/app/shared/shared.service';

/**
 * Unable To Reset Password
 */
@Component({
  selector: 'reset-password-fail',
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
export class ResetPasswordFailComponenet implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.BUY_ETISALAT_ROUTER',
  };
  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.CLOSE',
  };

  constructor(private backendService: BackendService, private router: Router, private sharedService: SharedService, private activatedRoute: ActivatedRoute) {}

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
    this.Section1Data = CustomerJourneyConstants.unableToResetPassword;
  }

  button1Listener() {
    //this.router.navigate(['/thanks']);
  }

  button2Listener() {
    this.sharedService.TicketCloseAPICallWithURL('thanks');
  }
}
