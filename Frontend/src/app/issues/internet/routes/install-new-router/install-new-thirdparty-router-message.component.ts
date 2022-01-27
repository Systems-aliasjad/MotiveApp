import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { infoImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-install-new-thirdparty-router-message',
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

  //  [button3]="button3"
  //   (button3Click)="button3Listener()"
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
    // this.Section1Data = CustomerJourneyConstants.installNewRouterFlow7MessageCase;
    this.Section1Data =  {
    header: 'MESSAGES.INSTALL_NEW_THIRD_PARTY_ROUTER',
    paragraphs: [
         'MESSAGES.FOLLOW_THESE_STEPS_TO_COMPLETE_THE_INSTALLATION',
        'MESSAGES.CONNECT_THE_NEW_ROUTER_TO_THE_X_PORT_OF_THE_WALL_MOUNTED_FIBER_BOX', 'MESSAGES.SET_THE_ROUTER_WITH_A_NEW_PASSWORD'
    ],
  }
  }

  button1Listener() {
    this.router.navigate(['/issues/internet/install-new-router-care']);
  }

  button2Listener() {
    this.router.navigate(['/thanks']);
  }

  button3Listener() {}
}
