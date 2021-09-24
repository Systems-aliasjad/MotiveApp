import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMotiveButton } from '../components/diagnose-issue/diagnose-issue.component';
import { CustomerJourneyConstants } from '../constants/CustomerJourneyConstants';
import { SharedService } from '../shared.service';

@Component({
  selector: 'all-services-ont-reboot-internet',
  template: `<app-diagnose-issue [messageSection]="messageSection" [button1]="button1" (button1Click)="button1Listener()" [button2]="button2" (button2Click)="button2Listener()">
  </app-diagnose-issue>`,
})
export class OntRebootRequiredInternetComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messageSection;
  button1: IMotiveButton = {
    title: 'BUTTONS.RESTART_ONT_NOW',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.RESTART_MANUALLY',
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
    this.sharedService.setHeaderConfig('HEADER.INTERNET_ISSUES', false);
  }

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.ontRestartTVAllServices;
  }

  button1Listener() {
    //this.router.navigate(['/issues/phone/ont-reboot-message']);
  }

  button2Listener() {
    // this.router.navigate(['/issues/phone/ont-restart-instructions']);
  }
}
