import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { flowCodes, QUICK_ACTION } from 'src/app/shared/constants/constants';
import { IPageHeader } from 'src/app/shared/constants/types';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-quick-home-zone-reset-wifi',
  templateUrl: './quick-home-zone-reset-wifi.component.html',
  styleUrls: ['./quick-home-zone-reset-wifi.component.scss'],
})
export class QuickHomeZoneResetWifiComponent implements OnInit {
  openSrsList: any = [];
  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.DEVICE_CONNECTED_TO_HOME_ZONE',
    showBackBtn: true,
  };
  selectedRadioItem: string = '';
  constructor(private router: Router, private backendService: BackendService, private sharedService: SharedService) {}

  ngOnInit() {
    var apiResponse = this.sharedService.getApiResponseHomeZoneCall();
    var opensrs = apiResponse.homeZoneAPs;

    opensrs?.forEach((element) => {
      var index = {
        title: 'Device No: ' + element,
        ID: element,
      };
      this.openSrsList.push(index);
    });
  }

  button1Listener() {
    this.router.navigate(['/issues/internet/stage2/reset-wifi-password'], { state: { fromhomeZones: this.selectedRadioItem } });
  }

  radioGroupChange(event) {
    this.selectedRadioItem = event.detail.value;
  }
}