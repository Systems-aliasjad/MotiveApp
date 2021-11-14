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
    [button1]="button1"
    (button1Click)="button1Listener()"
    [button2]="button2"
    (button2Click)="button2Listener()"
    [button3]="button3"
    (button3Click)="button3Listener()"
  ></motive-message>`,
})
export class RouterInstallSuccessfullyMessageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  imgSrc;

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
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
    });
    this.updatePageContent();

    ////TO Remove This
    ////When we get the clear picture of App.MotiveH&S.5.1.2
    this.button1 = null;
    this.button2 = null;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {}

  updatePageContent() {
    this.imgSrc = successImgSrc;
    this.Section1Data = CustomerJourneyConstants.routerInstallSuccessfullyMessageCase;
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
