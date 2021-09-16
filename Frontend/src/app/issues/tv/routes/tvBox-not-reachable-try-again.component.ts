import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ERoutingIds } from 'src/app/shared/constants/constants';
import { InternetIssuesDialog } from 'src/app/shared/dialogs/internet-issues-dialog/internet-issues-dialog.component';
import { IMotiveButton } from '../../../shared/components/diagnose-issue/diagnose-issue.component';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-tvBox-not-reachable-try-again',
  template: `<app-diagnose-issue [messageSection]="messageSection" [button1]="button1" (button1Click)="button1Listener()" [button2]="button2" (button2Click)="button2Listener()">
  </app-diagnose-issue>`,
})
export class TvBoxNotReachableTryAgainComponent implements OnInit {
  messageSection;
  button1: IMotiveButton = {
    title: 'BUTTONS.BOOK_AN_APPOINTMENT',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.TRY_AGAIN_LATER',
    type: 'link',
  };

  constructor(private sharedService: SharedService, private router: Router, private modalCtrl: ModalController) {}

  ngOnInit() {
    this.messageSection = CustomerJourneyConstants.tvBoxNotReachableAgainMessageSection;
    this.sharedService.setHeaderConfig('LANDING_PAGE.TV_BOX_TITLE', false);
  }

  button1Listener() {
    this.router.navigate(['/tvBox-not-reachable-form']);
  }

  button2Listener() {}
}
