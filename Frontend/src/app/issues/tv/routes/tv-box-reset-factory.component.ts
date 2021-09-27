import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMotiveButton } from '../../../shared/components/diagnose-issue/diagnose-issue.component';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-tv-box-reset-factory',
  template: `<app-diagnose-issue [messageSection]="messageSection" [button1]="button1" (button1Click)="button1Listener()" [button2]="button2" (button2Click)="button2Listener()">
  </app-diagnose-issue>`,
})
export class TvBoxResetFactoryComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messageSection;
  button1: IMotiveButton = {
    title: 'BUTTONS.RESET_TV_BOX',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.RESTART_MANUALLY',
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
    this.messageSection = CustomerJourneyConstants.tvBoxFactoryResetSection;
  }

  button1Listener() {
    this.router.navigate(['/issues/tv/tvBox-reset-successfull']);
  }

  button2Listener() {
    this.router.navigate(['/issues/tv/restart-instructions']);
  }
}
