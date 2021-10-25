import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-main',
  template: '',
})
export class MainComponent implements OnInit {
  constructor(private helperService: HelperService, private shareService: SharedService, private backendService: BackendService) {}

  ngOnInit() {
    this.shareService.setLoader(true);
    this.backendService.getIssueDiagnositic('IPTV').subscribe((data) => {
      this.shareService.setLoader(false);
      this.helperService.IptvFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
    });
  }
}
