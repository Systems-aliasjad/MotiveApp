import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMotiveButton, IResetPinContent } from 'src/app/shared/constants/types';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-install-new-router-reset-internet-password',
  template:
    '<app-reset-pin [resetPinContent]="resetContent" (formValue)="getFormValue($event)" [button1]="button1" [button2]="button2" (button1Click)="button1Listener()" (button2Click)="button2Listener()"></app-reset-pin>',
})
export class InstallNewRouterResetInternetPasswordComponent implements OnInit, OnDestroy {
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
    title: 'BUTTONS.CANCEL',
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
    this.sharedService.setHeaderConfig('HEADER.RESET_INTERNET_PASSWORD', true);
  }

  updatePageContent() {
    this.resetContent.header = 'HEADER.RESET_INTERNET_PASSWORD';
    this.resetContent.subheader = 'MESSAGES.YOU_NEED_TO_RESET_YOUR_INTERNET_PASSWORD_TO_INSTALL_THE_THIRD_PARTY_ROUTER';
    this.resetContent.inputLablel = 'MESSAGES.ENTER_YOUR_MOBILE_NUMBER_TO_RECEIVE_THE_NEW_PIN_VIA_SMS';
  }

  getFormValue(evt) {
    this.formValue = evt;
  }

  button1Listener() {
    console.log(this.formValue);
    this.router.navigate(['/issues/internet/install-new-router-flow4']);
  }

  button2Listener() {
    this.router.navigate(['/thanks']);
  }
}
