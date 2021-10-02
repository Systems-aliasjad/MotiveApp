import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';

/**
 * Forgot Code Control Barring (CCB) PIN
 */
@Component({
  selector: 'forgot-ccb-pin',
  template: `<app-ccb-pin-reset-form [headerConfig]="headerConfig" [button1]="button1" (button1Click)="(button1Listener)"></app-ccb-pin-reset-form>`,
})
export class ForgotCcbPinComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.NEXT',
  };

  constructor(private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {}

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

  button1Listener() {
    this.router.navigate(['/issues/phone/forgot-ccb-pin-message']);
  }
}
