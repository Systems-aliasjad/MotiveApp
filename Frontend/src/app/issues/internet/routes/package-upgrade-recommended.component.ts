import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { ETISALAT_DEFAULT_CONFIG, LoaderScriptsEnum, networkDiagramClasses, NetWorkDiagramIds, ONT, ROUTER, SVGs, TsOutcome } from 'src/app/shared/constants/constants';
import { IMotiveButton, IOntDetail, IPageHeader, IRouterDetail } from 'src/app/shared/constants/types';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-package-upgrade-recommended',
  template: `<app-diagnose-issue
    [networkDiagram]="networkDiagram"
    [ontConfig]="ontConfig"
    [etisalatConfig]="etisalatConfig"
    [routerConfig]="routerConfig"
    [connectedDevices]="connectedDevices"
    [headerConfig]="headerConfig"
    [messageSection]="messageSection"
    [button1]="button1"
    (button1Click)="button1Listener()"
    [button2]="button2"
    (button2Click)="button2Listener()"
    [button3]="button3"
    (button3Click)="button3Listener()"
  >
  </app-diagnose-issue>`,
})
export class PackageUpgradeRecommendedComponent implements OnInit, OnDestroy {
  etisalatConfig = ETISALAT_DEFAULT_CONFIG;
  ontConfig: IOntDetail = { url: SVGs.ont.default, className: networkDiagramClasses.okay, title: ONT };
  routerConfig: IRouterDetail = { url: SVGs.router.default, className: networkDiagramClasses.okay, title: ROUTER };
  connectedDevices;
  subscription: Subscription;
  networkDiagram = NetWorkDiagramIds.SevenLayer;
  messageSection;
  button1: IMotiveButton = {
    title: 'BUTTONS.ISSUE_FIXED',
    type: 'link',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.UPGRADE_PACKAGE',
    type: 'primary',
  };
  button3: IMotiveButton = {
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
    type: 'link',
  };

  button4: IMotiveButton = {
    title: 'BUTTONS.RESET_ROUTER',
    type: 'primary',
  };

  constructor(
    private helperService: HelperService,
    private sharedService: SharedService,
    private router: Router,
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

      var apiInternetGenericResponse = this.sharedService.getInternetGenericResponse();
    if(apiInternetGenericResponse?.routerDetails?.routerModel){
       this.routerConfig.url= this.sharedService.DynamicSetRouterImages(apiInternetGenericResponse?.routerDetails?.routerModel);
    }
    // this.sharedService.setHeaderConfig('MESSAGES.INTERNET_ISSUES', false);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'MESSAGES.INTERNET_ISSUES',
    showBackBtn: true,
  };

  updatePageContent() {

    if(this.sharedService.GetTsOutCome()===TsOutcome.IssueFoundAndFixed){
      this.messageSection = CustomerJourneyConstants.packageUpdradeRecomendedMessageSection;
      this.messageSection.header='MESSAGES.ISSUE_FIXED_SUCCESSFULLY';
      this.messageSection.body[0].title='MESSAGES.WE_HAVE_FIXED_THE_TECHNICAL_ISSUES';
    }
    else{
       this.messageSection = CustomerJourneyConstants.packageUpdradeRecomendedMessageSection;
    }

    // this.messageSection = CustomerJourneyConstants.packageUpdradeRecomendedMessageSection;
  }

  button1Listener() {
    this.sharedService.TicketCloseAPICallWithURL('thanks');
  }

  button2Listener() {
    if (this.sharedService.checkIfMobileDevice()) {
      //true if mobile device
      window.location.href = 'https://etisalatmobileapp.page.link/addons';
    } else {
      // false if not a mobile device
      if (this.sharedService.getDefaultLanguage() === 'ara') {
        window.location.href =
          'https://www.etisalat.ae/b2c/eshop/viewProducts?category=homeAddons&subCategory=cat550030&catName=TV_add-on&listVal=TV_add-on&filtersParam=N%3D1303117285%2B2026559889%26Nr%3Dproduct.language%253Aen-AE&locale=AR';
      } else {
        window.location.href =
          'https://www.etisalat.ae/b2c/eshop/viewProducts?category=homeAddons&subCategory=cat550030&catName=TV_add-on&listVal=TV_add-on&filtersParam=N%3D1303117285%2B2026559889%26Nr%3Dproduct.language%253Aen-AE';
      }
    }
    // this.router.navigate(['/issues/internet/package-upgrade-recommended-form']);
  }

  button3Listener() {
    var scriptArray = this.sharedService.GetLoaderDataByID(LoaderScriptsEnum.INTERNET_SERVICE_DETAIL);
    this.sharedService.setLoader(true,scriptArray);
    this.backendService.getIssueDiagnositic('continue').subscribe((res) => {
      this.sharedService.setApiResponseData({
        hsiUploadDownload: [res?.result?.responseData?.upstream, res?.result?.responseData?.downstream],
        connectedDevices: res?.result?.responseData?.connectedDevices,
        noOfConnectedDevices: res?.result?.responseData?.noOfConnectedDevices,
        internetCallingPlan: res?.result?.responseData?.internetCallingPlan,
        internetConnectionStatus: res?.result?.responseData?.internetConnectionStatus,
        speedTestResult: res?.result?.responseData?.speedTestResult,
        dataTraffic: res?.result?.responseData?.dataTraffic,
      });
      this.sharedService.setLoader(false);
      this.router.navigate(['issues/internet/service-detail']);
    });
    // this.router.navigate(['/issues/internet/no-issue']);
  }

  button4Listener() {
    this.sharedService.setLoader(true);
    this.backendService.nextSignal('MandatoryOnly').subscribe((data: any) => {
      this.sharedService.setLoader(false);
      this.sharedService.SetTsOutCome(data?.result?.responseData?.tsOutcome??'');
      this.helperService.InternetFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
    });
  }

  getIssueTilesData() {
    const apiResponse = this.sharedService.getApiResponseData();
    this.connectedDevices = this.helperService.connectedDeviceModifier(apiResponse?.connectedDevices);
  }
}
