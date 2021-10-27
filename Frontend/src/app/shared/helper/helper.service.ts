import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { flowCodes, networkDiagramClasses, ONT, ROUTER, STB, SVGs } from '../constants/constants';
import { IOntDetail, IRouterDetail, IStbDetail } from '../constants/types';
import { SharedService } from '../shared.service';

const temp1 = {
  ontSerial: '485754431E91C19B',
  ontType: 'I-240G-A',
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
  isRebootRequired: true,
  isUpgradeRequired: false,
  isManaged: true,
  isResetRequired: true,
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
const temp6 = [temp5, temp5, temp5, temp5, temp5, temp5, temp5, temp5, temp5, temp5, temp5, temp5];

const temp7 = {
  referenceNo: '4365298739',
};

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
        url: SVGs.phone.default,
        title: device.hostName ? device.hostName : 'unnammed',
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
    } else {
      routerConfig = {
        ...routerConfig,
        className: networkDiagramClasses.default,
      };
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

  networkDiagramStylingWrapperSTB(ontConfig?: IOntDetail, stbConfig?: any) {
    ontConfig = { ...ontConfig, url: SVGs.ont.default, title: ONT };
    stbConfig = { ...stbConfig, url: SVGs.stb.default, title: STB };
    ontConfig = this.networkDiagramStylingMapper(ontConfig);
    if (ontConfig?.isReachable) {
      stbConfig = this.networkDiagramStylingMapper(stbConfig, ontConfig.className);
    } else {
      stbConfig = {
        ...stbConfig,
        className: networkDiagramClasses.default,
      };
    }
    return {
      ontConfig,
      stbConfig,
    };
  }
  public otherFlowIdentifier(CodeId: string, data?: any) {
    if (CodeId === flowCodes.genericError) {
      this.router.navigate(['/unknown-error']);
    } else if (CodeId === flowCodes.outage) {
      this.router.navigate(['issues/other/outage']);
    } else if (CodeId === flowCodes.issueNotFixed) {
      this.router.navigate(['issues/other/issue-not-fixed']);
    } else if (CodeId === flowCodes.CI9) {
      this.sharedService.setApiResponseData({ ontDetails: data?.ontDetails, routerDetails: data?.routerDetails });
      this.router.navigate(['issues/internet/router-reboot-required']);
    } else if (CodeId === flowCodes.CI73) {
      this.sharedService.setApiResponseData({ ontDetails: data?.ontDetails, routerDetails: data?.routerDetails });
      this.router.navigate(['issues/internet/router-reset-required']);
    } else if (CodeId === flowCodes.CI72) {
      this.sharedService.setApiResponseData({
        connectedDevices: data?.connectedDevices,
        hsiUploadDownload: data?.hsiUploadDownload?.split(','),
      });
      this.sharedService.setUpsellOpportunity(data?.upsellingOpportunity);
      this.handleInternetPasswordResetCase(data?.hsiPasswordReset, 'other');
    }
  }

  public InternetFlowIdentifier(CodeId: string, data?: any) {
    if (CodeId === flowCodes.genericError) {
      this.router.navigate(['/unknown-error']);
    } else if (CodeId === flowCodes.accountNotActive) {
      this.router.navigate(['issues/internet/account-not-active']);
    } else if (CodeId === flowCodes.CI9) {
      this.sharedService.setApiResponseData({ ontDetails: data?.ontDetails, routerDetails: data?.routerDetails });
      this.router.navigate(['issues/internet/router-reboot-required']);

      // this.handleCI9Cases(data?.routerDetails);

      // this.sharedService.setApiResponseData({ ontDetails: temp1, routerDetails: temp2 });
      // this.handleCI9Cases(temp2);
    } else if (CodeId === flowCodes.movingElifeConnection) {
      this.router.navigate(['issues/internet/osrp/move-elife-connection']);
    } else if (CodeId === flowCodes.ElifeCancellationRequest) {
      this.router.navigate(['issues/internet/osrp/cancel-elife-connection']);
    } else if (CodeId === flowCodes.accountTemporarilyDisconnected) {
      this.router.navigate(['issues/internet/osrp/account-temporarily-disconnected']);
    } else if (CodeId === flowCodes.outage) {
      this.router.navigate(['issues/internet/outage']);
    } else if (CodeId === flowCodes.issueNotFixed) {
      this.router.navigate(['issues/internet/issue-not-fixed']);
    } else if (CodeId === flowCodes.CI72) {
      // this.sharedService.setApiResponseData({ ontDetails: temp1, routerDetails: temp2, connectedDevices: temp6, hsiUploadDownload: '50Mbps,250Mbps'.split(',') });
      // this.router.navigate(['issues/internet/no-issue']);
      this.sharedService.setApiResponseData({
        connectedDevices: data?.connectedDevices,
        hsiUploadDownload: data?.hsiUploadDownload?.split(','),
      });
      this.sharedService.setUpsellOpportunity(data?.upsellingOpportunity);
      this.handleInternetPasswordResetCase(data?.hsiPasswordReset, 'internet');
    } else if (CodeId === flowCodes.CI73) {
      this.sharedService.setApiResponseData({ ontDetails: data?.ontDetails, routerDetails: data?.routerDetails });
      // this.sharedService.setApiResponseData({ ontDetails: temp1, routerDetails: temp2 });
      this.router.navigate(['issues/internet/router-reset-required']);
    } else if (CodeId === flowCodes.openComplaint) {
      this.router.navigate(['issues/internet/complaint-already-exists']);
      this.sharedService.setApiResponseData({ complaintDetails: data?.complaintDetails });
      // this.sharedService.setApiResponseData({ complaintDetails: temp3 });
    } else if (CodeId === flowCodes.UPSEL3) {
      // Upselling Identified for Router Upgrade
      this.router.navigate(['issues/internet/router-upgrade-recommended']);
    } else if (CodeId === flowCodes.UPSEL4) {
      // Upselling Identified for Router Upgrade / Router Out of Warranty
      this.router.navigate(['issues/internet/router-out-of-warranty']);
    } else if (CodeId === flowCodes.UPSEL5 || CodeId === flowCodes.UPSEL6) {
      // Upselling Identified for Bandwidth And Router Upgrade
      this.router.navigate(['issues/internet/router-package-upgrade']);
    } else if (CodeId === flowCodes.UPSEL7 || CodeId === flowCodes.UPSEL9) {
      // Upselling Identified for Bandwidth / Router  Out of Warranty
      this.router.navigate(['issues/internet/package-upgrade-recommended']);
    } else if (CodeId === flowCodes.UPSEL2 || CodeId === flowCodes.UPSEL8) {
      // Upselling Identified for New Router /Router  Out of Warranty
      this.router.navigate(['issues/internet/third-party-router']);
    }
  }
  public voiceFlowIdentifier(codeId: string, data?: any) {
    if (codeId === flowCodes.genericError) {
      this.router.navigate(['/unknown-error']);
    } else if (codeId === flowCodes.movingElifeConnection) {
      this.sharedService.setApiResponseData({
        referenceNo: data?.referenceNo,
        requestType: data?.requestType,
        dateOfVisit: data?.dateOfVisit,
        status: data?.status,
      });
      this.router.navigate(['issues/phone/osrp/move-elife-connection']);
    } else if (codeId === flowCodes.ElifeCancellationRequest) {
      this.sharedService.setApiResponseData({
        reqNo: data?.referenceNo,
        reqType: data?.requestType,
        status: data?.status,
      });
      this.router.navigate(['issues/phone/osrp/cancel-elife-connection']);
    } else if (codeId === flowCodes.accountTemporarilyDisconnected) {
      this.router.navigate(['issues/phone/osrp/account-temporarily-disconnected']);
    } else if (codeId === flowCodes.outage) {
      this.router.navigate(['issues/phone/outage']);
    } else if (codeId === flowCodes.issueNotFixed) {
      this.router.navigate(['issues/phone/issue-not-fixed']);
    } else if (codeId === flowCodes.CI9) {
      this.sharedService.setApiResponseData({ ontDetails: data?.ontDetails, routerDetails: data?.phoneDetails });
      this.router.navigate(['issues/phone/ont-reboot']); //todo:
    } else if (codeId === flowCodes.CI72) {
      // this.sharedService.setApiResponseData({
      //   connectedDevices: data?.connectedDevices,
      //   hsiUploadDownload: data?.hsiUploadDownload?.split(','),
      // });
      this.router.navigate(['issues/phone/no-issues']);
    }
  }

  public IptvFlowIdentifier(CodeId: string, data?: any) {
    if (CodeId === flowCodes.genericError) {
      this.router.navigate(['/unknown-error']);
    } else if (CodeId === flowCodes.accountNotActive) {
      this.router.navigate(['issues/tv/account-not-active']);
    } else if (CodeId === flowCodes.movingElifeConnection) {
      this.sharedService.setApiResponseData(data?.result?.responseData);
      this.router.navigate(['issues/tv/osrp/move-elife-connection']); ///////OS
    } else if (CodeId === flowCodes.ElifeCancellationRequest) {
      this.sharedService.setApiResponseData(data?.result?.responseData);
      this.router.navigate(['issues/tv/osrp/cancel-elife-connection']);
    } else if (CodeId === flowCodes.accountTemporarilyDisconnected) {
      this.router.navigate(['issues/tv/osrp/account-temporarily-disconnected']);
    } else if (CodeId === flowCodes.outage) {
      this.router.navigate(['issues/tv/outage']);
    } else if (CodeId === flowCodes.issueNotFixed) {
      this.router.navigate(['issues/tv/issues-not-fixed']); ///No need to save api response as its CI9
    } else if (CodeId === flowCodes.openComplaint) {
      this.router.navigate(['issues/tv/complaint-already-exists']);
      this.sharedService.setApiResponseData({ complaintDetails: data?.complaintDetails });
      // this.sharedService.setApiResponseData({ complaintDetails: temp3 });
    } else if (CodeId === flowCodes.CI9) {
      // this.sharedService.setApiResponseData({ ontDetails: temp1, routerDetails: temp2, connectedDevices: temp6 });
      this.sharedService.setApiResponseData({ ontDetails: data?.ontDetails, routerDetails: data?.stbDetails, connectedDevices: data?.connectedDevices });

      if (data?.stbDetails?.length > 0) this.handleCI9CasesIPTV(data?.stbDetails[0]);

      // this.handleCI9CasesIPTV(data?.stbDetails);
      // this.sharedService.setApiResponseData({ ontDetails: temp1, routerDetails: temp2 });
      // this.handleCI9Cases(temp2);
    } else if (CodeId === flowCodes.CI72) {
      this.router.navigate(['issues/tv/tvBox-restart-required-successfully']);
    } else if (CodeId === flowCodes.CI71) {
      this.router.navigate(['issues/tv/box-not-restarted-instructions']); /////////Screen  App.MotiveH&S.2.5.7
    }

    //////////////////End of Handles cases
    else if (CodeId === flowCodes.CI73) {
      this.sharedService.setApiResponseData({ ontDetails: data?.ontDetails, routerDetails: data?.routerDetails });
      // this.sharedService.setApiResponseData({ ontDetails: temp1, routerDetails: temp2 });
      this.router.navigate(['issues/internet/router-reset-required']);
    } else if (CodeId === flowCodes.UPSEL3) {
      // Upselling Identified for Router Upgrade
      this.router.navigate(['issues/internet/router-upgrade-recommended']);
    } else if (CodeId === flowCodes.UPSEL4) {
      // Upselling Identified for Router Upgrade / Router Out of Warranty
      this.router.navigate(['issues/internet/router-out-of-warranty']);
    } else if (CodeId === flowCodes.UPSEL5 || CodeId === flowCodes.UPSEL6) {
      // Upselling Identified for Bandwidth And Router Upgrade
      this.router.navigate(['issues/internet/router-package-upgrade']);
    } else if (CodeId === flowCodes.UPSEL7 || CodeId === flowCodes.UPSEL9) {
      // Upselling Identified for Bandwidth / Router  Out of Warranty
      this.router.navigate(['issues/internet/package-upgrade-recommended']);
    } else if (CodeId === flowCodes.UPSEL2 || CodeId === flowCodes.UPSEL8) {
      // Upselling Identified for New Router /Router  Out of Warranty
      this.router.navigate(['issues/internet/third-party-router']);
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

  handleCI9CasesIPTV(stbDetails: IStbDetail) {
    if (stbDetails?.isRebootRequired) {
      this.router.navigate(['issues/tv/box-restart-required']);
    } else if (!stbDetails?.isReachable) {
      // (!stbDetails?.isReachable) {
      this.router.navigate(['issues/tv/box-not-reachable']);
    }
  }

  handleInternetPasswordResetCase(shouldReset, flowCase: 'internet' | 'other') {
    if (shouldReset) {
      this.router.navigate(['/issues/internet/internet-password-reset']);
    } else if (this.sharedService.getUpsellOpportunity() === flowCodes.UPSEL1) {
      this.router.navigate([`issues/${flowCase}/no-issue`]);
    } else {
      this.InternetFlowIdentifier(this.sharedService.getUpsellOpportunity());

      // this.router.navigate(['issues/internet/no-issue']);
    }
  }
}
