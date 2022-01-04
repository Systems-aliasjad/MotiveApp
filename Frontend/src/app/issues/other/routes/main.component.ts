import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { LoaderScriptsEnum } from 'src/app/shared/constants/constants';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-main',
  template: '',
})
export class MainComponent implements OnInit {
  constructor(private sharedService:SharedService, private shareService: SharedService, private backendService: BackendService, private helperService: HelperService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(() => {
      var scriptArray = this.sharedService.GetLoaderDataByID(LoaderScriptsEnum.ALL_SERVICES_E2E_TROUBLESHOOTING);
      this.shareService.setLoader(true,scriptArray);
      this.backendService.getIssueDiagnositic('ALL').subscribe((data: any) => {
        this.shareService.setLoader(false);
      this.sharedService.SetTsOutCome(data?.result?.responseData?.tsOutcome??'');
        this.helperService.otherFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
      });
    });
  }
}
