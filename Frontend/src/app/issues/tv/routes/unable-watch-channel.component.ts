import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMotiveButton } from '../../../shared/components/diagnose-issue/diagnose-issue.component';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-unable-watch-channel',
  template: `<app-diagnose-issue [messageSection]="messageSection" [button1]="button1" (button1Click)="button1Listener()" [button2]="button2" (button2Click)="button2Listener()">
  </app-diagnose-issue>`,
})
export class UnableWatchChannelComponent implements OnInit {
  messageSection;
  button1: IMotiveButton = {
    title: 'BUTTONS.ISSUE_RESLOVED',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
    type: 'link',
  };

  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit() {
    this.messageSection = CustomerJourneyConstants.unableWatchChannelsMessageSection;
    this.sharedService.setHeaderConfig('LANDING_PAGE.UNALBE_TO_WATCH_CHANNEL', false);
  }

  button1Listener() {
    this.router.navigate(['/thanks']);
  }

  button2Listener() {
    this.router.navigate(['/unable-to-watch-channel-continue']);
  }
}
