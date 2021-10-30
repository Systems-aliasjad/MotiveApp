import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { BackendService } from 'src/app/services/backend.service';

/**
 * Forgot Code Control Barring (CCB) PIN
 */
@Component({
  selector: 'forgot-ccb-pin',
  template: `<app-ccb-pin-reset-form [headerConfig]="headerConfig" [button1]="button1" (button1Click)="button1Listener($event)" [rules]="rulesList"></app-ccb-pin-reset-form>`,
})
export class ForgotCcbPinComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.NEXT',
  };

  rulesList: string[] = ['4 random digits'];
  constructor(private backendService: BackendService, private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {
    //this.sharedService.setHeaderConfig('HEADER.RESET_CCB_PIN', true);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.RESET_CCB_PIN',
    showBackBtn: true,
  };

  button1Listener(event) {
    this.backendService.updateCCBPin(event?.value?.NewPassword).subscribe((data) => {
      if (data?.result?.screenCode === 'QA-VOICE-CCB1') {
        this.router.navigate(['/issues/phone/forgot-ccb-pin-failed-message']);
      } else if (data?.result?.screenCode === 'QA-VOICE-CCB') {
        this.router.navigate(['/issues/phone/no-issue-phone-phone-reset-ccb-pin-successfully']);
      } else {
        this.router.navigate(['/unknown-issue']);
      }
    });
  }
}
