import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { LoaderScriptsEnum } from 'src/app/shared/constants/constants';
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
    var scriptArray = this.shareService.GetLoaderDataByID(LoaderScriptsEnum.TV_E2E_TROUBLESHOOTING);

    this.shareService.setLoader(true,scriptArray);
    this.backendService.getIssueDiagnositic('IPTV').subscribe((data) => {
      this.shareService.setLoader(false);
      this.shareService.SetTsOutCome(data?.result?.responseData?.tsOutcome??'');
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

  hard2={
	"code": 200,
	"message": "Success",
	"result": {
		"screenCode": "CI72",
		"statusMessage": "Issue Fixed",
		"validSignals": [
			"next"
		],
		"responseData": {
			"ontDetails": {
				"ontSerial": "48575443E3F5269F",
				"ontType": "HG8240H5",
				"routerSerial": null,
				"routerModel": null,
				"routerManufacturer": null,
				"stbSerialNumber": null,
				"sbSerialNumber": null,
				"stbModel": null,
				"stbMac": null,
				"stbProductClass": null,
				"packages": null,
				"isReachable": true,
				"isRebootRequired": false,
				"isUpgradeRequired": false,
				"isManaged": null,
				"isResetRequired": null,
				"addressSource": null,
				"ipAddress": null,
				"leaseTimeRemaining": null,
				"hostName": null,
				"macAddress": null,
				"interfaceType": null,
				"isActive": null
			},
			"routerDetails": {
				"ontSerial": null,
				"ontType": null,
				"routerSerial": "",
				"routerModel": "",
				"routerManufacturer": "",
				"stbSerialNumber": null,
				"sbSerialNumber": null,
				"stbModel": null,
				"stbMac": null,
				"stbProductClass": null,
				"packages": null,
				"isReachable": true,
				"isRebootRequired": false,
				"isUpgradeRequired": false,
				"isManaged": true,
				"isResetRequired": false,
				"addressSource": null,
				"ipAddress": null,
				"leaseTimeRemaining": null,
				"hostName": null,
				"macAddress": null,
				"interfaceType": null,
				"isActive": null
			},
			"phoneDetails": {
				"ontSerial": null,
				"ontType": null,
				"routerSerial": null,
				"routerModel": null,
				"routerManufacturer": null,
				"stbSerialNumber": null,
				"sbSerialNumber": null,
				"stbModel": null,
				"stbMac": null,
				"stbProductClass": null,
				"packages": null,
				"isReachable": true,
				"isRebootRequired": null,
				"isUpgradeRequired": null,
				"isManaged": null,
				"isResetRequired": null,
				"addressSource": null,
				"ipAddress": null,
				"leaseTimeRemaining": null,
				"hostName": null,
				"macAddress": null,
				"interfaceType": null,
				"isActive": null
			},
			"stbDetails": [
				{
					"ontSerial": null,
					"ontType": null,
					"routerSerial": null,
					"routerModel": null,
					"routerManufacturer": null,
					"stbSerialNumber": "316695150791",
					"sbSerialNumber": null,
					"stbModel": "DWI259S",
					"stbMac": "E03717C81342",
					"stbProductClass": null,
					"packages": null,
					"isReachable": true,
					"isRebootRequired": false,
					"isUpgradeRequired": null,
					"isManaged": null,
					"isResetRequired": null,
					"addressSource": null,
					"ipAddress": null,
					"leaseTimeRemaining": null,
					"hostName": null,
					"macAddress": null,
					"interfaceType": null,
					"isActive": null
				}
			],
			"hsiPasswordReset": false,
			"ppoeConnected": null,
			"wifiEnabled": null,
			"hsiuploadDownload": null,
			"noOfConnectedDevices": null,
			"connectedDevices": null,
			"upsellingOpportunity": "UPSEL1",
			"tsOutcome": "No Issue found",
			"routerConfigRequired": null,
			"dualBandRouter": null,
			"upstream": null,
			"downstream": null,
			"dataTraffic": null,
			"managedWifi": null,
			"resetInternetPassword": null,
			"resetWifiPasswordOption": null,
			"internetConnectionStatus": null,
			"internetCallingPlan": null,
			"speedTestResult": null,
			"routerResetSuccessful": null,
			"hsiPortNumber": "1",
			"iptvPortNumbers": "2"
		}
	}
}
}
