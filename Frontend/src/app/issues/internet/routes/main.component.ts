import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared/shared.service';
import { BackendService } from 'src/app/services/backend.service';
import { HelperService } from 'src/app/shared/helper/helper.service';

@Component({
  selector: 'app-main',
  template: '',
})
export class MainComponent implements OnInit {
  constructor(private shareService: SharedService, private backendService: BackendService, private helperService: HelperService) {}

  ngOnInit() {
    this.shareService.setLoader(true);
    this.backendService.getIssueDiagnositic('INTERNET').subscribe((data: any) => {
      this.shareService.setLoader(false);
      this.helperService.flowIdentifier(data?.result?.screenCode);
      console.log('====ngOnInit INTERNET====');
      console.log(data);
      console.log('====================================');
    });
  }
}
