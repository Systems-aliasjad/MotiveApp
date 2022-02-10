import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {
  flowCodes,
  networkDiagramClasses,
  ONT,
  ROUTER,
  STB,
  SVGs,
  TS_OUTCOME_ISSUE_FOUND_FIXED,
  TS_OUTCOME_ISSUE_FOUND_NOT_FIXED,
  TS_OUTCOME_NO_ISSUE,
} from '../constants/constants';
import { IOntDetail, IRouterDetail, IStbDetail } from '../constants/types';
import { SharedService } from '../shared.service';

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
  Ci9Flag = false;
  constructor(private router: Router, private sharedService: SharedService) {}

  connectedDeviceModifier(devices) {
    return devices?.map((device) => {
      return {
        ...device,
        className: networkDiagramClasses.okay,
        url: SVGs.desktop.default,
        title: device.hostName ? device.hostName : 'unnammed',
        subTitle: device?.macAddress,
      };
    });
  }

  connectedDeviceModifierSTB(devices, noSubTitle?: boolean) {
    return devices?.map((device) => {
      return {
        ...device,
        className: networkDiagramClasses.okay,
        url: SVGs.stb.default,
        title: 'STB',
        subTitle: noSubTitle ? '' : device?.stbMac,
        list: [],
      };
    });
  }

  networkDiagramStylingWrapper(ontConfig?: IOntDetail, routerConfig?: any) {
    ontConfig = { ...ontConfig, url: SVGs.ont.default, title: ONT };
     //routerConfig = { ...routerConfig, url: SVGs.router.default, title: ROUTER };
    //Now make router image dynamic
    routerConfig = { ...routerConfig, url: this.sharedService.DynamicSetRouterImages(routerConfig?.routerModel), title: ROUTER };


    ontConfig = this.networkDiagramStylingMapper(ontConfig, null, true);
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

  networkDiagramStylingMapper(device: any, previousDeviceState?: string, isOnt?: boolean) {
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
      } else if (!device?.isManaged && !isOnt) {
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

  networkDiagramStylingWrapperSTB(ontConfig?: IOntDetail, stbConfig?: IStbDetail[]) {
    ontConfig = { ...ontConfig, url: SVGs.ont.default, title: ONT };
    ontConfig = this.networkDiagramStylingMapper(ontConfig, null, true);
    console.log('stbConfig', stbConfig);

    if (ontConfig?.isReachable) {
      stbConfig = stbConfig?.map((stb) => {
        return this.networkDiagramStylingMapper({ ...stb, url: SVGs.stb.default,  title: 'STB' }, ontConfig.className, true);
      });
    } else {
      stbConfig = stbConfig.map((stb) => {
        return {
          
          ...stb,
          url: SVGs.stb.default,
          className: networkDiagramClasses.default,
          title: 'STB',
        };
      });
    }
    return {
      ontConfig,
      stbConfig,
    };
  }
  public otherFlowIdentifier(CodeId: string, data?: any) {
    if (CodeId === flowCodes.genericError) {
      this.sharedService.LogDataResponse(data);
      this.router.navigate(['/unknown-error']);
    } else if (CodeId === flowCodes.outage) {
      this.router.navigate(['issues/other/outage']);
    } else if (CodeId === flowCodes.issueNotFixed) {
      this.sharedService.setApiResponseData({ ontDetails: data?.ontDetails, routerDetails: data?.routerDetails, stbDetails: data?.stbDetails, phoneDetails: data?.phoneDetails});
      this.router.navigate(['issues/other/issue-not-fixed']);
    } else if (CodeId === flowCodes.CI9 || CodeId === flowCodes.CI4) {
      this.sharedService.setApiResponseData({ ontDetails: data?.ontDetails, routerDetails: data?.routerDetails, stbDetails: data?.stbDetails, phoneDetails: data?.phoneDetails,  hsiPortNumber: data?.hsiPortNumber, iptvPortNumbers: data?.iptvPortNumbers });
      if (CodeId === flowCodes.CI9) {
        this.Ci9Flag = true;
      } else {
        this.Ci9Flag = false;
      }
      if (!data?.ontDetails?.isReachable) {
        this.router.navigate(['issues/other/fiber-box-not-reachable'], { state: { Ci9Flag: this.Ci9Flag } });
      } else if(!data?.routerDetails?.isReachable){
        // router not reachable
        this.router.navigate(['issues/other/router-not-reachable'], { state: { Ci9Flag: this.Ci9Flag, otherFlow: true } });
      } else if (data?.stbDetails?.length > 0){
        let stbNotReachableCount = 0;
        data.stbDetails.forEach(element => {
          if(!element.isReachable){
            stbNotReachableCount++;
            this.router.navigate(['issues/tv/box-not-reachable'], { state: { Ci9Flag: this.Ci9Flag, otherFlow: true }})
          }
        });
        if(stbNotReachableCount === 0)
        {
          this.AllSevicesCI9RouterCases(data);
        }
      } else {
        this.AllSevicesCI9RouterCases(data);
      }
      // else if (data?.ontDetails?.isRebootRequired) {
      //   this.router.navigate(['issues/other/router-reboot-required']);
      // } 
    } else if (CodeId === flowCodes.CI73) {
      this.sharedService.setApiResponseData({ dualBandRouter: data?.dualBandRouter, routerConfigRequired: data?.routerConfigRequired });
      this.router.navigate(['issues/other/router-reset-required']);
    } else if (CodeId === flowCodes.CI72) {
      if (data?.tsOutcome === TS_OUTCOME_NO_ISSUE || data?.tsOutcome === TS_OUTCOME_ISSUE_FOUND_FIXED) {
        this.sharedService.setApiResponseData({
          ontDetails: data?.ontDetails,
          routerDetails: data?.routerDetails,
          stbDetails: data?.stbDetails,
          hsiUploadDownload: data?.hsiUploadDownload?.split(','),
          phoneDetails: data?.phoneDetails,
        });
        this.handleInternetPasswordResetCase(data?.hsiPasswordReset, 'other');
        // this.sharedService.setUpsellOpportunity(data?.upsellingOpportunity);
      } else if (data?.tsOutcome === TS_OUTCOME_ISSUE_FOUND_NOT_FIXED) {
        this.sharedService.setApiResponseData({ ontDetails: data?.ontDetails, routerDetails: data?.routerDetails, stbDetails: data?.stbDetails, phoneDetails: data?.phoneDetails });
        this.router.navigate(['issues/other/issue-not-fixed']);
      }

      
    } else if( CodeId === flowCodes.CI13) {
      this.sharedService.setApiResponseData({ ontDetails: data?.ontDetails, routerDetails: data?.routerDetails, stbDetails: data?.stbDetails, phoneDetails: data?.phoneDetails,  hsiPortNumber: data?.hsiPortNumber, iptvPortNumbers: data?.iptvPortNumbers });
      if (!data?.ontDetails?.isReachable) {
        this.router.navigate(['issues/other/common/fiber-box-not-reachable-try-again']);
      } else if(!data?.routerDetails?.isReachable){
        // router not reachable
        this.router.navigate(['issues/other/router-not-reachable']);
      } else if (data?.stbDetails?.length > 0){
        data.stbDetails.forEach(element => {
          if(!element.isReachable){
            //stb not reachable
            this.router.navigate(['issues/tv/box-not-reachable-try-again'], { state: { otherFlow : true }})
          }
        });
      }
    }
      else if (CodeId === flowCodes.CI14) {
      this.sharedService.setApiResponseData(data);
        this.router.navigate(['issues/other/complaint-already-exists']);
      
    }
  }

  public handleUpsellCases(codeId) {
    if (codeId === flowCodes.UPSEL3) {
      // Upselling Identified for Router Upgrade
      this.router.navigate(['issues/internet/router-upgrade-recommended']);
    } else if (codeId === flowCodes.UPSEL4 || codeId === flowCodes.UPSEL8) {
      // Upselling Identified for Router Upgrade / Router Out of Warranty
      this.router.navigate(['issues/internet/router-out-of-warranty']);
    } else if (codeId === flowCodes.UPSEL5 || codeId === flowCodes.UPSEL6) {
      // Upselling Identified for Bandwidth And Router Upgrade
      this.router.navigate(['issues/internet/router-package-upgrade']);
    } else if (codeId === flowCodes.UPSEL7 || codeId === flowCodes.UPSEL9) {
      // Upselling Identified for Bandwidth / Router  Out of Warranty
      this.router.navigate(['issues/internet/package-upgrade-recommended']);
    } else if (codeId === flowCodes.UPSEL2 ) {
      // Upselling Identified for New Router /Router  Out of Warranty
      this.router.navigate(['issues/internet/third-party-router']);
    }
  }

  public InternetFlowIdentifier(CodeId: string, data?: any) {
    if (CodeId === flowCodes.genericError) {
      this.sharedService.LogDataResponse(data);
      this.router.navigate(['/unknown-error']);
    } else if (CodeId === flowCodes.accountNotActive) {
      this.router.navigate(['issues/internet/account-not-active']);
    } else if (CodeId === flowCodes.CI9 || CodeId === flowCodes.CI4) {
      this.sharedService.setApiResponseData({ ontDetails: data?.ontDetails, routerDetails: data?.routerDetails, hsiPortNumber: data?.hsiPortNumber });
      if (CodeId === flowCodes.CI9) {
        this.Ci9Flag = true;
      } else {
        this.Ci9Flag = false;
      }
      if (!data?.ontDetails?.isReachable) {
        this.router.navigate(['issues/internet/fiber-box-not-reachable'], { state: { Ci9Flag: this.Ci9Flag } });
      } else if (data?.ontDetails?.isRebootRequired) {
        this.router.navigate(['issues/internet/ont-reboot-required']);
      } 
      else {
        this.handleCI9RouterCases(data?.routerDetails);
      }
    } else if (CodeId === flowCodes.movingElifeConnection) {
      this.sharedService.setApiResponseData({
        referenceNo: data?.referenceNo,
        requestType: data?.requestType,
        dateOfVisit: data?.dateOfVisit,
        status: data?.status,
      });
      this.router.navigate(['issues/internet/osrp/move-elife-connection']);
    } 
    
    // else if (CodeId === flowCodes.ElifeCancellationRequest) {
    //   this.sharedService.setApiResponseData({
    //     referenceNo: data?.referenceNo,
    //     requestType: data?.requestType,
    //     dateOfVisit: data?.dateOfVisit,
    //     status: data?.status,
    //   });

    //  if(data?.requestType==='TECHVISIT' || data?.requestType==='ADDSRVICE'  || data?.requestType==='DELETESRV'){
    //   this.router.navigate(['issues/internet/open-technical-request']);
    //  }

    //  else{
    //     this.router.navigate(['issues/internet/osrp/cancel-elife-connection']);
    //  }


      
    // } 
    
    
    
    else if (CodeId === flowCodes.accountTemporarilyDisconnected) {
      this.router.navigate(['issues/internet/osrp/account-temporarily-disconnected']);
    } else if (CodeId === flowCodes.outage) {
      this.router.navigate(['issues/internet/outage']);
    } else if (CodeId === flowCodes.issueNotFixed) {
      this.sharedService.setApiResponseData({ ontDetails: data?.ontDetails, routerDetails: data?.routerDetails });

      if (data?.hsiPasswordReset) {
        this.router.navigate([`issues/internet/internet-password-reset`]);
      } else {
        this.router.navigate(['issues/internet/issue-not-fixed']);
      }
    } else if (CodeId === flowCodes.CI72) {
      if (data?.tsOutcome === TS_OUTCOME_NO_ISSUE || data?.tsOutcome === TS_OUTCOME_ISSUE_FOUND_FIXED) {
        this.sharedService.setApiResponseData({
          connectedDevices: data?.connectedDevices,
          hsiUploadDownload: data?.hsiUploadDownload?.split(','),
        });
        this.sharedService.setUpsellOpportunity(data?.upsellingOpportunity);
        if(data?.routerResetSuccessful && data?.routerResetSuccessful){
             //sucess case
            // OK btn Action: this.handleInternetPasswordResetCase(data?.hsiPasswordReset, 'internet');
            this.router.navigate(['issues/internet/router-reset-successful'],{state: {routerResetSuccessful: data?.routerResetSuccessful, hsiPasswordReset: data?.hsiPasswordReset}});
        } else if(data?.routerResetSuccessful && !data?.routerResetSuccessful) {
          this.sharedService.LogDataResponse(data);
            // failure case
            //OK btn Action: this.handleInternetPasswordResetCase(data?.hsiPasswordReset, 'internet');
            this.router.navigate(['error-comes'], {state: {routerResetSuccessful: data?.routerResetSuccessful, hsiPasswordReset: data?.hsiPasswordReset}});
        } else {
          this.handleInternetPasswordResetCase(data?.hsiPasswordReset, 'internet');
        }
      } else if (data?.tsOutcome === TS_OUTCOME_ISSUE_FOUND_NOT_FIXED) {
        this.sharedService.setApiResponseData({ ontDetails: data?.ontDetails, routerDetails: data?.routerDetails });
        this.router.navigate(['issues/internet/issue-not-fixed']);
      }
    } else if (CodeId === flowCodes.CI73) {
      this.sharedService.setApiResponseData({ dualBandRouter: data?.dualBandRouter, routerConfigRequired: data?.routerConfigRequired });
      //this.router.navigate(['issues/internet/reset-wifi-password-screen-dialog']);
      this.router.navigate(['issues/internet/reset-wifi-password']);
      // if (data?.routerConfigRequired) {
      //   this.router.navigate(['issues/internet/router-reset-successfull-message']);
      // } else {
      //   this.router.navigate(['issues/internet/router-reset-successful']);
      // }
    } else if (CodeId === flowCodes.openComplaint) {
      this.router.navigate(['issues/internet/complaint-already-exists']);
      this.sharedService.setApiResponseData({ complaintDetails: data?.complaintDetails });
    } else if (CodeId === flowCodes.CI14) {
      this.sharedService.setApiResponseData(data);
      this.router.navigate(['issues/internet/complaint-already-exists']);
    } else if (CodeId === flowCodes.CI13){
      this.sharedService.setApiResponseData({ ontDetails: data?.ontDetails, routerDetails: data?.routerDetails });
      if (!data?.ontDetails?.isReachable) {
        this.router.navigate(['issues/internet/common/fiber-box-not-reachable-try-again']);
      } else {
        this.handleCI9RouterCases(data?.routerDetails);
      }
    }

     else if (CodeId === flowCodes.E2ECRM22) {
      this.sharedService.setApiResponseData({
        referenceNo: data?.referenceNo,
        requestType: data?.requestType,
        dateOfVisit: data?.dateOfVisit,
        status: data?.status,
      });
     this.router.navigate(['issues/internet/open-technical-request']);

    }

   else if (CodeId === flowCodes.E2ECRM23) {
      this.sharedService.setApiResponseData({
        referenceNo: data?.referenceNo,
        requestType: data?.requestType,
        dateOfVisit: data?.dateOfVisit,
        status: data?.status,
      });
     if(data?.requestType==='EXTSHIFT'){
      this.router.navigate(['issues/internet/osrp/move-elife-connection']);
     }

     else { //if(data?.requestType==='CESREQ'){
      this.router.navigate(['issues/internet/osrp/cancel-elife-connection']);
     }


    }



  }

  public voiceFlowIdentifier(codeId: string, data?: any) {
    if (codeId === flowCodes.genericError) {
      this.sharedService.LogDataResponse(data);
      this.router.navigate(['/unknown-error']);
    } else if (codeId === flowCodes.movingElifeConnection) {
      this.sharedService.setApiResponseData({
        referenceNo: data?.referenceNo,
        requestType: data?.requestType,
        dateOfVisit: data?.dateOfVisit,
        status: data?.status,
      });
      this.router.navigate(['issues/phone/osrp/move-elife-connection']);
    } 
    
//     else if (codeId === flowCodes.ElifeCancellationRequest) {
//       this.sharedService.setApiResponseData({
//         referenceNo: data?.referenceNo,
//         requestType: data?.requestType,
//         dateOfVisit: data?.dateOfVisit,
//         status: data?.status,
//       });


//  if(data?.requestType==='TECHVISIT' || data?.requestType==='ADDSRVICE'  || data?.requestType==='DELETESRV'){
//       this.router.navigate(['issues/phone/open-technical-request']);
//      }

//      else{
//       this.router.navigate(['issues/phone/osrp/cancel-elife-connection']);
//      }
//     }
    
    
    
    
    else if (codeId === flowCodes.accountTemporarilyDisconnected) {
      this.router.navigate(['issues/phone/osrp/account-temporarily-disconnected']);
    } else if (codeId === flowCodes.outage) {
      this.router.navigate(['issues/phone/outage']);
    } else if (codeId === flowCodes.issueNotFixed) {
      this.router.navigate(['issues/phone/issue-not-fixed']);
    } else if (codeId === flowCodes.CI9 || codeId === flowCodes.CI4) {
      this.sharedService.setApiResponseData({ ontDetails: data?.ontDetails, phoneDetails: data?.phoneDetails });
      if(codeId === flowCodes.CI9){
        this.Ci9Flag = true
      } else {
        this.Ci9Flag = false
      }
      if (!data?.ontDetails?.isReachable) {
        this.router.navigate(['issues/phone/fiber-box-not-reachable'], {state: {Ci9Flag: this.Ci9Flag}});
      } else if(!data?.phoneDetails?.isReachable){
        this.router.navigate(['issues/phone/phone-not-reachable-first-time'], {state: {Ci9Flag: this.Ci9Flag}})
      } else if (data?.ontDetails?.isRebootRequired) {
        this.router.navigate(['issues/phone/ont-reboot']);
      }
    } else if (codeId === flowCodes.CI72) {
      if (data?.tsOutcome === TS_OUTCOME_NO_ISSUE || data?.tsOutcome === TS_OUTCOME_ISSUE_FOUND_FIXED) {
        this.router.navigate(['issues/phone/no-issues']);
      } else if (data?.tsOutcome === TS_OUTCOME_ISSUE_FOUND_NOT_FIXED) {
        this.router.navigate(['issues/phone/issue-not-fixed']);
      }
    } else if(codeId == flowCodes.CI13){
      this.sharedService.setApiResponseData({ ontDetails: data?.ontDetails, routerDetails: data?.phoneDetails });
      if (!data?.ontDetails?.isReachable) {
        this.router.navigate(['issues/phone/common/fiber-box-not-reachable-try-again']);
      }  else if(!data?.phoneDetails?.isReachable){
        this.router.navigate(['issues/phone/phone-not-reachable'])
      }
    }
    else if (codeId === flowCodes.CI14) {
      this.sharedService.setApiResponseData(data);
    this.router.navigate(['issues/phone/complaint-already-exists']);
      
    }

    else if (codeId === flowCodes.E2ECRM22) {
      this.sharedService.setApiResponseData({
        referenceNo: data?.referenceNo,
        requestType: data?.requestType,
        dateOfVisit: data?.dateOfVisit,
        status: data?.status,
      });
      this.router.navigate(['issues/phone/open-technical-request']);

    }

   else if (codeId === flowCodes.E2ECRM23) {
      this.sharedService.setApiResponseData({
        referenceNo: data?.referenceNo,
        requestType: data?.requestType,
        dateOfVisit: data?.dateOfVisit,
        status: data?.status,
      });
     if(data?.requestType==='EXTSHIFT'){
      this.router.navigate(['issues/phone/osrp/move-elife-connection']);
     }

     else { //if(data?.requestType==='CESREQ'){
      this.router.navigate(['issues/phone/osrp/cancel-elife-connection']);
     }


    }




  }

  public IptvFlowIdentifier(CodeId: string, data?: any) {
    if (CodeId === flowCodes.genericError) {
      this.sharedService.LogDataResponse(data);
      this.router.navigate(['/unknown-error']);
    } else if (CodeId === flowCodes.accountNotActive) {
      this.router.navigate(['issues/tv/account-not-active']);
    } else if (CodeId === flowCodes.movingElifeConnection) {
      this.sharedService.setApiResponseData({
        referenceNo: data?.referenceNo,
        requestType: data?.requestType,
        dateOfVisit: data?.dateOfVisit,
        status: data?.status,
      });
      //this.sharedService.setApiResponseData(data);
      this.router.navigate(['issues/tv/osrp/move-elife-connection']); ///////OS
    } 
    
    // else if (CodeId === flowCodes.ElifeCancellationRequest) {
    //   this.sharedService.setApiResponseData({
    //     referenceNo: data?.referenceNo,
    //     requestType: data?.requestType,
    //     dateOfVisit: data?.dateOfVisit,
    //     status: data?.status,
    //   });

    // if(data?.requestType==='TECHVISIT' || data?.requestType==='ADDSRVICE'  || data?.requestType==='DELETESRV'){
    //   this.router.navigate(['issues/tv/open-technical-request']);
    //  }

    //  else{

    //   //this.sharedService.setApiResponseData(data?.result?.responseData);
    //   this.router.navigate(['issues/tv/osrp/cancel-elife-connection']);
    //  }
    // }
    
    
    else if (CodeId === flowCodes.accountTemporarilyDisconnected) {
      this.router.navigate(['issues/tv/osrp/account-temporarily-disconnected']);
    } else if (CodeId === flowCodes.outage) {
      this.router.navigate(['issues/tv/outage']);
    } else if (CodeId === flowCodes.issueNotFixed) {
      this.sharedService.setApiResponseData({ ontDetails: data?.ontDetails, stbDetails: data?.stbDetails, routerDetails: data?.stbDetails });
      this.router.navigate(['issues/tv/issues-not-fixed']); ///No need to save api response as its CI9
    } else if (CodeId === flowCodes.openComplaint) {
      this.sharedService.setApiResponseData({ complaintDetails: data?.complaintDetails });
      this.router.navigate(['issues/tv/complaint-already-exists']);

      // this.sharedService.setApiResponseData({ complaintDetails: temp3 });
    } else if (CodeId === flowCodes.CI9 || CodeId === flowCodes.CI4) {
      // this.sharedService.setApiResponseData({ ontDetails: temp1, routerDetails: temp2, connectedDevices: temp6 });
      this.sharedService.setApiResponseData({ ontDetails: data?.ontDetails, stbDetails: data?.stbDetails, iptvPortNumbers: data?.iptvPortNumbers });
      if (CodeId === flowCodes.CI9) {
        this.Ci9Flag = true;
      } else {
        this.Ci9Flag = false;
      }
      if (!data?.ontDetails?.isReachable) {
        this.router.navigate(['issues/tv/fiber-box-not-reachable'], { state: { Ci9Flag: this.Ci9Flag } });
      } else if (data?.ontDetails?.isRebootRequired) {
        this.router.navigate(['issues/tv/ont-reboot-required']);
      } else if (data?.stbDetails?.length > 0) {
        data.stbDetails.forEach(element => {
          this.handleCI9RouterCasesIPTV(element);
        });
      }
      // this.handleCI9RouterCasesIPTV(data?.stbDetails);
    } else if(CodeId === flowCodes.CI13){
      this.sharedService.setApiResponseData({ ontDetails: data?.ontDetails, routerDetails: data?.stbDetails, stbDetails: data?.stbDetails });
      if (!data?.ontDetails?.isReachable) {
        this.router.navigate(['issues/tv/common/fiber-box-not-reachable-try-again']);
      } else if(data?.stbDetails?.length > 0){
        data.stbDetails.forEach(element => {
          if(!element?.isReachable){
            this.router.navigate(['issues/tv/box-not-reachable-try-again'])
          }
        });
      }
    }
    //////////////////First Check
    // else if (CodeId === flowCodes.CI72) {
    //   this.router.navigate(['issues/tv/tvBox-restart-required-successfully']);
    // }
    /////End of First Check No changed to no issues
    else if (CodeId === flowCodes.CI72) {
      this.sharedService.setApiResponseDataNoIssuesSTB({
        ontDetails: data?.ontDetails,
        stbDetails: data?.stbDetails,
        connectedDevices: data?.responseData?.stbDetails,
      });
      this.sharedService.setApiResponseData({
        ontDetails: data?.ontDetails,
        stbDetails: data?.stbDetails,
        connectedDevices: data?.responseData?.stbDetails,
      });
      this.sharedService.setIptvPortNumber(data?.iptvPortNumbers);
      if (data?.tsOutcome === TS_OUTCOME_NO_ISSUE || data?.tsOutcome === TS_OUTCOME_ISSUE_FOUND_FIXED) {
        if (data?.stbDetails) {
          let flag = false;
          var stbList = data?.stbDetails;
          stbList.forEach((element) => {
            if (!element?.isReachable) {
              this.router.navigate(['issues/tv/box-not-reachable']);
              flag = true;
            } else if (element?.isRebootRequired) {
              this.router.navigate(['issues/tv/box-restart-required']);
              flag = true;
            }
          });

          //  if (stb?.isReachable && !stb?.isRebootRequired) {
          if (!flag) this.router.navigate(['issues/tv/no-issues']);
          //}
        }
      } else if (data?.tsOutcome === TS_OUTCOME_ISSUE_FOUND_NOT_FIXED) {
        this.sharedService.setApiResponseData({ ontDetails: data?.ontDetails, routerDetails: data?.stbDetails });
        this.router.navigate(['issues/tv/issues-not-fixed']); ///No need to save api response as its CI9
      }
    }
    // else if (CodeId === flowCodes.issueNotFixed) {
    //   this.router.navigate(['issues/tv/box-not-restarted-instructions']); /////////Screen  App.MotiveH&S.2.5.7
    // }

    //////////////////End of Handles cases
    else if (CodeId === flowCodes.CI73) {
      // this.sharedService.setApiResponseData({ ontDetails: data?.ontDetails, routerDetails: data?.routerDetails });
      // this.sharedService.setApiResponseData({ ontDetails: temp1, routerDetails: temp2 });
      this.sharedService.setApiResponseData({ dualBandRouter: data?.dualBandRouter, routerConfigRequired: data?.routerConfigRequired });
      this.router.navigate(['issues/internet/reset-wifi-password']);
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

    else if (CodeId === flowCodes.CI14) {
      this.sharedService.setApiResponseData(data);
      this.router.navigate(['issues/tv/complaint-exists']);
      
    }

   else if (CodeId === flowCodes.E2ECRM22) {
      this.sharedService.setApiResponseData({
        referenceNo: data?.referenceNo,
        requestType: data?.requestType,
        dateOfVisit: data?.dateOfVisit,
        status: data?.status,
      });
     this.router.navigate(['issues/tv/open-technical-request']);

    }

   else if (CodeId === flowCodes.E2ECRM23) {
      this.sharedService.setApiResponseData({
        referenceNo: data?.referenceNo,
        requestType: data?.requestType,
        dateOfVisit: data?.dateOfVisit,
        status: data?.status,
      });
     if(data?.requestType==='EXTSHIFT'){
      this.router.navigate(['issues/tv/osrp/move-elife-connection']);
     }

     else { //if(data?.requestType==='CESREQ'){
      this.router.navigate(['issues/tv/osrp/cancel-elife-connection']);
     }


    }




  }

  AllSevicesCI9RouterCases(data ) {
    if (data?.routerDetails?.isManaged) {
      this.router.navigate(['issues/other/router-reboot-required']);
    //  if(data?.routerDetails?.isRebootRequired || data?.ontDetails?.isRebootRequired){
    //   this.router.navigate(['issues/other/router-reboot-required']);
    //  } else if(data?.stbDetails?.length > 0) {
    //    data.stbDetails.forEach(element => {
    //      if(!element.isRebootRequired){
    //       this.router.navigate(['issues/other/router-reboot-required']);
    //      }
    //    });
    //  }
    } else {
      this.router.navigate(['issues/internet/3rd-party-router-reset'], {state: { Ci9Flag: this.Ci9Flag , otherFlow: true }});
    }
  }

  handleCI9RouterCases(routerDetails: IRouterDetail) {
    if (routerDetails?.isManaged) {
      if (!routerDetails?.isReachable) {
        this.router.navigate(['issues/internet/router-not-reachable'], {state: { Ci9Flag: this.Ci9Flag }});
      } else if (routerDetails.isResetRequired) {
        this.router.navigate(['issues/internet/router-reset-required']);
      } else if (routerDetails?.isRebootRequired) {
        ///Needs to be changed
        this.router.navigate(['issues/internet/router-reboot-required']);
      } else if (routerDetails?.isUpgradeRequired) {
        this.router.navigate(['issues/internet/router-upgrade-recommended']);
      }
    } else {
      this.router.navigate(['issues/internet/3rd-party-router-reset'], {state: { Ci9Flag: this.Ci9Flag }});
    }
  }

  handleCI9RouterCasesIPTV(stbDetails: IStbDetail) {
    if (!stbDetails?.isReachable) {
      // (!stbDetails?.isReachable) {
      this.router.navigate(['issues/tv/box-not-reachable'], {state: { Ci9Flag: this.Ci9Flag }});
    }else if (stbDetails?.isRebootRequired) {
      this.router.navigate(['issues/tv/box-restart-required']);
    }
  }

  handleInternetPasswordResetCase(shouldReset, flowCase: 'internet' | 'other') {
    if (shouldReset) {
      this.router.navigate([`/issues/${flowCase}/internet-password-reset`]);
    } else if (!this.sharedService.getUpsellOpportunity() || this.sharedService.getUpsellOpportunity() === flowCodes.UPSEL1) {
      this.router.navigate([`issues/${flowCase}/no-issue`]);
    } else {
      this.handleUpsellCases(this.sharedService.getUpsellOpportunity());
      // this.router.navigate(['issues/internet/no-issue']);
    }
  }

  stbImagesByID(name){

    // switch(name){

    //   case 
    // }
  }

}
