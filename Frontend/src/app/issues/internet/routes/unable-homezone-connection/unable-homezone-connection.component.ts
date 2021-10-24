import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
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
    // this.sharedService.setHeaderConfig('HEADER.DEVICE_CONNECTED_TO_HOME_ZONE', false);
  }

  button1Listener() {
    this.router.navigate(['issues/internet/stage2/reset-wifi-password']);
  }

  button2Listener() {
    this.sharedService.setLoader(true);
    this.backendService.bookComplaint({ mobileNo: localStorage.getItem('CUS_MOBILE_NO'), remarks: '', ci7: true }).subscribe(() => {
      this.sharedService.setLoader(false);
      this.router.navigate(['/thanks']);
    });
  }
}
