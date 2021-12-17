import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { flowCodes } from 'src/app/shared/constants/constants';

@Component({
  selector: 'reset-wifi-password',
  template: `<app-reset-router-password
    [headerConfig]="headerConfig"
    [dualBandRequired]="dualBandRequired"
    [button1]="button1"
    (button1Click)="button1Listener()"
    [button2]="button2"
    (button2Click)="button2Listener($event)"
  ></app-reset-router-password>`,
})
export class ResetWIFIPasswordComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  subscription: Subscription;
  dualBandRequired: boolean = true;
  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.RESET_WIFI_PASSWORD',
    showBackBtn: true,
  };
  button1: IMotiveButton = {
    type: 'terms',
    title: 'BUTTONS.TERMS',
  };
  button2: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.NEXT',
  };
  constructor(
    private router: Router,
    private helperService: HelperService,
    private sharedService: SharedService,
    private activatedRoute: ActivatedRoute,
    private backendService: BackendService
  ) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateContent();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateContent() {
    const temp = this.sharedService.getApiResponseData();
    this.dualBandRequired = temp?.dualBandRouter;
  }

  button1Listener() {
    // this.sharedService.setLoader(true);
    // this.backendService.resetRouter({ signal: 'Factory_Reset_Not_Agreed' }).subscribe((data: any) => {
    //   this.sharedService.setLoader(false);
    //   this.helperService.InternetFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
    // });
  }

  button2Listener(_event) {
    this.sharedService.setLoader(true);
    this.backendService.resetRouter({ data: { ..._event }, signal: 'Factory_Reset_Agreed' }).subscribe((data: any) => {
      this.sharedService.setLoader(false);
      if (data?.result?.screenCode === flowCodes.QAHSIWIFI || data?.result?.screenCode === flowCodes.CI11) {
        this.router.navigate(['/issues/internet/password-update-success']);
      } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI5) {
        this.router.navigate(['/issues/internet/reset-wifi-error-occur-try-again-later']);
      } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI1) {
        this.router.navigate(['/common/router-unreachable']);
      }
      this.helperService.InternetFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
    });
  }
}
