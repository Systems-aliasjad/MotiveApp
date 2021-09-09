import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerJourneyConstants } from '../../constants/CustomerJourneyConstants';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-package-available',
  templateUrl: './package-available.component.html',
  styleUrls: ['./package-available.component.css'],
})
export class PackageAvailableComponent implements OnInit {
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
    this.activatedRoute.params.subscribe((parms) => {
      this.initialization();
    });
  }

  ngOnInit() {}

  initialization() {
    this.sharedService.setDefaultValues();
    this.sharedService.setHeaderConfig(this.PageTitle, false, true);
    this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.packageAvailableButtons));
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
