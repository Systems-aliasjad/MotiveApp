import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerJourneyConstants } from '../../constants/CustomerJourneyConstants';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'unable-connect-newDevice-wifi',
  templateUrl: './unable-connect-newDevice-wifi.component.html',
  styleUrls: ['./unable-connect-newDevice-wifi.component.scss'],
})
export class UnableConnectNewDeviceWifiComponent implements OnInit {
  selectedLang: string = 'en';
  instructionList: string[] = [
    'Make sure that you can see your Wi-Fi network (try to stand closer to the router)',
    'Make sure that you have the correct Wi-Fi password',
    'Search for available Wi-Fi networks from your device',
    'Connect to your Wi-Fi network by verifying the name and entering the correct password',
    'Select the device type and operating system to learn how to connect your device to the Wifi network',
  ];

  constructor(private sharedService: SharedService, private router: Router) {
    this.selectedLang = this.sharedService.getDefaultLanguage();
    this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.issueFixed_BookAComplaint));
  }

  ngOnInit(): void {
    this.sharedService.setHeaderConfig('HEADER.UNABLE_TO_CONNECT_NEW_DEVICE_WIFI', true);
  }

  routeLinkHelper(arr) {
    return arr.map((obj) => {
      return {
        ...obj,
        clickListener: () => {
          this.router.navigate([obj.linkTo]);
        },
      };
    });
  }
}
