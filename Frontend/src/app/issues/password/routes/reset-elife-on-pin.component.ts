import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMotiveButton } from 'src/app/shared/components/diagnose-issue/diagnose-issue.component';
import { IResetPinContent } from 'src/app/shared/components/reset-pin/reset-pin.component';
import { SharedService } from 'src/app/shared/shared.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-reset-elife-on-pin',
  template:
    '<app-reset-pin [resetPinContent]="resetContent" (formValue)="getFormValue($event)" [button1]="button1" [button2]="button2" (button1Click)="button1Listener()" (button2Click)="button2Listener()"></app-reset-pin>',
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
    this.sharedService.setHeaderConfig('HEADER.RESET_ELIFEON_PIN', true);
  }

  updatePageContent() {
    this.resetContent.header = 'HEADER.RESET_INTERNET_PASSWORD';
    this.resetContent.subheader = 'SUBHEADER.RESET_INTERNET_PASSWORD';
    this.resetContent.inputLablel = 'RESET_TV_ADMIN_PIN.LABEL1';
  }

  getFormValue(evt) {
    this.formValue = evt;
  }

  button1Listener() {
    console.log(this.formValue);
    this.router.navigate(['/reset-login-pin-success']);
  }

  button2Listener() {
    this.location.back();
  }
}
