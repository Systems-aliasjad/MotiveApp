import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IDeviceCareContent, IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-package-transfer-step2',
  template:
    '<app-device-care [headerConfig]="headerConfig" [deviceCareContent]="careContent" [button1]="button1" [button2]="button2" (button1Click)="button1Listener()" (button2Click)="button2Listener()"></app-device-care>',
})
export class PackageTransferStep2Component implements OnInit, OnDestroy {
  subscription: Subscription;
  careContent: IDeviceCareContent = {
    imgSrc: 'https://www.etisalat.ae/en/images/414x200_tcm313-152995.jpg',
    header1: '',
    body1: '',
  };
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.RESET_TV_BOX',
  };
  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.ISSUE_RESOLVED',
  };

  constructor(private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {}

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
    // this.sharedService.setHeaderConfig('HEADER.STEP_2/2', true);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.STEP_2/2',
    showBackBtn: true,
  };

  updatePageContent() {
    this.careContent.imgSrc = 'https://www.etisalat.ae/en/images/414x200_tcm313-152995.jpg';
    this.careContent.header1 = 'SUBHEADER.RESET_TV_BOX';
    this.careContent.body1 = 'MESSAGES.IF_YOU_ARE_STILL_UNABLE_TO_WATCH_TAP_RESET_TV_BOX_SO_THAT_WE_CAN_RESET_IT_REMOTELY';
  }

  button1Listener() {}

  button2Listener() {
    this.router.navigate(['/thanks']);
  }
}
