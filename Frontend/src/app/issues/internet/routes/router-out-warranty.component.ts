import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ETISALAT_DEFAULT_CONFIG, networkDiagramClasses, NetWorkDiagramIds, ONT, ROUTER, SVGs } from 'src/app/shared/constants/constants';
import { IMotiveButton, IOntDetail, IPageHeader, IRouterDetail } from 'src/app/shared/constants/types';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-router-out-of-warranty',
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
    [button3]="button3"
    (button3Click)="button3Listener()"
  >
  </app-diagnose-issue>`,
})
export class RouterOutOfWarrantyComponent implements OnInit, OnDestroy {
  etisalatConfig = ETISALAT_DEFAULT_CONFIG;
  ontConfig: IOntDetail = { url: SVGs.ont.default, className: networkDiagramClasses.okay, title: ONT };
  routerConfig: IRouterDetail = { url: SVGs.router.default, className: networkDiagramClasses.okay, title: ROUTER };
  subscription: Subscription;
  networkDiagram = NetWorkDiagramIds.SevenLayer;
  messageSection;
  connectedDevices;
  button1: IMotiveButton = {
    title: 'BUTTONS.ISSUE_FIXED',
    type: 'link',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.UPGRADE_ROUTER_AND_PACKAGE',
    type: 'primary',
  };
  button3: IMotiveButton = {
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
    type: 'link',
  };

  constructor(private helperService: HelperService, private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute) {}

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

  updateHeader() {}

  headerConfig: IPageHeader = {
    pageTitle: 'MESSAGES.INTERNET_ISSUES',
    showBackBtn: true,
  };

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.routerOutOfWarrantyMessageSection;
  }

  button1Listener() {
    this.router.navigate(['/thanks']);
  }

  button2Listener() {
    this.router.navigate(['/issues/internet/router-upgrade-recommended-form']);
  }

  button3Listener() {
    this.router.navigate(['/issues/internet/no-issue']);
  }

  getIssueTilesData() {
    const apiResponse = this.sharedService.getApiResponseData();
    this.connectedDevices = this.helperService.connectedDeviceModifier(apiResponse?.connectedDevices);
  }
}
