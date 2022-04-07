
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { IDeviceCareContent, IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-slow-browsing-step1',
  template:
    '<app-device-care  [headerConfig]="headerConfig" [deviceCareContent]="careContent" [button1]="button1" [button2]="button2" (button1Click)="button1Listener()" (button2Click)="button2Listener()"></app-device-care>',
})
export class SlowBrowsingStep1Component implements OnInit, OnDestroy {
  subscription: Subscription;
  careContent: IDeviceCareContent = {
    imgSrc: '',
    header1: '',
    body1: '',
  };
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.ISSUE_FIXED',
  };
  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
  };

  constructor(private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute, private backendService: BackendService) {}

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
    //this.sharedService.setHeaderConfig('HEADER.STEP_1/3', true);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.STEP_1/2',
    showBackBtn: true,
  };

  updatePageContent() {
    this.careContent.imgSrc = '';
    this.careContent.header1 = 'MESSAGES.GUIDELINES';
    this.careContent.body1 = 'MESSAGES.IS_YOUR_DEVICE_CONNECTED_TO_THE_ROUTER_VIA_WIFI';
    this.careContent.body2 = 'MESSAGES.IF_YES_PLEASE_FOLLOW_THESE_GUIDELINES';
     this.careContent.bullet2 = ['MESSAGES.ENSURE_THAT_YOUR_WIFI_NETWORK_PASSWORD_IS_ENABLED', 'MESSAGES.IF_YOU_ARE_CLOSE_TO_THE_ROUTER_PLEASE_CONNECT_TO_5GHZ_SIGNAL_AS_IT_GIVES_HIGHER_BANDWIDTH_IN_NARROW_RANGE','MESSAGES.IF_YOU_ARE_FAR_FROM_THE_ROUTER_PLEASE_CONNECT_TO_2_4_GHZ_SIGNAL_AS_IT_GIVES_HIGHER_BANDWIDTH_IN_WIDE_RANGEMAKE_SURE_TO_SECURE_YOUR_WIFI_NETWORK'];
  
  }

  button1Listener() {
      this.router.navigate(['thanks']);
  }

  button2Listener() {
    this.router.navigate(['issues/internet/slow-browsing-step2']);
  }
}
