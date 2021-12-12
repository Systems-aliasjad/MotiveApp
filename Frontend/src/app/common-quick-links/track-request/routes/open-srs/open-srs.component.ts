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
    pageTitle: 'MESSAGES.REQUEST_FOLLOW_UP',
    showBackBtn: true,
  };
  selectedRadioItem: string = '';
  constructor(private router: Router, private backendService: BackendService, private sharedService: SharedService) {}

  ngOnInit() {
    var apiResponse = this.sharedService.getApiResponseOpenSrs();
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

      this.sharedService.TrackRecentComplaintByCode(screenCode);
    });
  }

  radioGroupChange(event) {
    this.selectedRadioItem = event.detail.value;
  }
}
