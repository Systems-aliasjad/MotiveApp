import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { SharedService } from 'src/app/shared/shared.service';
import { IUnableToConnectContent } from '../shared/unable-to-connect/unable-to-connect.component';

@Component({
  selector: 'unable-to-make-video-call',
  template: `<app-unable-to-connect
    [headerConfig]="headerConfig"
    [unableToConnectContent]="content"
    [button1]="button1"
    (button1Click)="button1Listener()"
    [button2]="button2"
    (button2Click)="button2Listener()"
  >
  </app-unable-to-connect>`,
})
export class UnableToMaleVideoCallComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  content: IUnableToConnectContent = new IUnableToConnectContent();

  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.ISSUE_FIXED',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.BOOK_A_COMPLAINT',
    type: 'link',
  };

  constructor(private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute, private backendService: BackendService) {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
      this.updatePageContent();
    });
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {
    // this.sharedService.setHeaderConfig('HEADER.UNABLE_TO_VIDEO_CALLS', true);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.UNABLE_TO_VIDEO_CALLS',
    showBackBtn: true,
  };

  updatePageContent() {
    this.content.imgSrc = 'https://www.etisalat.ae/en/images/414x200_tcm313-152995.jpg';
    this.content.listItems = [
      {
        text: 'MESSAGES.MAKE_SURE_YOUR_CONNECTED_WITH_YOUR_HOME_INTERNET',
        children: [],
      },
      {
        text: 'MESSAGES.MAKE_SURE_YOU_ARE_USING_THE_ONE_OF_THESE_AUTHORIZED_APPS',
        children: [
          { text: 'MESSAGES.BOTIM', children: [] },
          { text: "MESSAGES.CME", children: [] },
          { text: 'MESSAGES.HIU_MESSANGER', children: [] },
          { text: 'MESSAGES.VOICE_UAE', children: [] },
          { text: 'MESSAGES.YZER_ANDROID_ONLY', children: [] },
        ],
      },
      {
        text: 'MESSAGES.PLEASE_DELETE_ALL_AVAILABLE_VPN',
        children: [],
      },
      {
        text: 'MESSAGES.IF_ISSUE_IS_STILL_NOT_FIXED_INSTALL_THE_APP_AGAIN',
        children: [],
      },
    ];
  }

  button1Listener() {
    this.sharedService.TicketCloseAPICallWithURL('thanks');
  }

  button2Listener() {
    // this.router.navigate(['issues/internet/book-complaint']);
    this.router.navigate(['/issues/internet/unable-to-browse-internet/issue-not-fixed']);
  }
}
