import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { IPageHeader } from 'src/app/shared/constants/types';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'transfer-tvBox-channel',
  template: `<app-package-available
    [headerConfig]="headerConfig"
    [subHeader]="subHeader"
    [packages]="packages"
    (button1Click)="(button1Listener)"
    (button2Click)="(button2Listener)"
    (cardClicked)="getCardClickedValue($event)"
  ></app-package-available>`,
})
export class TransferTvboxChannelComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  subHeader;
  packages: any = [];
  constructor(private backendService: BackendService, private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
    });
    this.updatePageContent();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {
    //  this.sharedService.setHeaderConfig('HEADER.AVAILABLE_PACKAGES', false, true);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.AVAILABLE_PACKAGES',
    showBackBtn: true,
  };

  updatePageContent() {
    this.subHeader = 'SUBHEADER.CHOOSE_THE_PLAN_PACKAGE_YOU_LIKE_TO_TRANSFER_TO_ANOTHER_TV_BOX';
    // this.packages = [
    //   {
    //     title: 'Movies Unlimited Premium',
    //     description: 'STB SR#039838920',
    //   },
    //   {
    //     title: 'Bein Sports',
    //     description: 'STB SR#039838920',
    //     checked: false,
    //   },
    //   {
    //     title: 'Pehla Plus',
    //     description: 'STB SR#039838920',
    //   },
    // ];

    this.sharedService.setLoader(true);
    this.backendService.stbDetails().subscribe((data: any) => {
      this.sharedService.setLoader(false);
      this.sharedService.setApiResponseData(data);
      var packagesResponse = data?.responseData;

      packagesResponse.forEach((element) => {
        var index = {
          title: element?.packageName,
          description: element?.serialNo,
        };

        if (this.packages.length === 0) {
          this.packages.push(index);
        } else {
          var alreadyAdded = this.packages.find((x) => x.title == index.title && x.description == index.description);
          if (alreadyAdded.length === 0) {
            this.packages.push(index);
          }
        }
      });
    });
  }

  button1Listener() {
    // SKIP_TO_NEXT_STEP
  }

  button2Listener() {
    //  CANCEL
  }

  getCardClickedValue(card) {
    this.router.navigate(['issues/tv/package-transfer'], { state: { selectedCard: card } });
    //this.router.navigate(['issues/tv/package-transfer']);
  }
}
