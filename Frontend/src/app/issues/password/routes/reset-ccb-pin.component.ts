import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { Location } from '@angular/common';

/**
 * Reset Telephone Code Control Barring (CCB) PIN
 */
@Component({
  selector: 'reset-ccb-pin',
  template: `<app-ccb-pin-reset-form
    [headerConfig]="headerConfig"
    [button1]="button1"
    (button1Click)="(button1Listener)"
    [button2]="button2"
    (button2Click)="(button2Listener)"
  ></app-ccb-pin-reset-form>`,
})
export class ResetCcbPinComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.CONTINUE',
  };
  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.BACK',
  };

  constructor(private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute, private location: Location) {}

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

  button2Listener() {
    this.location.back();
  }
}
