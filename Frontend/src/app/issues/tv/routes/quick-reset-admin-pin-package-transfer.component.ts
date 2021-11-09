import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { FormGroup } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';
import { flowCodes } from 'src/app/shared/constants/constants';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'quick-reset-admin-pin-packagetransfer',
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
export class QuickResetAdminPinPackageTransferComponent implements OnInit, OnDestroy {
  pageContent: string;
  button1: IMotiveButton = {
    type: 'primary',
    title: 'BUTTONS.CONTINUE',
    explanatoryNote: '',
  };

  button2: IMotiveButton = {
    type: 'link',
    title: 'BUTTONS.CLOSE',
    explanatoryNote: '',
  };
  selectedCard;
  cardList: any[] = [];
  formGroup: FormGroup;

  constructor(
    private modalCtr: ModalController,
    private backendService: BackendService,
    private sharedService: SharedService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.updateHeader();
    if (!this.sharedService.getQuickLinksData()) {
      try {
        this.modalCtr.dismiss();
      } catch (ex) {}
      this.sharedService.setLoader(true);
      this.backendService.quickActionsInitialData().subscribe((res) => {
        this.sharedService.setLoader(false);
        this.sharedService.setQuickLinksData(res?.result?.responseData);
        let apiResponse = this.sharedService.setApiResponseData(res?.result?.responseData);
        var ListStbDetails = res?.result?.responseData?.stbList;
        ListStbDetails.forEach((element) => {
          var index = {
            title: 'STB SR#' + element?.stbSerialNumber,
            description: 'MAC ' + element?.stbMac,
            ID: element?.stbSerialNumber,
          };
          this.cardList.push(index);
          console.log(index);
        });
      });
    } else {
      let apiResponse = this.sharedService.getApiResponseData();
      var ListStbDetails = apiResponse?.stbList;
      ListStbDetails.forEach((element) => {
        var index = {
          title: 'STB SR#' + element?.stbSerialNumber,
          description: 'MAC ' + element?.stbMac,
          ID: element?.stbSerialNumber,
        };
        this.cardList.push(index);
        console.log(index);
      });
    }
  }

  ngOnDestroy(): void {}

  updateHeader() {
    // this.sharedService.setHeaderConfig('HEADER.TRANSFER_PACKAGE', false, true);
    this.pageContent = 'MESSAGES.CHOOSE_THE_STB_YOU_WANT_TO_RESET';
  }

  headerConfig: IPageHeader = {
    pageTitle: 'MESSAGES.RESET_STB_PIN',
    showBackBtn: true,
  };

  button1Listener(_event) {
    // 130857101318;
    // console.log('evet', _event);
    this.formGroup = _event;
    const data = this.formGroup.controls['radioButton'].value;

    // debugger;
    //For api testing
    //const data = '130857101318';

    this.sharedService.setLoader(true);
    this.backendService.stbAdminPinResetQuickLinks(data).subscribe((data: any) => {
      this.sharedService.setLoader(false);
      if (
        data?.result?.screenCode === flowCodes.QAIPTVPIN ||
        data?.result?.screenCode === flowCodes.QAIPTVPIN3 ||
        data?.result?.screenCode === flowCodes.QAIPTVPIN4 ||
        data?.result?.screenCode === flowCodes.QAIPTVPIN5 ||
        data?.result?.screenCode === flowCodes.QAIPTVPIN6
      ) {
        // this.router.navigate(['issues/tv/quick-tv-admin-pin-reset-success']);

        this.router.navigate(['/issues/tv/quick-tv-admin-pin-reset-success'], { state: { screenCode: data?.result?.screenCode } });
      } else {
        // if (data?.result?.screenCode === flowCodes.QAIPTVPIN1) {
        this.router.navigate(['/issues/tv/error-occur-try-again-later']);
      }
    });
  }

  button2Listener() {
    this.router.navigate(['thanks']);
  }
}
