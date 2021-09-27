import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMotiveButton } from 'src/app/shared/components/diagnose-issue/diagnose-issue.component';
import { SharedService } from 'src/app/shared/shared.service';
import { IUnableToConnectContent } from '../shared/unable-to-connect/unable-to-connect.component';

@Component({
  selector: 'unable-to-make-video-call',
  template: `<app-unable-to-connect
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

  constructor(private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {
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
    this.sharedService.setHeaderConfig('HEADER.UNABLE_TO_VIDEO_CALLS', true);
  }

  updatePageContent() {
    this.content.imgSrc = 'https://www.etisalat.ae/en/images/414x200_tcm313-152995.jpg';
    this.content.listItems = [
      {
        text: 'Make sure your connected with your home internet.',
        children: [],
      },
      {
        text: 'Make sure you are using the one of these authorized apps:',
        children: [
          { text: 'Botim', children: [] },
          { text: "C'ME", children: [] },
          { text: 'HiU Messanger', children: [] },
          { text: 'Voice UAE', children: [] },
          { text: 'Yzer (android only)', children: [] },
        ],
      },
      {
        text: 'Please delete all available VPN.',
        children: [],
      },
      {
        text: 'If issue is still not fixed, install the app again.',
        children: [],
      },
    ];
  }

  button1Listener() {
    this.router.navigate(['/thanks']);
  }

  button2Listener() {
    this.router.navigate(['issues/internet/book-complaint']);
  }
}
