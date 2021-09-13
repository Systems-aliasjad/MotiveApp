import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ERoutingIds } from '../../constants/constants';
import { CustomerJourneyConstants } from '../../constants/CustomerJourneyConstants';
import { IButton } from '../../constants/types';
import { SharedService } from '../../shared.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-package-available',
  templateUrl: './package-available.component.html',
  styleUrls: ['./package-available.component.css'],
})
export class PackageAvailableComponent implements OnInit, OnDestroy {
  codeType: any;
  PageTitle: string;
  PageContent: string;
  cardList: any;
  subscription: Subscription;
  buttonConfigs: IButton[] = [];
  constructor(private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute, private location: Location) {
    this.subscription = this.activatedRoute.data.subscribe((data) => {
      this.codeType = data.id;
      this.initialization();
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {}

  initialization() {
    this.sharedService.setDefaultValues();

    if (this.codeType === ERoutingIds.packageavailable) {
      this.PageTitle = 'HEADER.AVAILABLE_PACKAGE';
      this.PageContent = 'AVAILABLE_PACKAGE.DESCRIPTION';
      this.sharedService.setHeaderConfig(this.PageTitle, false, true);
      this.cardList = [
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
      this.buttonConfigs = CustomerJourneyConstants.packageAvailableButtons;
      this.buttonConfigs.forEach((elem) => {
        if (elem.title == 'BUTTONS.SKIP_TO_NEXT_STEP') {
          elem.linkTo = '/package-transfer';
        }
      });
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.packageAvailableButtons));
    }
    /// Unable to watch specific channel package available
    else if (this.codeType === ERoutingIds.enableWatchSpecificChannelpackageavailable) {
      this.PageTitle = 'HEADER.CHANNEL_DETAILS';
      this.PageContent = 'AVAILABLE_PACKAGE.DESCRIPTION_UNABLE_WATCH_SPECIFIC_CHANNEL';
      this.sharedService.setHeaderConfig(this.PageTitle, false, true);
      this.cardList = [
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
      this.sharedService.setButtonConfig(this.routeLinkHelper(CustomerJourneyConstants.packageAvailableButtonsUnableWatchSpecific));
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
    if (this.codeType === ERoutingIds.packageavailable) {
      this.router.navigate(['/package-transfer']);
    } else if (this.codeType === ERoutingIds.enableWatchSpecificChannelpackageavailable) {
      this.router.navigate(['/unable-to-watch-package-transfer']);
    }
  }

  cancelBackLocationLink() {
    this.location.back();
  }
}
