import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared/shared.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-main',
  template: '',
})
export class MainComponent implements OnInit {
  constructor(private shareService: SharedService, private backendService: BackendService) {}

  ngOnInit() {
    this.shareService.setLoader(true);
    this.backendService.getIssueDiagnositic('INTERNET').subscribe((data) => {
      this.shareService.setLoader(false);
      console.log('====ngOnInit INTERNET====');
      console.log(data);
      console.log('====================================');
    });
  }
}
