import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { flowCodes } from 'src/app/shared/constants/constants';
import { IPageHeader } from 'src/app/shared/constants/types';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-open-srs',
  templateUrl: './open-srs.component.html',
  styleUrls: ['./open-srs.component.scss'],
})
export class OpenSrsComponent implements OnInit {
  openSrsList: any = [];
  headerConfig: IPageHeader = {
    pageTitle: 'MESSAGES.SR_FOLLOW_UP',
    showBackBtn: true,
  };
  selectedRadioItem: string = '';
  constructor(private router: Router, private backendService: BackendService, private sharedService: SharedService) {}

  ngOnInit() {
    var apiResponse = this.sharedService.getApiResponseData();
    var opensrs = apiResponse.openSrs;
    opensrs?.forEach((element) => {
      var index = {
        title: 'SR#: ' + element,
        ID: element,
      };
      this.openSrsList.push(index);
    });
  }

  button1Listener() {
    this.sharedService.setLoader(true);
    this.backendService.srFollowupRemarks(this.selectedRadioItem).subscribe((data: any) => {
      this.sharedService.setLoader(false);
      this.sharedService.setApiResponseData(data?.result?.responseData);

      var screenCode = data?.result?.screenCode;

      switch (screenCode) {
        case flowCodes.E2ECRM31:
          this.router.navigate(['track-request/try-again-error']);
          break;
        case flowCodes.E2ECRM33:
          this.router.navigate(['track-request/request-detail']);
          break;
        case flowCodes.E2ECRM35:
          this.router.navigate(['track-request/request-already-exists']);
          break;
        case flowCodes.E2ECRM36:
          this.router.navigate(['track-request/request-under-process']);
          break;
        case flowCodes.E2ECRM37:
          this.router.navigate(['track-request/request-in-process']);
          break;
        case flowCodes.E2ECRM38:
          this.router.navigate(['track-request/service-unavailable']);
          break;
        case flowCodes.E2ECRM39:
          this.router.navigate(['track-request/action-required']);
          break;
        case flowCodes.E2ECRM310:
        case flowCodes.E2ECRM311:
          this.router.navigate(['track-request/appointment-set-successfully']);
          break;
        case flowCodes.E2ECRM312:
          this.router.navigate(['track-request/work-not-completed']);
          break;
        case flowCodes.E2ECRM313:
          this.router.navigate(['track-request/request-already-exists']);
          break;
        case flowCodes.E2ECRM314:
        case flowCodes.E2ECRM315:
          this.router.navigate(['track-request/request-detail']);
          break;
        case flowCodes.E2ECRM316:
        case flowCodes.E2ECRM317:
        case flowCodes.E2ECRM318:
        case flowCodes.E2ECRM319:
        case flowCodes.E2ECRM320:
        case flowCodes.E2ECRM321:
        case flowCodes.E2ECRM322:
        case flowCodes.E2ECRM324:
          this.router.navigate(['track-request/request-in-process']);
          break;

        // case flowCodes.E2ECRM323:
        //   this.router.navigate(['track-request/action-required']);
        //   break;
      }
    });
  }

  radioGroupChange(event) {
    this.selectedRadioItem = event.detail.value;
  }
}
