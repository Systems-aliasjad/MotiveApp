import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMotiveButton, IOntDetail, IPageHeader, IStbDetail } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { SharedService } from 'src/app/shared/shared.service';
import { ETISALAT_DEFAULT_CONFIG, NetWorkDiagramIds } from 'src/app/shared/constants/constants';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'ont-reboot-required-tv',
  template: `<app-diagnose-issue
    [networkDiagram]="networkDiagram"
    [etisalatConfig]="etisalatConfig"
    [ontConfig]="ontConfig"
    [connectedDevices]="connectedDevices"
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
export class OntRebootRequiredComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messageSection;
  etisalatConfig = ETISALAT_DEFAULT_CONFIG;
  ontConfig: IOntDetail;
  routerConfig: IStbDetail;
  networkDiagram = NetWorkDiagramIds.FiveLayer;
  connectedDevices;

  button1: IMotiveButton = {
    title: 'BUTTONS.RESTART_ONT_NOW',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.ILL_RESTART_IT_MANYALLY',
    type: 'link',
  };

  constructor(
    private backendService: BackendService,
    private helperService: HelperService,
    private sharedService: SharedService,
    private router: Router,
    private activatedRoute: ActivatedRoute
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
    // this.sharedService.setHeaderConfig('HEADER.TV_ISSUES', false);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.TV_ISSUES',
    showBackBtn: true,
  };

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.ontRestartTVAllServices;
  }

  button1Listener() {
    this.sharedService.setLoader(true);
    this.backendService.nextSignal('MandatoryOnly').subscribe((data: any) => {
      this.sharedService.setLoader(false);
      this.helperService.InternetFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
    });
  }

  button2Listener() {
    this.router.navigate(['/issues/tv/ont-restart-instructions']);
  }
  getIssueTilesData() {
    const apiResponse = this.sharedService.getApiResponseData();
    const temp = this.helperService.networkDiagramStylingWrapperSTB(apiResponse?.ontDetails, apiResponse?.stbDetails);
    this.ontConfig = temp?.ontConfig;
    this.routerConfig = temp?.stbConfig;
    this.connectedDevices = this.helperService.connectedDeviceModifierSTB(apiResponse?.stbDetails);
  }
}
