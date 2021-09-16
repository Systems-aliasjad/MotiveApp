import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { IMotiveButton } from '../../../shared/components/diagnose-issue/diagnose-issue.component';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-internet-password-reset',
  template: `<app-diagnose-issue [messageSection]="messageSection" [button1]="button1" (button1Click)="button1Listener()" [button2]="button2" (button2Click)="button2Listener()">
  </app-diagnose-issue>`,
})
export class InternetPasswordResetComponent implements OnInit {
  messageSection;
  button1: IMotiveButton = {
    title: 'BUTTONS.RESET_NOW',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.CLOSE',
    type: 'link',
  };

  constructor(private sharedService: SharedService, private router: Router, private modalCtrl: ModalController) {}

  ngOnInit() {
    this.messageSection = CustomerJourneyConstants.internetPasswordResetRequiredMessageSection;
    this.sharedService.setHeaderConfig('LANDING_PAGE.INTERNET_ISSUES_TITLE', false);
  }

  button1Listener() {
    this.router.navigate(['/reset-internet-password']);
  }

  button2Listener() {
    this.router.navigate(['/thanks']);
  }
}
