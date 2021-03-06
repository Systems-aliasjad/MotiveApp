import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { infoImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-pnp-port-managed-router-message',
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
//PnpPortManagedRouterMessageComponent
export class PnpPortManagedRouterMessageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.CONTINUE_WITH_ETISALAT_ROUTERR',
  };

  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.INSTALL_THIRD_PARTY_ROUTER',
  };

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private sharedServices: SharedService) {}

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
    this.sharedServices.setHeaderConfig('', false, false);
  }

  updatePageContent() {
    this.imgSrc = infoImgSrc;
    this.Section1Data = CustomerJourneyConstants.installNewRouterFlow2MessageCase;
  }

  button1Listener() {
    this.router.navigate(['/issues/internet/install-etisalat-router']);
  }
  button2Listener() {
    this.router.navigate(['/issues/internet/install-new-router/install-new-thirdparty-router']);
  }
}
