import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-password-reset',
  template: `<app-diagnose-issue [messageSection]="messageSection" [button1]="button1" (button1Click)="button1Listener()" [button2]="button2" (button2Click)="button2Listener()">
  </app-diagnose-issue>`,
})
export class PasswordResetComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messageSection;
  button1: IMotiveButton = {
    title: 'BUTTONS.RESET_NOW',
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
    this.sharedService.setHeaderConfig('MESSAGES.INTERNET_ISSUES', false);
  }

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.internetPasswordResetRequiredMessageSection;
  }

  button1Listener() {
    this.router.navigate(['/issues/internet/reset-internet-password']);
  }

  button2Listener() {
    this.router.navigate(['/thanks']);
  }
}
