import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-unable-watch-channel',
  template: `<app-diagnose-issue
    [headerConfig]="headerConfig"
    [messageSection]="messageSection"
    [button1]="button1"
    (button1Click)="button1Listener()"
    [button2]="button2"
    (button2Click)="button2Listener()"
  >
  </app-diagnose-issue>`,
})
export class UnableWatchChannelComponent implements OnInit {
  messageSection;
  button1: IMotiveButton = {
    title: 'BUTTONS.ISSUE_RESOLVED',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
    type: 'link',
  };

  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit() {
    this.updatePageContent();
  }

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.unableWatchChannelsMessageSection;
    // this.sharedService.setHeaderConfig('MESSAGES.UNALBE_TO_WATCH_CHANNELS', false);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'MESSAGES.UNALBE_TO_WATCH_CHANNELS',
    showBackBtn: true,
  };

  button1Listener() {
    this.router.navigate(['/thanks']);
  }

  button2Listener() {
    this.router.navigate(['/issues/tv/unable-watch-channel/step1']);
  }
}
