import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerJourneyConstants } from '../../constants/CustomerJourneyConstants';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-device-connected-homezone',
  templateUrl: './device-connected-homezone.component.html',
  styleUrls: ['./device-connected-homezone.component.css'],
})
export class DeviceConnectedHomezoneComponent implements OnInit {
  constructor(private router: Router, public sharedService: SharedService) {
    this.sharedService.setHeaderConfig('', true);
    this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.deviceConnectedHomezoneButtonConfig));
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
