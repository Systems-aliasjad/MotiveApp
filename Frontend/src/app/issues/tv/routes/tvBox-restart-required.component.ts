import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMotiveButton } from '../../../shared/components/diagnose-issue/diagnose-issue.component';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-tvBox-restart-required',
  template: `<app-diagnose-issue [messageSection]="messageSection" [button1]="button1" (button1Click)="button1Listener()" [button2]="button2" (button2Click)="button2Listener()">
  </app-diagnose-issue>`,
})
export class TvBoxRestartRequiredComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messageSection;
  button1: IMotiveButton = {
    title: 'BUTTONS.RESTART_NOW_STB',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.ILL_RESTART_IT_MANYALLY',
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
    this.sharedService.setHeaderConfig('MESSAGES.TV_ISSUES', false);
  }

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.tvBoxRestartMessageSection;
  }

  button1Listener() {
    this.router.navigate(['/tvBox-restart-required-successfully']);
  }

  button2Listener() {
    this.router.navigate(['/issues/tv/restart-instructions']);
  }
}
