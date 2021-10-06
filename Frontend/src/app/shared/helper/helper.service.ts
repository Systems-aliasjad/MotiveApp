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
  isReachable: false,
  isRebootRequired: false,
  isUpgradeRequired: false,
  isManaged: false,
  isResetRequired: false,
  url: '',
  className: '',
};

const temp3 = {
  complaintNo: '1436529873',
  dateVisit: 'Jul 10 2019, 10:30 AM',
  status: 'Xxxxx xxxxx xxxx',
};

const temp5 = {
  addressSource: 'DHCP',
  isActive: '1',
  ipAddress: '192.168.1.101',
  leaseTimeRemaining: '21856',
  hostName: '',
  macAddress: 'a6:8d:22:64:e9:b3',
  interfaceType: '802.11',
};

const temp6 = [temp5, temp5, temp5, temp5, temp5, temp5];
@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private router: Router, private sharedService: SharedService) {}

  connectedDeviceModifier(devices) {
    return devices?.map((device) => {
      return {
        ...device,
        className: networkDiagramClasses.okay,
        url: SVGs.ont.default,
        // title: device?.hostName ?? 'unnammed',
        title: 'unnammed',
        subTitle: device?.macAddress,
      };
    });
  }

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
      } else if (device?.isManaged && !device?.isReachable) {
        tempClass = networkDiagramClasses.pending;
      } else if (!device?.isManaged) {
        tempClass = networkDiagramClasses.pending;
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
    } else if (CodeId === flowCodes.CI72) {
      this.sharedService.setApiResponseData({ connectedDevices: temp6 });
      this.sharedService.setUpsellOpportunity(data?.upsellingOpportunity);
      this.handleInternetPasswordResetCase(data?.hsiPasswordReset);
    } else if (CodeId === flowCodes.CI73) {
      // this.sharedService.setApiResponseData({ ontDetails: data?.ontDetails, routerDetails: data?.routerDetails });
      this.sharedService.setApiResponseData({ ontDetails: temp1, routerDetails: temp2 });
      this.router.navigate(['issues/internet/router-reset-required']);
    } else if (CodeId === flowCodes.openComplaint) {
      this.router.navigate(['issues/internet/complaint-already-exists']);
      // this.sharedService.setApiResponseData({ complaintDetails: data?.complaintDetails });
      this.sharedService.setApiResponseData({ complaintDetails: temp3 });
    } else if (CodeId === flowCodes.UPSEL2) {
      //Upselling Identified for New Router
      this.router.navigate(['']);
    } else if (CodeId === flowCodes.UPSEL3) {
      // Upselling Identified for Router Upgrade
      this.router.navigate(['']);
    } else if (CodeId === flowCodes.UPSEL4) {
      // Upselling Identified for Router Upgrade / Router Out of Warranty
      this.router.navigate(['']);
    } else if (CodeId === flowCodes.UPSEL5) {
      // Upselling Identified for Bandwidth And Router Upgrade
      this.router.navigate(['']);
    } else if (CodeId === flowCodes.UPSEL6) {
      // Upselling Identified for Bandwidth And Router Upgrade /Router  Out of Warranty
      this.router.navigate(['']);
    } else if (CodeId === flowCodes.UPSEL7) {
      // Upselling Identified for Bandwidth / Router  Out of Warranty
      this.router.navigate(['']);
    } else if (CodeId === flowCodes.UPSEL8) {
      // Upselling Identified for New Router /Router  Out of Warranty
      this.router.navigate(['']);
    } else if (CodeId === flowCodes.UPSEL9) {
      // Upselling Identified for Bandwidth
      this.router.navigate(['']);
    }
  }

  handleCI9Cases(routerDetails: IRouterDetail) {
    if (routerDetails?.isManaged) {
      if (routerDetails?.isRebootRequired) {
        this.router.navigate(['issues/internet/router-reboot-required']);
      } else if (!routerDetails?.isReachable) {
        this.router.navigate(['issues/internet/router-not-reachable']);
      } else if (routerDetails?.isUpgradeRequired) {
        this.router.navigate(['issues/internet/router-upgrade-recommended']);
      }
    } else {
      this.router.navigate(['issues/internet/third-party-router']);
    }
  }

  handleInternetPasswordResetCase(shouldReset) {
    if (shouldReset) {
      this.router.navigate(['/issues/internet/internet-password-reset']);
    } else {
      this.router.navigate(['issues/internet/no-issue']);
    }
  }
}
