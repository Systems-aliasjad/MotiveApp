import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { successImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'router-intall-scuccessfully-message',
  template: `<motive-message
    [imgSrc]="imgSrc"
    [Section1Data]="Section1Data"
    [Section2Data]="Section2Data"
    [Section2Template]="Section2Template"
 
   
    [button3]="button3"
    (button3Click)="button3Listener()"
  ></motive-message>`,

//  [button2]="button2"
//     (button2Click)="button2Listener()"
    //  [button1]="button1"
    // (button1Click)="button1Listener()"
})
export class RouterInstallSuccessfullyMessageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;
  component = '';

  button1: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.CONFIGURE_ROUTER',
    explanatoryNote: '',
  };

  button2: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
    explanatoryNote: '',
  };

  button3: IMotiveButton = {
    // type: 'link',
    type: 'secondary',
    title: 'BUTTONS.CLOSE',
    explanatoryNote: '',
  };

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.component = this.router.getCurrentNavigation()?.extras?.state?.component;
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
    });
    this.updatePageContent();

    ////TO Remove This
    ////When we get the clear picture of App.MotiveH&S.5.1.2
    if(!this.component){
      this.button1 = null;
      this.button2 = null;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {}

  updatePageContent() {
    this.imgSrc = successImgSrc;
    // this.Section1Data = CustomerJourneyConstants.routerInstallSuccessfullyMessageCase;
    this.Section1Data = {
    header: 'MESSAGES.ROUTER_INSTALLED_SUCCESSFULLY',
    paragraphs: ['MESSAGES.YOUR_ROUTER_SHOULD_NOW_WORK_TAP_CONFIGURE_ROUTER_OR_CONTINUE_TO_TROUBLESHOOTING_IF_YOU_ARE_STILL_FACING_AN_ISSUE'],
  };
  }

  button1Listener() {
    this.router.navigate(['/issues/internet/install-new-router-care']);
  }

  button2Listener() {
    this.router.navigate(['/issues/internet/install-new-router-care']);
  }

  button3Listener() {
    this.router.navigate(['/thanks']);
  }
}
