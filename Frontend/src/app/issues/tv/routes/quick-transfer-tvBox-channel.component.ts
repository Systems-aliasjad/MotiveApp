import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { flowCodes } from 'src/app/shared/constants/constants';
import { IPageHeader } from 'src/app/shared/constants/types';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'quick-transfer-tvBox-channel',
  template: `<app-package-available
    [headerConfig]="headerConfig"
    [subHeader]="subHeader"
    [packages]="packages"
    (button1Click)="(button1Listener)"
    (button2Click)="(button2Listener)"
    (cardClicked)="getCardClickedValue($event)"
  ></app-package-available>`,
})
export class QuickTransferTvboxChannelComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  subHeader;
  quickLinkNextSignal;
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

    if (this.sharedService.getQuickLinksData()) {
      let apiResponse = this.sharedService.getApiResponseData();
      var packagesResponse: any[] = apiResponse?.stbList;
      if (packagesResponse.length === 1) {
        this.router.navigate(['issues/tv/single-stb-found']);
      } else {
        packagesResponse.forEach((element) => {
          element?.packages.forEach((packages) => {
            var index = {
              title: packages?.packageName,
              description: 'STB SR#' + element?.stbSerialNumber,
              ID: element?.stbSerialNumber,
              PackageID: packages?.packageId,
            };

            if (this.packages.length === 0) {
              this.packages.push(index);
            } else {
              var alreadyAdded = this.packages.find((x) => x.title == index.title && x.ID == index.ID);
              if (alreadyAdded === undefined) {
                this.packages.push(index);
              }
            }
          });
        });
      }
    }

    ///ToDO Uncomment this

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

    // var data = {
    //   code: 200,

    //   message: 'success',

    //   result: {
    //     screenCode: 'QA-IPTV-PT3',

    //     statusMessage: 'Stb Detailed View',

    //     responseData: [
    //       {
    //         serialNo: 'SSID1',

    //         packageId: 'laksjld1',

    //         packageName: 'SSID1',

    //         channels: ['defdssa', 'defdssa'],
    //       },

    //       {
    //         serialNo: 'SSID2',

    //         packageId: 'laksjld2',

    //         packageName: 'SSID2',

    //         channels: ['defdssa', 'defdssa'],
    //       },
    //       {
    //         serialNo: 'SSID3',

    //         packageId: 'laksjld3',

    //         packageName: 'SSID3',

    //         channels: ['defdssa', 'defdssa'],
    //       },
    //     ],
    //   },
    // };
    // this.sharedService.setApiResponseData(data);
    // var response = this.sharedService.getApiResponseData();
    // var packagesResponse = response?.result?.responseData;
    // packagesResponse.forEach((element) => {
    //   var index = {
    //     title: element?.packageName,
    //     description: 'STB SR#' + element?.serialNo,
    //     ID: element?.serialNo,
    //     PackageID: element?.packageId,
    //   };

    //   if (this.packages.length === 0) {
    //     this.packages.push(index);
    //   } else {
    //     var alreadyAdded = this.packages.find((x) => x.title == index.title && x.ID == index.ID);
    //     if (alreadyAdded === undefined) {
    //       this.packages.push(index);
    //     }
    //   }
    // });

    // var data2 = {
    //   code: 200,

    //   message: 'success',

    //   result: {
    //     screenCode: 'QA-IPTV-PT3',

    //     statusMessage: 'Stb Detailed View',

    //     responseData: [
    //       {
    //         stbSerialNumber: '1111111',

    //         packages: [
    //           {
    //             packageId: '1111111',

    //             packageName: 'TTYG H1111111',

    //             channels: ['qwq', '324e'],
    //           },

    //           {
    //             packageId: '111111122222222',

    //             packageName: 'TTYG H111111232222222',

    //             channels: ['qwq', '324e'],
    //           },
    //         ],
    //       },

    //       {
    //         stbSerialNumber: '222222',

    //         packages: [
    //           {
    //             packageId: '2222222111111',

    //             packageName: 'TTYG H222221111',

    //             channels: ['qwq', '324e'],
    //           },

    //           {
    //             packageId: '2222222222',

    //             packageName: 'TTYG H22222222222',

    //             channels: ['qwq', '324e'],
    //           },
    //         ],
    //       },
    //       {
    //         stbSerialNumber: '3333333333333',

    //         packages: [
    //           {
    //             packageId: '33333333331111111',

    //             packageName: 'TTYG 333333331111111',

    //             channels: ['qwq', '324e'],
    //           },

    //           {
    //             packageId: '333333333332222222',

    //             packageName: 'TTYG 333333322222222',

    //             channels: ['qwq', '324e'],
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // };

    // this.sharedService.setApiResponseData(data2);
    // var packagesResponse: any[] = data2?.result?.responseData;
    // packagesResponse.forEach((element) => {
    //   element?.packages.forEach((packages) => {
    //     var index = {
    //       title: packages?.packageName,
    //       description: 'STB SR#' + element?.stbSerialNumber,
    //       ID: element?.stbSerialNumber,
    //       PackageID: packages?.packageId,
    //     };

    //     if (this.packages.length === 0) {
    //       this.packages.push(index);
    //     } else {
    //       var alreadyAdded = this.packages.find((x) => x.title == index.title && x.ID == index.ID);
    //       if (alreadyAdded === undefined) {
    //         this.packages.push(index);
    //       }
    //     }
    //   });
    // });
  }

  button1Listener() {
    // SKIP_TO_NEXT_STEP
  }

  button2Listener() {
    this.backendService.bookComplaint({ mobileNo: localStorage.getItem('CUS_MOBILE_NO'), remarks: '', ci7: true }).subscribe(() => {});
    this.router.navigate(['/thanks']);
  }

  getCardClickedValue(card) {
    this.router.navigate(['issues/tv/package-transfer'], { state: { selectedCard: card } });
  }
}
