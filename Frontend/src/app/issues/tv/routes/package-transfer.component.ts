import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';

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
      var ListStbDetails = apiResponse?.responseData;

      ListStbDetails.forEach((element) => {
        var index = {
          title: element?.packageName,
          description: element?.serialNo,
        };

        if (this.filteredList.length === 0) {
          this.filteredList.push(index);
        } else {
          var alreadyAdded = this.filteredList.find((x) => x.title == index.title && x.description == index.description);
          if (alreadyAdded.length === 0) {
            this.filteredList.push(index);
          }
        }
      });

      this.cardList = this.filteredList.filter((x) => x.title != this.selectedCard.title && x.description != this.selectedCard.description);
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
      sourceSTB: this.selectedCard.description,
      destSTB: this.formGroup.controls['radioButton'].value,
      pkgID: this.selectedCard.description,
      signal: 'next',
    };

    this.backendService.transferPackage(data).subscribe((data: any) => {
      this.sharedService.setLoader(false);
      if (data?.code === 200) {
        this.router.navigate(['issues/tv/package-transfer-success']);
      } else {
        this.router.navigate(['/unknown-error']);
      }
    });

    //this.router.navigate(['issues/tv/package-transfer-success']);
  }

  button2Listener() {
    this.sharedService.setLoader(true);
    this.backendService.bookComplaint({ mobileNo: localStorage.getItem('CUS_MOBILE_NO'), remarks: '', ci7: true }).subscribe(() => {
      this.sharedService.setLoader(false);
      this.router.navigate(['/thanks']);
    });
  }
}
