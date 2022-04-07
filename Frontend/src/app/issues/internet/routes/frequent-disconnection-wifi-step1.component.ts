import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { IDeviceCareContent, IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-browsing-unable-step1',
  template:
    '<app-device-care  [headerConfig]="headerConfig" [deviceCareContent]="careContent" [button1]="button1" [button2]="button2" (button1Click)="button1Listener()" (button2Click)="button2Listener()"></app-device-care>',
})
export class FrequentDisconnectionWifiStep1Component implements OnInit, OnDestroy {
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
    title: 'BUTTONS.REQUEST_SUPPORT',
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
    pageTitle: 'HEADER.STEP_1/1',
    showBackBtn: true,
  };

  updatePageContent() {
    this.careContent.imgSrc = '';
    this.careContent.header1 = 'MESSAGES.WIFI_GUIDELINES_WIFI_BEST_PRACTICES';
    //this.careContent.body1 = 'MESSAGES.ETHERNET_GUIDELINES_BEST_PRACTICES';
     this.careContent.bullet2 = ['MESSAGES.ENSURE_THAT_YOUR_WIFI_NETWORK_PASSWORD_IS_ENABLED', 'MESSAGES.IF_YOU_ARE_CLOSE_TO_THE_ROUTER_PLEASE_CONNECT_TO_5GHZ_SIGNAL_AS_IT_GIVES_HIGHER_BANDWIDTH_IN_NARROW_RANGE','MESSAGES.IF_YOU_ARE_FAR_FROM_THE_ROUTER_PLEASE_CONNECT_TO_2_4_GHZ_SIGNAL_AS_IT_GIVES_HIGHER_BANDWIDTH_IN_WIDE_RANGE'];
  
  }

  button1Listener() {
    this.sharedService.TicketCloseAPICallWithURL('thanks');
  }

  button2Listener() {
    this.router.navigate(['/issues/internet/unable-to-browse-internet/issue-not-fixed']);
  }
}
