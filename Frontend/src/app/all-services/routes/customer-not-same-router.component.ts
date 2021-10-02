import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'all-services-customer-not-using-router',
  template: `<app-diagnose-issue
    [headerConfig]="headerConfig"
    [messageSection]="messageSection"
    [button1]="button1"
    (button1Click)="button1Listener()"
    [button2]="button2"
    (button2Click)="button2Listener()"
    [button3]="button3"
    (button3Click)="button3Listener()"
  >
  </app-diagnose-issue>`,
})
export class CustomerNotSameRouterComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messageSection;
  button1: IMotiveButton = {
    title: 'LINKS.DEVICE_CARE',
    type: 'link',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.ISSUE_FIXED',
    type: 'primary',
  };

  button3: IMotiveButton = {
    title: 'BUTTONS.ISSUE_STILL_NOT_RESOLVED',
    type: 'link',
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
    //this.sharedService.setHeaderConfig('HEADER.ALL_SERVICES', false);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.ALL_SERVICES',
    showBackBtn: true,
  };

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.customerNotUsingSameRouterAllServicesSection;
  }

  button1Listener() {
    this.router.navigate(['/router-not-reachable-own-router-care']);
  }

  button2Listener() {
    this.router.navigate(['/thanks']);
  }
  button3Listener() {}
}
