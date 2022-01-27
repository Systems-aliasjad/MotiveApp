import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { infoImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-continue-installing-thirdparty-router-message',
  template: `<motive-message
    [imgSrc]="imgSrc"
     [Section1Data]="Section1Data"
    [Section2Data]="Section2Data"
    [Section2Template]="Section2Template"
    [button1]="button1"
    (button1Click)="button1Listener()"
  ></motive-message>`,
})
export class ContinueInstallingThirdPartyRouterMessageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  button1: IMotiveButton = {
    type: 'secondary',
    title: 'BUTTONS.DONE',
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
    // this.Section1Data = CustomerJourneyConstants.installNewRouterFlow4MessageCase;
    this.Section1Data = {
    header: 'MESSAGES.INSTALLING_THIRD_PARTY_ROUTER',
     paragraphs: ['MESSAGES.INSTALLATION_OF_ROUTER_IS_IN_PROGESS_IT_WILL_TAKE_UP_TO_30_MINUTEs', 'MESSAGES.FOLLOW_THESE_STEPS_AFTER_30_MINUTES','MESSAGES.CONNECT_THE_NEW_ROUTER_TO_X_PORT_OF_THE_WALL_MOUNTED_FIBER_BOX','MESSAGES.SET_THE_ROUTER_WITH_A_NEW_PASSWORD'],

  };
  }

  button1Listener() {
    this.router.navigate(['/thanks']);
  }
}
