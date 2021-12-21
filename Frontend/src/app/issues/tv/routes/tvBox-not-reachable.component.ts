import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { ETISALAT_DEFAULT_CONFIG, LoaderScriptsEnum, NetWorkDiagramIds } from 'src/app/shared/constants/constants';
import { IMotiveButton, IOntDetail, IPageHeader, IRouterDetail, IStbDetail } from 'src/app/shared/constants/types';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-tvBox-not-reachable',
  template: `<app-diagnose-issue
    [networkDiagram]="networkDiagram"
    [stbSerialNumber]="stbSerialNumber"
    [iptvPortNumbers]="iptvPortNumbers"
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
  iptvPortNumbers: string = '';
  button1: IMotiveButton = {
    title: 'BUTTONS.TRY_AGAIN',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.ISSUE_RESOLVED',
    type: 'link',
  };
  Ci9Flag;
  otherFlow = false;

  constructor(
    private router: Router,
    private helperService: HelperService,
    private sharedService: SharedService,
    private activatedRoute: ActivatedRoute,
    private backendService: BackendService
  ) {}

  ngOnInit() {
    this.Ci9Flag = this.router.getCurrentNavigation()?.extras?.state?.Ci9Flag;
    this.otherFlow = this.router.getCurrentNavigation()?.extras?.state?.otherFlow;
    if(this.otherFlow === undefined){
      this.otherFlow = false
    }
    if(this?.Ci9Flag){
      this.button1.title = 'BUTTONS.CONTINUE';
    } else {
      this.button1.title = 'BUTTONS.TRY_AGAIN';
    }
    this.networkDiagram = this.otherFlow ? NetWorkDiagramIds.sixLayer : NetWorkDiagramIds.FiveLayer;
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
    this.iptvPortNumbers = apiResponse?.iptvPortNumbers
    apiResponse?.stbDetails.forEach((element) => {
      if (!element.isReachable) {
        this.stbSerialNumber = this.stbSerialNumber + element?.stbSerialNumber + ',';
      }
    });
    this.messageSection = CustomerJourneyConstants.tvBoxNotReachableMessageSection;
  }

  button1Listener() {
    if (this?.Ci9Flag) {
      const data = this.sharedService.getApiResponseData();
      if (data.stbDetails.length > 0) {
        data.stbDetails.forEach(element => {
          element.isReachable = true;
        });
      }
      if(this?.otherFlow){
        this.helperService.otherFlowIdentifier('CI9', data);
      } else {
        this.helperService.IptvFlowIdentifier('CI9', data);
      }
    } else {
      var scriptArray = this.sharedService.GetLoaderDataByID(LoaderScriptsEnum.STB_NOT_REACHABLE);
      this.sharedService.setLoader(true, scriptArray);
      this.backendService.nextSignal('next').subscribe((data) => {
        this.sharedService.setLoader(false);
        if(this?.otherFlow){
          this.helperService.otherFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
        } else {
        this.helperService.IptvFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
        }
      })
    }
    // this.backendService.bookComplaint({ mobileNo: this.sharedService.getLocalStorage('CUS_MOBILE_NO'), remarks: '', issueResolved: false }).subscribe(() => {
    //   this.sharedService.setTryAgainBoxNotReachableFlag(); ///for try again button 3 times
    //   this.backendService.getIssueDiagnositic('IPTV').subscribe((data) => {
    //     this.sharedService.setLoader(false);
    //     this.helperService.IptvFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
    //   });
    // });
    // this.router.navigate(['/issues/tv/box-not-reachable-try-again']);
  }

  button2Listener() {
    this.sharedService.TicketCloseAPICallWithURL('thanks');
   // this.router.navigate(['/thanks']);
  }
  getIssueTilesData() {
    const apiResponse = this.sharedService.getApiResponseData();
    if(this?.otherFlow) {
      const temp = this.helperService.networkDiagramStylingWrapper(apiResponse?.ontDetails, apiResponse?.routerDetails);
      const routerConfig = temp?.routerConfig;
      this.ontConfig = temp?.ontConfig;
      const stbTemp = this.helperService.networkDiagramStylingWrapperSTB(apiResponse?.ontDetails, apiResponse?.stbDetails);
      this.connectedDevices = stbTemp?.stbConfig;
      if (this.connectedDevices) {
        this.connectedDevices = [{ ...routerConfig }, ...this.connectedDevices];
      } else {
        this.connectedDevices = [{ ...routerConfig }];
      }
    } else {
      const temp = this.helperService.networkDiagramStylingWrapperSTB(apiResponse?.ontDetails, apiResponse?.stbDetails);
      this.ontConfig = temp?.ontConfig;
      // this.routerConfig = temp?.stbConfig;
      this.connectedDevices = temp?.stbConfig;
    }
  }
}
