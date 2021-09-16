import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMotiveButton } from '../../../shared/components/diagnose-issue/diagnose-issue.component';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-tvBox-restart-required',
  template: `<app-diagnose-issue [messageSection]="messageSection" [button1]="button1" (button1Click)="button1Listener()" [button2]="button2" (button2Click)="button2Listener()">
  </app-diagnose-issue>`,
})
export class TvBoxRestartRequiredComponent implements OnInit {
  messageSection;
  button1: IMotiveButton = {
    title: 'BUTTONS.RESTART_STB_NOW',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.RESTART_MANUALLY',
    type: 'link',
  };

  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit() {
    this.messageSection = CustomerJourneyConstants.tvBoxRestartMessageSection;
    this.sharedService.setHeaderConfig('LANDING_PAGE.TV_BOX_TITLE', false);
  }

  button1Listener() {
    this.router.navigate(['/tvBox-restart-required-successfully']);
  }

  button2Listener() {
    this.router.navigate(['/issues/tv/restart-instructions']);
  }
}
