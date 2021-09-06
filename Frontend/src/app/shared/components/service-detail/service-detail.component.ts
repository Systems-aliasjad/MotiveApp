import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerJourneyConstants } from '../../constants/CustomerJourneyConstants';
import { IButton } from '../../constants/types';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css'],
})
export class ServiceDetailComponent implements OnInit {
  buttonsConfig: IButton[] = [];
  cardList: any[] = [
    {
      heading: 'UNNAMED PHONE',
      IP: '192.168.1.125',
    },
    {
      heading: 'UNNAMED COMPUTER',
      IP: '192.168.1.125',
    },
    {
      heading: 'UNNAMED SMART WATCH',
      IP: '192.168.1.125',
    },
    {
      heading: 'UNNAMED TABLET',
      IP: '192.168.1.125',
    },
    {
      heading: 'UNNAMED PHONE',
      IP: '192.168.1.125',
    },
  ];
  constructor(private sharedService: SharedService, private router: Router) {
    this.sharedService.setHeaderConfig('', true);
    this.buttonsConfig = this.routeLinkHelper(CustomerJourneyConstants.serviceDetailsButtonConfig);
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
