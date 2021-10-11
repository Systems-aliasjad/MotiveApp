import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMotiveButton, IPageHeader, IResetPinContent } from 'src/app/shared/constants/types';
import { SharedService } from 'src/app/shared/shared.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-reset-elife-on-pin',
  template:
    '<app-reset-pin [headerConfig]="headerConfig" [resetPinContent]="resetContent" (formValue)="getFormValue($event)" [button1]="button1" [button2]="button2" (button1Click)="button1Listener()" (button2Click)="button2Listener()"></app-reset-pin>',
})
export class ResetElifeOnPinComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  formValue;
  resetContent: IResetPinContent = {
    header: '',
    subheader: '',
    inputLablel: '',
  };
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.CONTINUE',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.BACK',
    type: 'link',
  };

  constructor(private location: Location, private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {}

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
    //this.sharedService.setHeaderConfig('HEADER.RESET_ELIFEON_PIN', true);
  }

  updatePageContent() {
    this.resetContent.header = 'HEADER.RESET_INTERNET_PASSWORD';
    this.resetContent.subheader = 'SUBHEADER.RESET_INTERNET_PASSWORD';
    this.resetContent.inputLablel = 'MESSAGES.ENTER_YOUR_MOBILE_NUMBER_TO_RECIVE_THE_NEW_PIN_VIA_SMS';
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.RESET_ELIFEON_PIN',
    showBackBtn: true,
  };

  getFormValue(evt) {
    this.formValue = evt;
  }

  button1Listener() {
    console.log(this.formValue);
    this.router.navigate(['issues/password/reset-elife-pin-success']);
  }

  button2Listener() {
    this.location.back();
  }
}
