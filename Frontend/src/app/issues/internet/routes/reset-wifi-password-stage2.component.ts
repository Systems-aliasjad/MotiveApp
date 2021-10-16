import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { FormGroup } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';
import { HelperService } from 'src/app/shared/helper/helper.service';

@Component({
  selector: 'reset-wifi-password-stage2',
  template: `<app-reset-router-password
    [headerConfig]="headerConfig"
    [button1]="button1"
    (button1Click)="button1Listener()"
    [button2]="button2"
    (button2Click)="button2Listener($event)"
  ></app-reset-router-password>`,
})
export class ResetWIFIPasswordStage2Component implements OnInit, OnDestroy {
  subscription: Subscription;
  button1: IMotiveButton = {
    type: 'terms',
    title: 'BUTTONS.TERMS',
    explanatoryNote: '',
  };

  button2: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.NEXT',
    explanatoryNote: '',
  };

  formGroup: FormGroup;
  constructor(
    private backendService: BackendService,
    private sharedService: SharedService,
    private activatedRoute: ActivatedRoute,
    private helperService: HelperService,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {
    //this.sharedService.setHeaderConfig('HEADER.RESET_WIFI_PASSWORD', true, true);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.RESET_WIFI_PASSWORD',
    showBackBtn: true,
  };

  button1Listener() {}

  button2Listener(_event) {
    this.sharedService.setLoader(true);
    this.backendService.resetWifiPassword(_event).subscribe((data: any) => {
      this.sharedService.setLoader(false);
      this.helperService.flowIdentifier(data?.result?.screenCode, data?.result?.responseData);
      this.router.navigate(['/thanks']);
    });
  }
}
