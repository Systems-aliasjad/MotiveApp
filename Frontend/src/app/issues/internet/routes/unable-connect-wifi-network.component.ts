import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { flowCodes, warningImgSrc } from 'src/app/shared/constants/constants';
import { IMotiveButton } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { BackendService } from 'src/app/services/backend.service';

/**
 * Unable To Process Request
 */
@Component({
  selector: 'unable-to-connect-wifi-network',
  template: `<motive-message
    [imgSrc]="imgSrc"
    [Section1Data]="Section1Data"
    [Section2Data]="Section2Data"
    [Section2Template]="Section2Template"
    [button1]="button1"
    (button1Click)="button1Listener()"
    [button2]="button2"
    (button2Click)="button2Listener()"
  ></motive-message>`,
})
export class UnableToConnnectWifiNetwork implements OnInit, OnDestroy {
  subscription: Subscription;
  Section1Data;
  Section2Template;
  Section2Data;
  value;
  quickLinkNextSignal;
  imgSrc;
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.YES_RESET_WIFI_PASSWORD',
  };

  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.CLOSE',
  };

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private sharedService: SharedService, private backendService: BackendService) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
    });
    if(this.value === 'quickLinkUnableToConnect') {
      const apiResponse = this.sharedService.getApiResponseData();
      if(!apiResponse?.managed){
        this.router.navigate(['/issues/password/unable-to-reset-password']);
      }
    }
    this.updatePageContent();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {
    this.value = this.router.getCurrentNavigation()?.extras?.state?.value;
    this.quickLinkNextSignal = this.router.getCurrentNavigation()?.extras?.state?.quickLinkNextSignal;
  }

  updatePageContent() {
    this.imgSrc = warningImgSrc;
    this.Section1Data = this.value === 'forgotPassword' ? CustomerJourneyConstants.forgotWifiPassword :CustomerJourneyConstants.unableToConnectWifiNetwork;
  }

  button1Listener() {
    if(this.value === 'connectWifiFail' || this.value === 'forgotPassword' || this.value === 'quickLinkUnableToConnect')
    {
      if(this.value === 'connectWifiFail' || this.value === 'forgotPassword'){
        this.sharedService.setLoader(true);
        this.backendService.resetWifiPassword(null).subscribe((data)=>{
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
            // this.dualBandRequired = data?.result?.responseData?.dualBandRouter;
            this.router.navigate(['/issues/internet/stage2/reset-wifi-password'],  { state: { quickLinkNextSignal: this?.quickLinkNextSignal } } );
          } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI1) {
            this.router.navigate(['/common/router-unreachable']);
          } else {
            this.router.navigate(['/unknown-issue']);
          }
        });
      } else {
        this.router.navigate(['/issues/internet/stage2/reset-wifi-password'],  { state: { quickLinkNextSignal: this?.quickLinkNextSignal, from: this.value } } );
      }
    } else {
      this.router.navigate(['/issues/internet/reset-wifi-password']);
    }
  }

  button2Listener() {
    this.router.navigate(['/thanks']);
  }
}
