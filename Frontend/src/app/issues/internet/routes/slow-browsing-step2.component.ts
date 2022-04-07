import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { IDeviceCareContent, IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-slow-browsing-step2',
  template:
    '<app-device-care  [headerConfig]="headerConfig" [deviceCareContent]="careContent" [button1]="button1" [button2]="button2" (button1Click)="button1Listener()" (button2Click)="button2Listener()"></app-device-care>',
})
export class SlowBrowsingStep2Component implements OnInit, OnDestroy {
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
    pageTitle: 'HEADER.STEP_2/2',
    showBackBtn: true,
  };

  updatePageContent() {
    this.careContent.imgSrc = '';
    this.careContent.header1 = 'MESSAGES.GUIDELINES';

    this.careContent.titleBody=[

      {
        title:"MESSAGES.ARE_YOU_FACING_SLOW_BROWSING_WITH_SPECIFIC_WEBSITE_OR_APP",
        body:"MESSAGES.IF_YES_IT_COULD_BE_FROM_THE_SITE_SOURCE_ITSELF"
      },
      {
        title:"MESSAGES.ARE_YOU_USING_ANY_PUBLIC_VPN",
        body:"MESSAGES.IF_YES_PLEASE_REMOVE_ALL_UNAUTHORIZED_PUBLIC_VPN_AS_IT_COULD_AFFECT_THE_BROWSING_EXPERIENCE"
      },
      {
        title:"MESSAGES.ARE_YOU_FACING_SPEED_ISSUES_WITH_A_SPECIFIC_DEVICE",
        body:"MESSAGES.IF_YES_PLEASE_CLEAR_BROWSER_CACHE_COOKIES_OF_THAT_DEVICE"
      }

    ];

  }

  button1Listener() {
    this.sharedService.TicketCloseAPICallWithURL('thanks');
  }

  button2Listener() {
    this.router.navigate(['/issues/internet/unable-to-browse-internet/issue-not-fixed']);
  }
}
