import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ERoutingIds } from '../../constants/constants';
import { CustomerJourneyConstants } from '../../constants/CustomerJourneyConstants';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-package-available',
  templateUrl: './package-available.component.html',
  styleUrls: ['./package-available.component.css'],
})
export class PackageAvailableComponent implements OnInit {
  codeType: any;
  PageTitle: string = 'HEADER.AVAILABLE_PACKAGE';
  PageContent: string = 'AVAILABLE_PACKAGE.DESCRIPTION';
  cardList: any[] = [
    {
      title: 'Movies Unlimited Premium',
      description: 'STB SR#039838920',
    },
    {
      title: 'Bein Sports',
      description: 'STB SR#039838920',
      checked: false,
    },
    {
      title: 'Pehla Plus',
      description: 'STB SR#039838920',
    },
  ];
  constructor(private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((data) => {
      this.codeType = data.id;
      this.initialization();
    });
  }

  ngOnInit() {}

  initialization() {
    this.sharedService.setDefaultValues();
    if (this.codeType === ERoutingIds.packageavailable) {
      this.PageTitle = 'HEADER.AVAILABLE_PACKAGE';
      this.PageContent = 'AVAILABLE_PACKAGE.DESCRIPTION';
      this.sharedService.setHeaderConfig(this.PageTitle, false, true);
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.packageAvailableButtons));
    }
  }

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

  goToTransferPackage(item) {
    this.router.navigate(['/package-transfer']);
  }
}
