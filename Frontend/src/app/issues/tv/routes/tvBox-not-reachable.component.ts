import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-tvBox-not-reachable',
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
export class TvBoxNotReachableComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messageSection;
  button1: IMotiveButton = {
    title: 'BUTTONS.TRY_AGAIN',
    type: 'primary',
    explanatoryNote: 'MESSAGES.ARE_YOU_USING_THE_SAME_ROUTER',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.ISSUE_RESOLVED',
    type: 'link',
  };

  constructor(private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
    });
    this.updatePageContent();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {
    // this.sharedService.setHeaderConfig('MESSAGES.TV_ISSUES', false);
  }
  headerConfig: IPageHeader = {
    pageTitle: 'MESSAGES.TV_ISSUES',
    showBackBtn: true,
  };

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.tvBoxNotReachableMessageSection;
  }

  button1Listener() {
    this.router.navigate(['/issues/tv/box-not-reachable-try-again']);
  }

  button2Listener() {
    this.router.navigate(['/thanks']);
  }
}
