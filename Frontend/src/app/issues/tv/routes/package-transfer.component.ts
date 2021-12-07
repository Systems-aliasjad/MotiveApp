import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';
import { flowCodes } from 'src/app/shared/constants/constants';

@Component({
  selector: 'package-transfer',
  template: `<app-transfer-package
    [headerConfig]="headerConfig"
    [pageContent]="pageContent"
    [cardList]="cardList"
    [button1]="button1"
    (button1Click)="button1Listener($event)"
    [button2]="button2"
    (button2Click)="button2Listener()"
  ></app-transfer-package>`,
})
export class PackageTransferComponent implements OnInit, OnDestroy {
  pageContent: string;
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.CONFIRM_TRANSFER',
    explanatoryNote: '',
  };

  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.CLOSE',
    explanatoryNote: '',
  };
  selectedCard;
  filteredList: any = [];
  cardList: any[] = [
    // {
    //   title: 'STB SR#039838920',
    //   description: 'MAC abcd@1234',
    //   checked: true,
    // },
    // {
    //   title: 'STB SR#039838931',
    //   description: 'MAC abcd@567',
    //   checked: false,
    // },
    // {
    //   title: 'STB SR#039838920',
    //   description: 'MAC abcd@789',
    //   checked: false,
    // },
  ];
  formGroup: FormGroup;
  subscription: Subscription;
  constructor(
    private backendService: BackendService,
    private sharedService: SharedService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
      const navigation = this.router.getCurrentNavigation();
      this.selectedCard = navigation?.extras?.state?.selectedCard;
      var apiResponse = this.sharedService.getApiResponseData();

      var ListStbDetails: any[] = apiResponse?.result?.responseData;
      var listFinal = ListStbDetails.filter((x) => x.stbSerialNumber != this.selectedCard.ID);
      // listFinal?.forEach((element) => {
      //   element?.packages?.forEach((packages) => {
      //     var index = {
      //       title: 'STB SR#' + element?.stbSerialNumber,
      //       description: packages?.packageName,
      //       ID: element?.stbSerialNumber,
      //       PackageID: packages?.packageId,
      //     };

      //     this.filteredList.push(index);

      //   });
      // });

      listFinal?.forEach((element) => {
        var index = {
          title: 'STB SR#' + element?.stbSerialNumber,
          // description: element?.stbSerialNumber,
          ID: element?.stbSerialNumber,
        };

        this.filteredList.push(index);
      });

      this.cardList = this.filteredList;

      // this.cardList = this.filteredList.filter((x) => x.ID != this.selectedCard.ID);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {
    // this.sharedService.setHeaderConfig('HEADER.TRANSFER_PACKAGE', false, true);
    this.pageContent = 'MESSAGES.CHOOSE_THE_TV_BOX_YOUD_LIKE_TO_TRANSFER_THE_PACKAGE_TO';
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.TRANSFER_PACKAGE',
    showBackBtn: true,
  };

  button1Listener(_event) {
    this.formGroup = _event;
    var data = {
      sourceSTB: this.selectedCard.ID, ///Soruce STB
      destSTB: this.formGroup.controls['radioButton'].value, ///Selected STB
      pkgID: this.selectedCard.PackageID, ////Soure Sellected Package
    };

    if (this.sharedService.getQuickLinksData()) {
      this.sharedService.setLoader(true, 'MESSAGES.PACKAGE_TRANSFER_IN_PROGRESS');
      this.backendService.transferPackageNextStep(data).subscribe((data: any) => {
        this.sharedService.setLoader(false);
        if (data?.result?.screenCode === flowCodes.QAIPTVPT) {
          this.router.navigate(['issues/tv/package-transfer-success']);
        } else {
          //if (data?.result?.screenCode === flowCodes.QAIPTVPT1) {
          this.router.navigate(['/unknown-error']);
        }
      });
    } else {
      this.sharedService.setLoader(true, 'MESSAGES.PACKAGE_TRANSFER_IN_PROGRESS');
      this.backendService.transferPackageNextStep(data).subscribe((data: any) => {
        this.sharedService.setLoader(false);
        if (data?.result?.screenCode === flowCodes.QAIPTVPT) {
          this.router.navigate(['issues/tv/package-transfer-success']);
        } else if (data?.result?.screenCode === flowCodes.QAIPTVPT1) {
          //  this.sharedService.setLoader(true);
          this.backendService.bookComplaint({ mobileNo: this.sharedService.getLocalStorage('CUS_MOBILE_NO'), remarks: '', ci7: false, issueResolved: false }).subscribe(() => {
            //    this.sharedService.setLoader(false);
          });
          this.router.navigate(['/unknown-error']);
          // this.router.navigate(['/unknown-error']);
        }
      });
    }

    //this.router.navigate(['issues/tv/package-transfer-success']);
  }

  button2Listener() {
    if (this.sharedService.getQuickLinksData()) {
      this.router.navigate(['landing']);
    } else {
      // this.sharedService.setLoader(true);
      this.backendService.bookComplaint({ mobileNo: this.sharedService.getLocalStorage('CUS_MOBILE_NO'), remarks: '', ci7: false, issueResolved: false }).subscribe(() => {
        //  this.sharedService.setLoader(false);
      });
      this.router.navigate(['thanks']);
    }
  }
}
