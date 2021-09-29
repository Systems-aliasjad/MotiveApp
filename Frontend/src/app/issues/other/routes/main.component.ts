import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-main',
  template: '',
})
export class MainComponent implements OnInit {
  constructor(private shareService: SharedService, private backendService: BackendService) {}

  ngOnInit() {
    this.shareService.setLoader(true);
    this.backendService.getIssueDiagnositic('ALL').subscribe((data) => {
      this.shareService.setLoader(false);
      console.log('====ngOnInit other====');
      console.log(data);
      console.log('====================================');
    });
  }
}
