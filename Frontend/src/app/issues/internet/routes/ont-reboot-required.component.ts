import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { SharedService } from 'src/app/shared/shared.service';
import { ETISALAT_DEFAULT_CONFIG, flowCodes, networkDiagramClasses, NetWorkDiagramIds } from 'src/app/shared/constants/constants';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'ont-reboot-required',
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
export class OntRebootRequiredComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messageSection;
  ontConfig;
  routerConfig;
  etisalatConfig = { ...ETISALAT_DEFAULT_CONFIG, className: networkDiagramClasses.default };
  networkDiagram = NetWorkDiagramIds.ThreeLayer;

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
    //  this.sharedService.setHeaderConfig('HEADER.INTERNET_ISSUES', false);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.INTERNET_ISSUES',
    showBackBtn: true,
  };

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.ontRestartInternetAllServices;
  }

  button1Listener() {
    this.sharedService.setLoader(true);
    this.backendService.rebootMyDevice('ONT').subscribe((data: any) => {
      this.sharedService.setLoader(false);
      if (data?.result?.screenCode === flowCodes.genericError) {
        this.sharedService.LogDataResponse(data);
        this.router.navigate(['/unknown-error']);
      } else if (data?.result?.screenCode === flowCodes.routerRebootSuccess) {
        this.router.navigate(['/issues/phone/ont-reboot-message']);
      } else if (data?.result?.screenCode === flowCodes.routerRebootFaliure) {
        this.router.navigate(['/issues/internet/router-not-restarted']);
      }
    });
  }

  button2Listener() {
    this.router.navigate(['/issues/phone/ont-restart-instructions']);
  }
  getIssueTilesData() {
    const apiResponse = this.sharedService.getApiResponseData();
    const temp = this.helperService.networkDiagramStylingWrapper(apiResponse?.ontDetails, apiResponse?.routerDetails);
    this.ontConfig = temp?.ontConfig;
    this.routerConfig = temp?.routerConfig;
  }
}
