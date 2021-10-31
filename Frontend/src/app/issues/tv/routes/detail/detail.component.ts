import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BackendService } from 'src/app/services/backend.service';
import { ETISALAT_DEFAULT_CONFIG, NetWorkDiagramIds } from 'src/app/shared/constants/constants';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { IOntDetail, IPageHeader, IStbDetail } from 'src/app/shared/constants/types';
import { EIssueFlow, IssueListDialog } from 'src/app/shared/dialogs/issue-list-dialog/issue-list-dialog.component';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-tv-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class TvDetailComponent implements OnInit {
  @Input()
  isPartialLoaded: boolean = false;
  modal;
  devices;
  etisalatConfig = ETISALAT_DEFAULT_CONFIG;
  ontConfig: IOntDetail;
  networkDiagram = NetWorkDiagramIds.FiveLayer;
  connectedDevices: any = [];
  // cardList = [
  //   {
  //     header: 'STB SR#039838920',
  //     subHeader: 'MAC: ABC12345',
  //     list: ['Package 1', 'Package 2', 'Package 3'],
  //   },
  //   {
  //     header: 'STB SR#039838920',
  //     subHeader: 'MAC: ABC12345',
  //     list: ['Package 1', 'Package 2', 'Package 3'],
  //   },
  //   {
  //     header: 'STB SR#039838920',
  //     subHeader: 'MAC: ABC12345',
  //     list: ['Package 1', 'Package 2', 'Package 3'],
  //   },
  // ];
  cardList: any = [];
  eLifeStatus: string = 'Disabled';
  eLifegames = [
    { title: 'Call of Duty: Modern Warfare', imgSrc: 'assets/images/super-icons/icon_supericon_all_warning_warning_consumer_regular.svg' },
    { title: 'Dangerous driving 2018', imgSrc: 'assets/images/super-icons/icon_supericon_all_warning_warning_consumer_regular.svg' },
  ];

  constructor(
    private backendService: BackendService,
    private helperService: HelperService,
    public router: Router,
    private sharedService: SharedService,
    private modalCtrl: ModalController
  ) {}
  ngOnInit() {
    this.getIssueTilesData();

    const data = this.sharedService.getApiResponseData();
    this.eLifeStatus = data.result.responseData.elifeGameStatus;

    for (var index = 0; index < data?.result?.responseData?.sharedPackages?.length; index++) {
      for (var i = 0; i < this.connectedDevices.length; i++) {
        if (!this.connectedDevices[i]?.list) {
          this.connectedDevices[i].list = [];
        }
        this.connectedDevices[i].list.push(data?.result?.responseData?.sharedPackages[index]?.packageName);
      }
    }

    for (var index = 0; index < data.result.responseData.stbList.length; index++) {
      var selectedStb: any = this.connectedDevices.find((x) => x['sbSerialNumber'] == data?.result?.responseData?.stbList[index]?.stbSerialNumber);
      if (selectedStb != null) {
        for (var i = 0; i < data?.result?.responseData?.stbList[index]?.packages?.length; i++) {
          selectedStb.list.push(data?.result?.responseData?.stbList[index]?.packages[i]?.packageName);
        }
      }
    }

    if (!this.isPartialLoaded) {
      // this.sharedService.setHeaderConfig('TV details', false);
    }
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.TV_DETAILS',
    showBackBtn: true,
  };

  async openInternetIssueDialog() {
    this.modal = await this.modalCtrl.create({
      component: IssueListDialog,
      componentProps: {
        flow: EIssueFlow.tvIssue,
      },
    });
    return await this.modal.present();
  }

  onIssueResolved() {
    // this.router.navigate(['/thanks']);
    this.sharedService.setLoader(true);
    this.backendService.bookComplaint({ mobileNo: localStorage.getItem('CUS_MOBILE_NO'), remarks: '', ci7: false, issueResolved: true }).subscribe(() => {
      this.sharedService.setLoader(false);
      this.router.navigate(['/thanks']);
    });
  }

  getIssueTilesData() {
    const apiResponse = this.sharedService.getApiResponseDataNoIssuesSTB();
    const temp = this.helperService.networkDiagramStylingWrapperSTB(apiResponse?.ontDetails, apiResponse?.stbDetails);
    this.ontConfig = temp?.ontConfig;
    // this.routerConfig = temp?.stbConfig;
    // this.connectedDevices = this.helperService.connectedDeviceModifierSTB(apiResponse?.stbDetails);
    this.connectedDevices = temp?.stbConfig;
  }
}
