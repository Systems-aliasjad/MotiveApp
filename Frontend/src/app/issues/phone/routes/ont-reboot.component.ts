import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { ETISALAT_DEFAULT_CONFIG, LoaderScriptsEnum, networkDiagramClasses, NetWorkDiagramIds, ONT, PHONE, SVGs } from 'src/app/shared/constants/constants';
import { IMotiveButton, IOntDetail, IPageHeader, IRouterDetail } from 'src/app/shared/constants/types';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-phone-ont-reboot',
  template: `<app-diagnose-issue
    [networkDiagram]="networkDiagram"
    [ontConfig]="ontConfig"
    [etisalatConfig]="etisalatConfig"
    [routerConfig]="routerConfig"
    [headerConfig]="headerConfig"
    [messageSection]="messageSection"
    [button1]="button1"
    (button1Click)="button1Listener()"
    [button2]="button2"
    (button2Click)="button2Listener()"
  >
  </app-diagnose-issue>`,
})
export class OntRebootComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messageSection;
  networkDiagram = NetWorkDiagramIds.ThreeLayer;
  etisalatConfig = ETISALAT_DEFAULT_CONFIG;
  ontConfig: IOntDetail = { url: SVGs.ont.default, className: networkDiagramClasses.pending, title: ONT };
  routerConfig: IRouterDetail = { url: SVGs.phone.default, className: networkDiagramClasses.default, title: PHONE };
  button1: IMotiveButton = {
    title: 'BUTTONS.RESTART_ONT_NOW',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.ILL_RESTART_IT_MANYALLY',
    type: 'link',
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
    //this.sharedService.setHeaderConfig('HEADER.PHONE_ISSUES', false);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.PHONE_ISSUES',
    showBackBtn: true,
  };

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.ontRestartMessageSection;
  }

  button1Listener() {
     var scriptArray = this.sharedService.GetLoaderDataByID(LoaderScriptsEnum.ONT_REBOOT_REQUIRED);
    this.sharedService.setLoader(true, scriptArray);
    this.backendService.nextSignal('MandatoryOnly').subscribe((data: any) => {
      this.sharedService.setLoader(false);
      this.sharedService.SetTsOutCome(data?.result?.responseData?.tsOutcome??'');
      this.helperService.voiceFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
    });

    // this.sharedService.setLoader(true, 'MESSAGES.YOUR_ROUTER_IS_BEING_RESTARTED');
    // this.backendService.rebootMyDevice('ONT').subscribe((data: any) => {
    //   this.sharedService.setLoader(false);
    //   this.router.navigate(['/issues/phone/ont-reboot-message']);
    // });
  }

  button2Listener() {
    this.router.navigate(['/issues/phone/ont-restart-instructions']);
  }

  getIssueTilesData() {
    // const apiResponse = this.sharedService.getApiResponseData();
    // const temp = this.helperService.networkDiagramStylingWrapper(apiResponse?.ontDetails, apiResponse?.routerDetails);
    // this.ontConfig = temp?.ontConfig;
    // this.routerConfig = temp?.routerConfig;
  }
}
