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
  constructor(private shareService: SharedService, private backendService: BackendService, private helperService: HelperService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // this.helperService.voiceFlowIdentifier('CI72');
    this.activatedRoute.params.subscribe(() => {
      var scriptArray = this.shareService.GetLoaderDataByID(LoaderScriptsEnum.TELEPHONE_E2E_TROUBLESHOOTING);
      this.shareService.setLoader(true,scriptArray);
      this.backendService.getIssueDiagnositic('VOICE').subscribe((data: any) => {
        this.shareService.setLoader(false);
      this.shareService.SetTsOutCome(data?.result?.responseData?.tsOutcome??'');
        this.helperService.voiceFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
      });
    });
  }
}
