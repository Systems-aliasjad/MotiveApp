import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-main',
  template: '',
})
export class MainComponent implements OnInit {
  constructor(private shareService: SharedService, private backendService: BackendService, private helperService: HelperService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(() => {
      this.shareService.setLoader(true);
      this.backendService.getIssueDiagnositic('ALL').subscribe((data: any) => {
        this.shareService.setLoader(false);
        this.helperService.otherFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
      });
    });
  }
}
