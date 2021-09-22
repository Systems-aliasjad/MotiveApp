import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { infoImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/components/diagnose-issue/diagnose-issue.component';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-install-new-thirdparty-router-message',
  template: `<app-motive-message-bullet
    [imgSrc]="imgSrc"
    [Section1Data]="Section1Data"
    [Section2Data]="Section2Data"
    [Section2Template]="Section2Template"
    [button1]="button1"
    (button1Click)="button1Listener()"
    [button2]="button2"
    (button2Click)="button2Listener()"
    [button3]="button3"
    (button3Click)="button3Listener()"
  ></app-motive-message-bullet>`,
})
export class InstallNewThirdPartyRouterMessageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;

  button1: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.I_NEED_HELP_WITH_INSTALLING_THE_ROUTER',
  };

  button2: IMotiveButton = {
    type: 'secondary',
    title: 'BUTTONS.INSTALLATION_COMPLETED',
  };

  button3: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.FORGOT_PASSWORD',
  };

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

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
    this.imgSrc = infoImgSrc;
    this.Section1Data = CustomerJourneyConstants.installNewRouterFlow7MessageCase;
  }

  button1Listener() {
    this.router.navigate(['/issues/internet/install-new-router-care']);
  }

  button2Listener() {
    this.router.navigate(['/issues/internet/reset-internet-password']);
  }

  button3Listener() {}
}
