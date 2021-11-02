import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { ETISALAT_DEFAULT_CONFIG, NetWorkDiagramIds } from 'src/app/shared/constants/constants';
import { IMotiveButton, IOntDetail, IPageHeader, IRouterDetail, IStbDetail } from 'src/app/shared/constants/types';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-tvBox-not-reachable',
  template: `<app-diagnose-issue
    [networkDiagram]="networkDiagram"
    [stbSerialNumber]="stbSerialNumber"
    [etisalatConfig]="etisalatConfig"
    [ontConfig]="ontConfig"
    [connectedDevices]="connectedDevices"
    [headerConfig]="headerConfig"
    [messageSection]="messageSection"
    [button1]="button1"
    (button1Click)="button1Listener()"
    [button2]="button2"
    (button2Click)="button2Listener()"
  >
  </app-diagnose-issue>`,
})
export class TvBoxNotReachableComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messageSection;
  etisalatConfig = ETISALAT_DEFAULT_CONFIG;
  ontConfig: IOntDetail;
  networkDiagram = NetWorkDiagramIds.FiveLayer;
  connectedDevices;
  stbSerialNumber: string = '';
  button1: IMotiveButton = {
    title: 'BUTTONS.TRY_AGAIN',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.ISSUE_RESOLVED',
    type: 'link',
  };

  constructor(
    private router: Router,
    private helperService: HelperService,
    private sharedService: SharedService,
    private activatedRoute: ActivatedRoute,
    private backendService: BackendService
  ) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
      this.getIssueTilesData();
    });
    this.updatePageContent();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {
    if (this.sharedService.getTryAgainBoxNotReachableFlag() > 3) {
      this.button1.disable = true;
    }
    // this.sharedService.setHeaderConfig('MESSAGES.TV_ISSUES', false);
  }
  headerConfig: IPageHeader = {
    pageTitle: 'MESSAGES.TV_ISSUES',
    showBackBtn: true,
  };

  updatePageContent() {
    const apiResponse = this.sharedService.getApiResponseData();

    apiResponse?.stbDetails.forEach((element) => {
      if (!element.isReachable) {
        this.stbSerialNumber = this.stbSerialNumber + element?.stbSerialNumber + ',';
      }
    });
    this.messageSection = CustomerJourneyConstants.tvBoxNotReachableMessageSection;
  }

  button1Listener() {
    this.sharedService.setLoader(true);
    this.backendService.bookComplaint({ mobileNo: localStorage.getItem('CUS_MOBILE_NO'), remarks: '', ci7: true }).subscribe(() => {
      this.sharedService.setTryAgainBoxNotReachableFlag(); ///for try again button 3 times
      this.backendService.getIssueDiagnositic('IPTV').subscribe((data) => {
        this.sharedService.setLoader(false);
        this.helperService.IptvFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
      });
    });
    // this.router.navigate(['/issues/tv/box-not-reachable-try-again']);
  }

  button2Listener() {
    this.router.navigate(['/thanks']);
  }
  getIssueTilesData() {
    const apiResponse = this.sharedService.getApiResponseData();
    const temp = this.helperService.networkDiagramStylingWrapperSTB(apiResponse?.ontDetails, apiResponse?.stbDetails);
    this.ontConfig = temp?.ontConfig;
    // this.routerConfig = temp?.stbConfig;
    this.connectedDevices = temp?.stbConfig;
  }
}
