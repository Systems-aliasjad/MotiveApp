import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-main',
  template: '',
})
export class MainComponent implements OnInit {
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

  constructor(private helperService: HelperService, private shareService: SharedService, private backendService: BackendService) {}

  ngOnInit() {
    // this.shareService.setApiResponseData(this.hardData);
    //  this.helperService.IptvFlowIdentifier('CI9', this.hardData);
    this.shareService.setLoader(true);
    this.backendService.getIssueDiagnositic('IPTV').subscribe((data) => {
      this.shareService.setLoader(false);
      console.log('Response For TV: ' + data);
      this.helperService.IptvFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
    });
  }
}
