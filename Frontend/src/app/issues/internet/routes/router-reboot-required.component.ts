import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMotiveButton } from '../../../shared/components/diagnose-issue/diagnose-issue.component';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-router-reboot-required',
  template: `<app-diagnose-issue [messageSection]="messageSection" [button1]="button1" (button1Click)="button1Listener()" [button2]="button2" (button2Click)="button2Listener()">
  </app-diagnose-issue>`,
})
export class RouterRebootRequiredComponent implements OnInit {
  messageSection;
  button1: IMotiveButton = {
    title: 'BUTTONS.RESTART_NOW',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.CLOSE',
    type: 'link',
  };

  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit() {
    this.messageSection = CustomerJourneyConstants.routerRebootRequiredMessageSection;
    this.sharedService.setHeaderConfig('LANDING_PAGE.INTERNET_ISSUES_TITLE', false);
  }

  button1Listener() {
    this.router.navigate(['/router-restart']);
  }

  button2Listener() {
    this.router.navigate(['/thanks']);
  }
}
