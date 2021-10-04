import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { flowCodes, networkDiagramClasses, ONT, ROUTER, SVGs } from '../constants/constants';
import { IOntDetail, IRouterDetail } from '../constants/types';
import { SharedService } from '../shared.service';

const temp1 = {
  ontSerial: '485754431E91C19B',
  ontType: 'HG8240H',
  isReachable: true,
  isRebootRequired: false,
  isUpgradeRequired: false,
  url: '',
  className: '',
};

const temp2 = {
  routerSerial: '109461043164',
  routerModel: 'DIR850',
  isReachable: true,
  isRebootRequired: false,
  isUpgradeRequired: false,
  isManaged: false,
  isResetRequired: true,
  url: '',
  className: '',
};
@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private router: Router, private sharedService: SharedService) {}

  networkDiagramStylingWrapper(ontConfig?: IOntDetail, routerConfig?: any) {
    ontConfig = { ...ontConfig, url: SVGs.ont.default, title: ONT };
    routerConfig = { ...routerConfig, url: SVGs.router.default, title: ROUTER };
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
    if ([networkDiagramClasses.default, networkDiagramClasses.error].includes(previousDeviceState)) {
      tempClass = networkDiagramClasses.default;
    } else {
      if (device?.isReachable) {
        tempClass = networkDiagramClasses.okay;
        if (device?.isRebootRequired || device?.isUpgradeRequired || device?.isResetRequired) {
          tempClass = networkDiagramClasses.pending;
        }
      } else {
        tempClass = networkDiagramClasses.error;
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
    } else if (CodeId === flowCodes.CI9) {
      // this.sharedService.setApiResponseData({ ontDetails: data?.ontDetails, routerDetails: data?.routerDetails });
      // this.handleCI9Cases(data?.routerDetails);
      this.sharedService.setApiResponseData({ ontDetails: temp1, routerDetails: temp2 });
      this.handleCI9Cases(temp2);
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

  handleCI9Cases(routerDetails: IRouterDetail) {
    console.log('==========routerDetails==============');
    console.log(routerDetails);
    console.log('====================================');
    if (routerDetails?.isRebootRequired) {
      this.router.navigate(['issues/internet/router-reboot-required']);
    } else if (routerDetails?.isResetRequired) {
      this.router.navigate(['issues/internet/router-reset-required']);
    } else if (routerDetails?.isManaged && !routerDetails?.isReachable) {
      this.router.navigate(['issues/internet/router-not-reachable']);
    } else if (routerDetails?.isUpgradeRequired) {
      this.router.navigate(['issues/internet/router-upgrade-recommended']);
    }
  }
}
