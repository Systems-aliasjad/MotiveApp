import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IDeviceCareContent, IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-package-transfer-step1',
  template:
    '<app-device-care [headerConfig]="headerConfig" [deviceCareContent]="careContent" [button1]="button1" [button2]="button2" (button1Click)="button1Listener()" (button2Click)="button2Listener()"></app-device-care>',
})
export class PackageTransferStep1Component implements OnInit, OnDestroy {
  subscription: Subscription;
  careContent: IDeviceCareContent = {
    imgSrc: 'https://www.etisalat.ae/en/images/414x200_tcm313-152995.jpg',
    header1: '',
    body1: '',
  };
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
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
    // this.sharedService.setHeaderConfig('HEADER.STEP_1/2', true);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.STEP_1/2',
    showBackBtn: true,
  };

  updatePageContent() {
    this.careContent.imgSrc = 'https://www.etisalat.ae/en/images/414x200_tcm313-152995.jpg';
    this.careContent.header1 = 'SUBHEADER.CHECK_CHANNEL_FILTER';
    this.careContent.body1 = 'MESSAGES.PLEASE_REMOVE_ALL_CHANNEL_FILTERS_AND_THEN_TRY_TO_WATCH_THE_CHANNEL_AGAIN';
    this.careContent.body2 = 'MESSAGES.YOU_MAY_VIEW_OUR_GUIDELINES_ON_HOW_TO_REMOVE_THE_CHANNEL_FILTER';
  }

  button1Listener() {
    this.router.navigate(['/issues/tv/transfer-package/step2']);
  }

  button2Listener() {
    this.router.navigate(['/thanks']);
  }
}
