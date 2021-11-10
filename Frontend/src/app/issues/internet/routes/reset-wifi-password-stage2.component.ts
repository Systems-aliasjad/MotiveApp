import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { FormGroup } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { flowCodes } from 'src/app/shared/constants/constants';

@Component({
  selector: 'reset-wifi-password-stage2',
  template: `<app-reset-router-password
    [headerConfig]="headerConfig"
    [dualBandRequired]="dualBandRequired"
    [button1]="button1"
    (button1Click)="button1Listener()"
    [button2]="button2"
    (button2Click)="button2Listener($event)"
  ></app-reset-router-password>`,
})
export class ResetWIFIPasswordStage2Component implements OnInit, OnDestroy, AfterViewInit {
  subscription: Subscription;
  quickLinkNextSignal;
  dualBandRequired: boolean = true;
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
  ngAfterViewInit(): void {
    this.callNextStepApi();
  }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    this.quickLinkNextSignal = navigation?.extras?.state?.quickLinkNextSignal;
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
    });
  }

  callNextStepApi() {
    if (this?.quickLinkNextSignal) {
      this.sharedService.setLoader(true);
      this.backendService.quickActionsInitialData().subscribe((res) => {
        this.sharedService.setLoader(false);
        this.sharedService.setQuickLinksData(res?.result?.responseData);
        this.sharedService.setApiResponseData(res?.result?.responseData);

        this.sharedService.setLoader(true);
        this.backendService.quickActionsNextStep(this.quickLinkNextSignal).subscribe((data) => {
          this.sharedService.setLoader(false);
          if (data?.result?.screenCode === flowCodes.QAHSIWIFI) {
            this.router.navigate(['/issues/internet/password-update-success']);
          } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI5) {
            this.router.navigate(['/issues/internet/reset-wifi-error-occur-try-again-later']);
          } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI8) {
            this.dualBandRequired = data?.result?.responseData?.dualBandRouter;
          } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI1) {
            this.router.navigate(['/issues/password/unable-to-reset-password']);
          } else {
            this.router.navigate(['/unknown-issue']);
          }
        });
      });
    } else {
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {
    const navigation = this.router.getCurrentNavigation();
    this.quickLinkNextSignal = navigation?.extras?.state?.quickLinkNextSignal;
    //this.sharedService.setHeaderConfig('HEADER.RESET_WIFI_PASSWORD', true, true);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.RESET_WIFI_PASSWORD',
    showBackBtn: true,
  };

  button1Listener() {}

  button2Listener(_event) {
    if (this?.quickLinkNextSignal && this.sharedService.getQuickLinksData()) {
      this.sharedService.setLoader(true);
      this.backendService.quickActionsResetWifiPassword(_event).subscribe((data: any) => {
        this.sharedService.setLoader(false);
        if (data?.result?.screenCode === flowCodes.QAHSIWIFI) {
          this.router.navigate(['/issues/internet/password-update-success']);
        } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI5) {
          this.router.navigate(['/issues/internet/reset-wifi-error-occur-try-again-later']);
        } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI1) {
          this.router.navigate(['/issues/password/unable-to-reset-password']);
        }
      });
    } else if (this?.quickLinkNextSignal) {
      this.sharedService.setLoader(true);
      this.backendService.quickActionsInitialData().subscribe((res) => {
        this.sharedService.setLoader(false);
        this.sharedService.setQuickLinksData(res?.result?.responseData);
        this.sharedService.setApiResponseData(res?.result?.responseData);

        this.sharedService.setLoader(true);
        this.backendService.quickActionsResetWifiPassword(_event).subscribe((data: any) => {
          this.sharedService.setLoader(false);

          if (data?.result?.screenCode === flowCodes.QAHSIWIFI) {
            this.router.navigate(['/issues/internet/password-update-success']);
          } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI5) {
            this.router.navigate(['/issues/internet/reset-wifi-error-occur-try-again-later']);
          } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI1) {
            this.router.navigate(['/issues/password/unable-to-reset-password']);
          }
        });
      });
    } else {
      this.sharedService.setLoader(true);
      this.backendService.resetWifiPassword(_event).subscribe((data: any) => {
        this.sharedService.setLoader(false);
        this.router.navigate(['/issues/internet/password-update-success']);
      });
    }
  }
}
