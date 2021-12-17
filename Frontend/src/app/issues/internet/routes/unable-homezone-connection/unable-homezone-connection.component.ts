import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { flowCodes } from 'src/app/shared/constants/constants';
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
      this.devices = this.helperService.connectedDeviceModifier(this.sharedService.getApiResponseData()?.connectedDevices);
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

  button1Listener() {
    if (this.quickLinkNextSignal) {
      this.sharedService.setLoader(true);
      this.backendService.quickActionsNextStep(this.quickLinkNextSignal).subscribe((res) => {
        this.sharedService.setLoader(false);
        if (res?.result?.screenCode === flowCodes.QAHSIWIFI || res?.result?.screenCode === flowCodes.CI11) {
          this.router.navigate(['issues/internet/stage2/reset-wifi-password']);
        } else if (res?.result?.screenCode === flowCodes.QAHSIWIFI5) {
          this.router.navigate(['/issues/internet/error-occur-try-again-later']);
        } else if (res?.result?.screenCode === flowCodes.QAHSIWIFI1) {
          this.router.navigate(['/common/router-unreachable']);
        } else {
          this.router.navigate(['/unknown-issue']);
        }
      });
    } else {
      this.router.navigate(['issues/internet/stage2/reset-wifi-password']);
    }
  }

  button2Listener() {
    if (this.quickLinkNextSignal) {
      this.router.navigate(['/thanks']);
    } else {
      this.sharedService.TicketCloseAPICallWithURL('thanks');
    }
  }
}
