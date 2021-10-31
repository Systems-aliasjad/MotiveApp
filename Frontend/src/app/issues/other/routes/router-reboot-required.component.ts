import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMotiveButton, IOntDetail, IPageHeader } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { SharedService } from 'src/app/shared/shared.service';
import { ETISALAT_DEFAULT_CONFIG, networkDiagramClasses, NetWorkDiagramIds, ONT, ROUTER, SVGs } from 'src/app/shared/constants/constants';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'all-services-router-reboot-requred',
  template: `<app-diagnose-issue
    [networkDiagram]="networkDiagram"
    [ontConfig]="ontConfig"
    [etisalatConfig]="etisalatConfig"
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
export class RouterRebootRequiredComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messageSection;
  networkDiagram = NetWorkDiagramIds.sixLayer;
  ontConfig: IOntDetail = { url: SVGs.ont.default, className: networkDiagramClasses.okay, title: ONT };
  connectedDevices = [];
  etisalatConfig = ETISALAT_DEFAULT_CONFIG;
  button1: IMotiveButton = {
    title: 'BUTTONS.RESTART_NOW',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.CLOSE',
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
    // this.sharedService.setHeaderConfig('HEADER.TV_ISSUES', false);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.ALL_SERVICES',
    showBackBtn: true,
  };

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.rotuerRebootRequiredAllServices;
  }

  button1Listener() {
    this.sharedService.setLoader(true);
    this.backendService.nextSignal('MandatoryOnly').subscribe((data: any) => {
      this.sharedService.setLoader(false);
      this.helperService.InternetFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
    });
    // this.router.navigate(['/issues/internet/router-reboot-successful']);
  }

  button2Listener() {
    this.sharedService.setLoader(true);
    this.backendService.bookComplaint({ mobileNo: localStorage.getItem('CUS_MOBILE_NO'), remarks: '', ci7: true }).subscribe(() => {
      this.sharedService.setLoader(false);
      this.router.navigate(['/thanks']);
    });
  }

  getIssueTilesData() {
    const apiResponse = this.sharedService.getApiResponseData();
    const temp = this.helperService.networkDiagramStylingWrapper(apiResponse?.ontDetails, apiResponse?.routerDetails);
    const routerConfig = temp?.routerConfig;
    this.ontConfig = temp?.ontConfig;
    this.connectedDevices = this.helperService.connectedDeviceModifierSTB(apiResponse?.stbDetails, true);
    if (this.connectedDevices) {
      this.connectedDevices = [{ ...routerConfig }, ...this.connectedDevices];
    } else {
      this.connectedDevices = [{ ...routerConfig }];
    }
  }
}
