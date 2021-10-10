import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared/shared.service';
import { BackendService } from 'src/app/services/backend.service';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  template: '',
})
export class MainComponent implements OnInit {
  constructor(private shareService: SharedService, private backendService: BackendService, private helperService: HelperService, private activatedRoute: ActivatedRoute) {}

  hardData = {
    hsiPasswordReset: false,
    ppoeConnected: 'true',
    wifiEnabled: 'true',
    hsiUploadDownload: '50Mbps,250Mbps',
    noOfConnectedDevices: 1,
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
    upsellingOpportunity: 'UPSEL2',
    tsOutcome: 'No Issue Found',
  };

  ngOnInit() {
    // this.helperService.flowIdentifier('CI72', this.hardData);
    this.activatedRoute.params.subscribe(() => {
      this.shareService.setLoader(true);
      this.backendService.getIssueDiagnositic('INTERNET').subscribe((data: any) => {
        this.shareService.setLoader(false);
        this.helperService.flowIdentifier(data?.result?.screenCode, data?.result?.responseData);
        console.log('====ngOnInit INTERNET====');
        console.log(data);
        console.log('====================================');
      });
    });
  }
}
