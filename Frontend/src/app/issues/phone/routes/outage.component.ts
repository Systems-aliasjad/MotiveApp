import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMotiveButton } from '../../../shared/components/diagnose-issue/diagnose-issue.component';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-phone-outage',
  template: `<app-diagnose-issue [messageSection]="messageSection" [button1]="button1" (button1Click)="button1Listener()" [button2]="button2" (button2Click)="button2Listener()">
  </app-diagnose-issue>`,
})
export class OutageComponent implements OnInit {
  messageSection;
  button1: IMotiveButton = {
    title: 'BUTTONS.OK',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.BOOK_A_COMPLAINT',
    type: 'link',
  };

  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit() {
    this.messageSection = CustomerJourneyConstants.phoneOutageMessageSection;
    this.sharedService.setHeaderConfig('PHONE_ISSUE_NOT_FIXED.TITLE', false);
  }

  button1Listener() {
    this.router.navigate(['/thanks']);
  }
  button2Listener() {
    this.router.navigate(['/book-Complaint']);
  }
}