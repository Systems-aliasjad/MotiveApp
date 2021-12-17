import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { FormGroup } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { flowCodes, LoaderScriptsEnum, QUICK_ACTION } from 'src/app/shared/constants/constants';

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
  from;
  dualBandRequired: boolean = true;
  factoryResetBypass: boolean = false;
  fromhomeZones: string = '';
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
  ) {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      const navigation = this.router.getCurrentNavigation();
      this.fromhomeZones = navigation?.extras?.state?.fromhomeZones;
      this.factoryResetBypass = navigation?.extras?.state?.factoryResetBypass;

      if (this.fromhomeZones) {
        this.callNextStepApi();
      }
    });
  }
  ngAfterViewInit(): void {
    if (!this.fromhomeZones) {
      this.callNextStepApi();
    }
  }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    this.quickLinkNextSignal = navigation?.extras?.state?.quickLinkNextSignal;
    this.from = navigation?.extras?.state?.from;
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
    });
  }

  callNextStepApi() {
    if (this.factoryResetBypass) {
    } else if (this.fromhomeZones) {
      this.sharedService.setLoader(true);
      this.backendService.quickActionsJustNextStep().subscribe((data) => {
        this.sharedService.setLoader(false);
        if (data?.result?.screenCode === flowCodes.QAHSIWIFI2) {
          this.sharedService.setApiResponseHomeZoneCall({ homeZoneAPs: data?.result?.responseData?.homeZoneAPs });
          ////Home Zone Scenario
          this.router.navigate(['/issues/internet/quick-home-zone-reset-wifi']);
        } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI || data?.result?.screenCode === flowCodes.CI11) {
          this.router.navigate(['/issues/internet/password-update-success']);
        } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI5) {
          this.router.navigate(['/issues/internet/reset-wifi-error-occur-try-again-later']);
        } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI8) {
          this.dualBandRequired = data?.result?.responseData?.dualBandRouter;
        } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI1) {
          this.router.navigate(['/common/router-unreachable']);
        } else {
          this.router.navigate(['/unknown-issue']);
        }
      });
    } else if(this?.from === 'quickLinkUnableToConnect' && this?.quickLinkNextSignal){     
      this.sharedService.setLoader(true);
      this.backendService.quickActionsNextStep(QUICK_ACTION.UPDATE_WIFI_CONFIGURATION).subscribe((data) => {
        this.sharedService.setLoader(false);

        if (data?.result?.screenCode === flowCodes.QAHSIWIFI2) {
          this.sharedService.setApiResponseHomeZoneCall({ homeZoneAPs: data?.result?.responseData?.homeZoneAPs });
          ////Home Zone Scenario
          this.router.navigate(['/issues/internet/quick-home-zone-reset-wifi']);
        } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI || data?.result?.screenCode === flowCodes.CI11) {
          this.router.navigate(['/issues/internet/password-update-success']);
        } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI5) {
          this.router.navigate(['/issues/internet/reset-wifi-error-occur-try-again-later']);
        } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI8) {
          this.dualBandRequired = data?.result?.responseData?.dualBandRouter;
        } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI1) {
          this.router.navigate(['/common/router-unreachable']);
        } else {
          this.router.navigate(['/unknown-issue']);
        }
      });
    } else if (this?.quickLinkNextSignal) {
      this.sharedService.setLoader(true);
      this.backendService.quickActionsInitialData().subscribe((res) => {
        this.sharedService.setLoader(false);
        this.sharedService.setQuickLinksData(res?.result?.responseData);
        this.sharedService.setApiResponseData(res?.result?.responseData);

              if(!res?.result?.responseData?.managed){
                 this.router.navigate(['issues/password/unable-to-reset-password']);
              }
           
        this.sharedService.setLoader(true);
        this.backendService.quickActionsNextStep(QUICK_ACTION.UPDATE_WIFI_CONFIGURATION).subscribe((data) => {
          this.sharedService.setLoader(false);

          if (data?.result?.screenCode === flowCodes.QAHSIWIFI2) {
            this.sharedService.setApiResponseHomeZoneCall({ homeZoneAPs: data?.result?.responseData?.homeZoneAPs });
            ////Home Zone Scenario
            this.router.navigate(['/issues/internet/quick-home-zone-reset-wifi']);
          } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI || data?.result?.screenCode === flowCodes.CI11) {
            this.router.navigate(['/issues/internet/password-update-success']);
          } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI5) {
            this.router.navigate(['/issues/internet/reset-wifi-error-occur-try-again-later']);
          } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI8) {
            this.dualBandRequired = data?.result?.responseData?.dualBandRouter;
          } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI1) {
            this.router.navigate(['/common/router-unreachable']);
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
  var scriptArray = this.sharedService.GetLoaderDataByID(LoaderScriptsEnum.WIFI_PASSWORD_RESET);

    if (this.factoryResetBypass) {
      this.sharedService.setLoader(true, scriptArray);
      this.backendService.quickActionsResetWifiPassword(_event).subscribe((data: any) => {
        this.sharedService.setLoader(false);
        if (data?.result?.screenCode === flowCodes.QAHSIPnPFR || data?.result?.screenCode === flowCodes.CI11) {


            if(!data?.result?.responseData?.managed){
                 this.router.navigate(['issues/password/unable-to-reach-router']);
              }



          this.router.navigate(['/issues/internet/password-update-success']);
        } else {
          this.router.navigate(['/error-comes']);
        }
      });
    } else if (this.fromhomeZones) {
      this.sharedService.setLoader(true, scriptArray);
      var array: any = [];
      array.push(this.fromhomeZones);
      this.backendService.quickActionsResetWifiPasswordHomeZone(_event, array).subscribe((data: any) => {
        this.sharedService.setLoader(false);
        this.sharedService.clearApiResponseHomeZoneCall();
        this.fromhomeZones = undefined;
        if (data?.result?.screenCode === flowCodes.QAHSIWIFI || data?.result?.screenCode === flowCodes.CI11) {

              if(!data?.result?.responseData?.managed){
                 this.router.navigate(['issues/password/unable-to-reach-router']);
              }



          this.router.navigate(['/issues/internet/password-update-success']);
        } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI5) {
          this.router.navigate(['/issues/internet/reset-wifi-error-occur-try-again-later']);
        } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI1) {
          this.router.navigate(['/common/router-unreachable']);
        }
      });
    } else if (this?.quickLinkNextSignal && this.sharedService.getQuickLinksData()) {
      this.sharedService.setLoader(true, scriptArray);
      this.backendService.quickActionsResetWifiPassword(_event).subscribe((data: any) => {
        this.sharedService.setLoader(false);

        if (data?.result?.screenCode === flowCodes.QAHSIWIFI || data?.result?.screenCode === flowCodes.CI11) {

             if(!data?.result?.responseData?.managed){
                 this.router.navigate(['issues/password/unable-to-reach-router']);
              }



          this.router.navigate(['/issues/internet/password-update-success']);
        } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI5) {
          this.router.navigate(['/issues/internet/reset-wifi-error-occur-try-again-later']);
        } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI1) {
          this.router.navigate(['/common/router-unreachable']);
        }
      });
    } else if (this?.quickLinkNextSignal) {
      this.sharedService.setLoader(true, scriptArray);
      this.backendService.quickActionsInitialData().subscribe((res) => {
        this.sharedService.setQuickLinksData(res?.result?.responseData);
        this.sharedService.setApiResponseData(res?.result?.responseData);
        this.backendService.quickActionsResetWifiPassword(_event).subscribe((data: any) => {
          this.sharedService.setLoader(false);
          if (data?.result?.screenCode === flowCodes.QAHSIWIFI || data?.result?.screenCode === flowCodes.CI11) {

              if(!data?.result?.responseData?.managed){
                 this.router.navigate(['issues/password/unable-to-reach-router']);
              }

      
            this.router.navigate(['/issues/internet/password-update-success']);
          } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI5) {
            this.router.navigate(['/issues/internet/reset-wifi-error-occur-try-again-later']);
          } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI1) {
            this.router.navigate(['/common/router-unreachable']);
          }
        });
      });
    } else {
      debugger;
      this.sharedService.setLoader(true, scriptArray);
      this.backendService.resetWifiPassword(_event).subscribe((data: any) => {
        this.sharedService.setLoader(false);
        if (data?.result?.screenCode === flowCodes.QAHSIWIFI || data?.result?.screenCode === flowCodes.CI11 || data?.result?.screenCode === flowCodes.STAGE2IR) {
          this.router.navigate(['/issues/internet/password-update-success']);
        } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI5) {
          this.router.navigate(['/issues/internet/reset-wifi-error-occur-try-again-later']);
        } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI1) {
          this.router.navigate(['/common/router-unreachable']);
        }
      });
    }
  }
}
