import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { SharedService } from 'src/app/shared/shared.service';
import { FormGroup } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';
import { flowCodes, LoaderScriptsEnum } from 'src/app/shared/constants/constants';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'quick-reset-tv-box-packagetransfer',
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
export class QuickTvBoxPackageTransferComponent implements OnInit, OnDestroy {
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
        ListStbDetails?.forEach((element) => {
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
      ListStbDetails?.forEach((element) => {
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
    this.pageContent = 'MESSAGES.CHOOSE_THE_STB_YOU_WANT_TO_REBOOT';
  }

  headerConfig: IPageHeader = {
    pageTitle: 'MESSAGES.REBOOT_TV_BOX',
    showBackBtn: true,
  };

  button1Listener(_event) {
    
    this.formGroup = _event;

    const dataApi = {
      deviceType: 'STB', //  STB
      stbList: [this.formGroup.controls['radioButton'].value],
    };
   
    var scriptArray = this.sharedService.GetLoaderDataByID(LoaderScriptsEnum.I_WANT_TO_FACTORY_RESET_MY_TV_BOX);
    this.sharedService.setLoader(true,scriptArray);
    this.backendService.stbRebootQuickLinks(dataApi).subscribe((data: any) => {
      this.sharedService.setLoader(false);
      if (data?.result?.screenCode === flowCodes.QASTBR) {
        this.router.navigate(['/issues/tv/tvBox-restart-required-successfully']);
      } else {
        // if (data?.result?.screenCode === flowCodes.QASTBR1) {
        this.router.navigate(['/issues/tv/box-not-restarted-instructions']);
      }
    });
  }

  button2Listener() {
    this.router.navigate(['landing']);
  }
}
