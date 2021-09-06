import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerJourneyConstants } from '../../constants/CustomerJourneyConstants';
import { IButton } from '../../constants/types';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-device-connected-homezone',
  templateUrl: './device-connected-homezone.component.html',
  styleUrls: ['./device-connected-homezone.component.css'],
})
export class DeviceConnectedHomezoneComponent implements OnInit {
  buttonsConfig: IButton[] = [];

  constructor(private router: Router, public sharedService: SharedService) {
    this.sharedService.setHeaderConfig('', true);
    this.buttonsConfig = this.routeLinkHelper(CustomerJourneyConstants.deviceConnectedHomezoneButtonConfig);
  }

  ngOnInit() {}

  routeLinkHelper(arr) {
    return arr.map((obj) => {
      return {
        ...obj,
        clickListener: () => {
          obj?.customListner ? this[obj.customListner]() : this.router.navigate([obj.linkTo]);
        },
      };
    });
  }
}
