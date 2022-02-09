import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { flowCodes, QUICK_ACTION } from 'src/app/shared/constants/constants';
import { IPageHeader } from 'src/app/shared/constants/types';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-unable-homezone-connection',
  templateUrl: './unable-homezone-connection.component.html',
  styleUrls: ['./unable-homezone-connection.component.scss'],
})
export class UnableHomezoneConnectionComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  devices;
  quickLinkNextSignal;
  constructor(
    private helperService: HelperService,
    private router: Router,
    public sharedService: SharedService,
    private activatedRoute: ActivatedRoute,
    private backendService: BackendService
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(() => {
      this.updateHeader();
    var  apiResponse = this.sharedService.getApiResponseData();
       this.devices = this.helperService.connectedDeviceModifier(apiResponse?.connectedDevices);
    //  this.devices = this.helperService.connectedDeviceModifier(this.sharedService.getApiResponseData()?.connectedDevices);
    });
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.DEVICE_CONNECTED_TO_HOME_ZONE',
    showBackBtn: true,
  };

  updateHeader() {
    const navigation = this.router.getCurrentNavigation();
    this.quickLinkNextSignal = navigation?.extras?.state?.quickLinkNextSignal;
    // this.sharedService.setHeaderConfig('HEADER.DEVICE_CONNECTED_TO_HOME_ZONE', false);
  }

  // button1Listener() {
  //   if (this.quickLinkNextSignal) {
  //     this.sharedService.setLoader(true);
  //     this.backendService.quickActionsNextStep(this.quickLinkNextSignal).subscribe((res) => {
  //       this.sharedService.setLoader(false);
  //       if (res?.result?.screenCode === flowCodes.QAHSIWIFI || res?.result?.screenCode === flowCodes.CI11) {
  //         this.router.navigate(['issues/internet/stage2/reset-wifi-password']);
  //       } else if (res?.result?.screenCode === flowCodes.QAHSIWIFI5) {
  //         this.router.navigate(['/issues/internet/error-occur-try-again-later']);
  //       } else if (res?.result?.screenCode === flowCodes.QAHSIWIFI1) {
  //         this.router.navigate(['/common/router-unreachable']);
  //       } else {
  //         this.router.navigate(['/unknown-issue']);
  //       }
  //     });
  //   } else {
  //     this.router.navigate(['issues/internet/stage2/reset-wifi-password']);
  //   }
  // }

    button1Listener() {
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
           // this.router.navigate(['/issues/internet/reset-wifi-error-occur-try-again-later']);
           this.router.navigate(['/issues/internet/proceed-book-complaint']);
          } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI8) {
            // this.dualBandRequired = data?.result?.responseData?.dualBandRouter;
            this.router.navigate(['/issues/internet/stage2/reset-wifi-password'],  { state: { quickLinkNextSignal:QUICK_ACTION.UPDATE_WIFI_CONFIGURATION ,homeZoneFromStage2:true} } );
          } else if (data?.result?.screenCode === flowCodes.QAHSIWIFI1) {
            this.router.navigate(['/common/router-unreachable']);
          } else {
            this.sharedService.LogDataResponse(data);
            this.router.navigate(['/unknown-issue']);
          }
        });
    
  }

  button2Listener() {
    if (this.quickLinkNextSignal) {
      this.router.navigate(['/thanks']);
    } else {
      this.sharedService.TicketCloseAPICallWithURL('thanks');
    }
  }
}
