import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMotiveButton } from '../../../shared/components/diagnose-issue/diagnose-issue.component';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-router-fixed-restart-required',
  template: `<app-diagnose-issue [messageSection]="messageSection" [button1]="button1" (button1Click)="button1Listener()" [button2]="button2" (button2Click)="button2Listener()">
  </app-diagnose-issue>`,
})
export class RouterFixedRestartRequiredComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messageSection;
  button1: IMotiveButton = {
    title: 'BUTTONS.HOW_DO_I_RESTART',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.CLOSE',
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
    this.sharedService.setHeaderConfig('LANDING_PAGE.INTERNET_ISSUES_TITLE', false);
  }

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.routerFixedRestartRequired;
  }

  button1Listener() {
    this.router.navigate(['/issues/internet/router-restart']);
  }

  button2Listener() {
    this.router.navigate(['/thanks']);
  }
}
