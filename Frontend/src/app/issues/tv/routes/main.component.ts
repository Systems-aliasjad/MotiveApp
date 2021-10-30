import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-main',
  template: '',
})
export class MainComponent implements OnInit {
  // hardData = {
  //   hsiPasswordReset: false,
  //   ppoeConnected: 'true',
  //   wifiEnabled: 'true',
  //   hsiUploadDownload: '50Mbps,250Mbps',
  //   noOfConnectedDevices: 1,
  //   connectedDevices: [
  //     {
  //       addressSource: 'DHCP',
  //       isActive: '1',
  //       ipAddress: '192.168.1.101',
  //       leaseTimeRemaining: '21856',
  //       hostName: '',
  //       macAddress: 'a6:8d:22:64:e9:b3',
  //       interfaceType: '802.11',
  //     },
  //   ],
  //   upsellingOpportunity: 'UPSEL2',
  //   tsOutcome: 'No Issue Found',
  // };

  temp1 = {
    ontSerial: '485754431E91C19B',
    ontType: 'I-240G-A',
    isReachable: false,
    isRebootRequired: false,
    isUpgradeRequired: false,
    url: '',
    className: '',
  };

  temp2 = {
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

  hardData = {
    screenCode: 'CI9',
    responseData: {
      hsiPasswordReset: false,
      ppoeConnected: 'true',
      wifiEnabled: 'true',
      hsiUploadDownload: '50Mbps,250Mbps',
      noOfConnectedDevices: 1,
      routerDetails: this.temp2,
      ontDetails: this.temp1,
      connectedDevices: [
        {
          addressSource: 'DHCP',
          isActive: '1',
          ipAddress: '192.168.1.101',
          leaseTimeRemaining: '21856',
          hostName: '',
          macAddress: 'a6:8d:22:64:e9:b3',
          interfaceType: '802.11',
        },
      ],
      stbDetails: [
        {
          addressSource: 'DHCP',
          isActive: '1',
          ipAddress: '192.168.1.101',
          leaseTimeRemaining: '21856',
          hostName: '',
          macAddress: 'a6:8d:22:64:e9:b3',
          interfaceType: '802.11',
        },
      ],
      upsellingOpportunity: 'UPSEL3',
      tsOutcome: 'No Issue Found',
    },
  };

  Ci72Case = {
    code: 200,

    message: 'success',

    result: {
      screenCode: 'CI72',

      statusMessage: 'Network reachability diagram',

      responseData: {
        stbDetails: [
          {
            isReachable: true,

            isRebootRequired: false,

            stbSerialNumber: '123',

            stbModel: 'Model 1',

            stbMac: 'Mac 1',
          },
          {
            isReachable: true,

            isRebootRequired: false,

            stbSerialNumber: '456',

            stbModel: 'Model 2',

            stbMac: 'Mac 2',
          },
          {
            isReachable: true,

            isRebootRequired: false,

            stbSerialNumber: '789',

            stbModel: 'Model 3',

            stbMac: 'Mac 3',
          },
        ],
      },
    },
  };

  constructor(private helperService: HelperService, private shareService: SharedService, private backendService: BackendService) {}

  ngOnInit() {
    // this.shareService.setApiResponseData(this.hardData);
    //  this.helperService.IptvFlowIdentifier('CI9', this.hardData?.responseData);
    this.shareService.setLoader(true);
    this.backendService.getIssueDiagnositic('IPTV').subscribe((data) => {
      this.shareService.setLoader(false);

      // console.log('Response For TV: ' + data);
      //data = this.Ci72Case;
      this.helperService.IptvFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
    });
  }

  newHardData = {
    code: 200,
    message: 'Success',
    result: {
      screenCode: 'CI72',
      statusMessage: 'Issue Fixed',
      validSignals: ['next'],
      responseData: {
        ontDetails: {
          ontSerial: '485754437103B12E',
          ontType: 'HG8240H',
          isReachable: true,
          isRebootRequired: false,
          isUpgradeRequired: false,
        },
        routerDetails: {
          routerSerial: '',
          routerModel: '',
          isReachable: true,
          isRebootRequired: false,
          isUpgradeRequired: false,
          isManaged: true,
          isResetRequired: false,
        },
        stbDetails: [
          {
            stbSerialNumber: '110551055759',
            stbModel: 'DWI811ETI',
            stbMac: 'B0C28748C46E',
            isReachable: false,
            isRebootRequired: false,
          },
        ],
        hsiPasswordReset: false,
        upsellingOpportunity: 'UPSEL1',
        tsOutcome: 'No Issue found',
      },
    },
  };
}
