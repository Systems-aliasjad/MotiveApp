import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ETISALAT, flowCodes, ONT } from '../constants/constants';
import { IOntDetail } from '../constants/types';
import { SharedService } from '../shared.service';

const temp1 = {
  ontSerial: '485754431E91C19B',
  ontType: 'HG8240H',
  isReachable: true,
  isRebootRequired: false,
  isUpgradeRequired: false,
  url: '',
  className: '',
  title: ONT,
};

const temp2 = {
  routerSerial: '109461043164',
  routerModel: 'DIR850',
  isReachable: true,
  isRebootRequired: false,
  isUpgradeRequired: false,
  isManaged: false,
  isResetRequired: false,
  url: '',
  className: '',
  title: ETISALAT,
};
@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private router: Router, private sharedService: SharedService) {}

  networkDiagramStylingWrapper(ontConfig?: IOntDetail, routerConfig?: any) {
    ontConfig = { ...ontConfig, url: '/assets/images/network-map-icons/icon_smartphone_all_okay.svg' };
    routerConfig = { ...routerConfig, url: '/assets/images/network-map-icons/icon_smartphone_all_okay.svg' };
    ontConfig = this.networkDiagramStylingMapper(ontConfig);
    if (ontConfig?.isReachable) {
      routerConfig = this.networkDiagramStylingMapper(routerConfig, ontConfig.className);
    }
    return {
      ontConfig,
      routerConfig,
    };
  }

  networkDiagramStylingMapper(device: any, previousDeviceState?: string) {
    let tempClass = '';
    if (['error', 'default'].includes(previousDeviceState)) {
      tempClass = 'default';
    } else {
      if (device?.isReachable) {
        tempClass = 'okay';
        if (device?.isRebootRequired) {
          tempClass = 'pending';
        }
      } else {
        tempClass = 'error';
      }
    }
    return {
      ...device,
      className: tempClass,
    };
  }

  public flowIdentifier(CodeId: string, data?: any) {
    if (CodeId === flowCodes.genericError) {
      this.router.navigate(['/unknown-error']);
    } else if (CodeId === flowCodes.accountNotActive) {
      this.router.navigate(['issues/internet/account-not-active']);
    } else if (CodeId === flowCodes.routerRebootRequired) {
      // this.sharedService.setApiResponseData({ ontDetails: data?.ontDetails, routerDetails: data?.routerDetails });
      this.sharedService.setApiResponseData({ ontDetails: temp1, routerDetails: temp2 });
      this.router.navigate(['issues/internet/router-reboot-required']);
    } else if (CodeId === flowCodes.movingElifeConnection) {
      this.router.navigate(['issues/internet/osrp/move-elife-connection']);
    } else if (CodeId === flowCodes.ElifeCancellationRequest) {
      this.router.navigate(['issues/internet/osrp/cancel-elife-connection']);
    } else if (CodeId === flowCodes.accountTemporarilyDisconnected) {
      this.router.navigate(['issues/internet/osrp/account-temporarily-disconnected']);
    } else if (CodeId === flowCodes.outageInternet) {
      this.router.navigate(['issues/internet/outage']);
    } else if (CodeId === flowCodes.issueNotFixed) {
      this.router.navigate(['issues/internet/issue-not-fixed']);
    } else if (CodeId === flowCodes.issueFixed) {
      this.router.navigate(['issues/internet/no-issue']);
    }
  }
}
