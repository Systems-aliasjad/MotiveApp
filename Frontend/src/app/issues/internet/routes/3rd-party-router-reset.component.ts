import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { IMotiveButton } from '../../../shared/components/diagnose-issue/diagnose-issue.component';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-3rd-party-router-reset',
  template: `<app-diagnose-issue
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
export class ThirdPartyRouterResetComponent implements OnInit {
  messageSection;
  button1: IMotiveButton = {
    title: 'BUTTONS.VIEW_DEVICE_CARE',
    type: 'link',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.ISSUE_FIXED',
    type: 'primary',
  };

  button3: IMotiveButton = {
    title: 'BUTTONS.BOOK_A_COMPLAINT',
    type: 'secondary',
  };

  constructor(private sharedService: SharedService, private router: Router, private modalCtrl: ModalController) {}

  ngOnInit() {
    this.messageSection = CustomerJourneyConstants.routerConfig3rdPartyMessageSection;
    this.sharedService.setHeaderConfig('LANDING_PAGE.INTERNET_ISSUES_TITLE', false);
  }

  async button1Listener() {
    this.router.navigate(['/device-care']);
  }

  button2Listener() {
    this.router.navigate(['/thanks']);
  }

  button3Listener() {
    this.router.navigate(['/bookComplaint']);
  }
}
