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
export class FrequentDisconnectionEthernetStep1Component implements OnInit, OnDestroy {
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
    this.careContent.header1 = 'MESSAGES.ETHERNET_GUIDELINES_BEST_PRACTICES';
    //this.careContent.body1 = 'MESSAGES.ETHERNET_GUIDELINES_BEST_PRACTICES';
     this.careContent.bullet2 = ['MESSAGES.RESTART_THE_WALL_MOUNTED_FIBER_BOX', 'MESSAGES.RESTART_THE_ROUTER','MESSAGES.ENSURE_THAT_THE_CABLE_BETWEEN_THE_ROUTER_AND_THE_FIBER_BOX_IS_CONNECTED_PROPERLY'];
  
  }

  button1Listener() {
    this.sharedService.TicketCloseAPICallWithURL('thanks');
  }

  button2Listener() {
    this.router.navigate(['/issues/internet/unable-to-browse-internet/issue-not-fixed']);
  }
}
