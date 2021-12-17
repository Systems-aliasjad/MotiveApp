import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ETISALAT_DEFAULT_CONFIG, NetWorkDiagramIds } from 'src/app/shared/constants/constants';
import { IMotiveButton, IOntDetail, IPageHeader, IRouterDetail } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';
import { HelperService } from '../../../shared/helper/helper.service';

@Component({
  selector: 'app-router-not-reachable-own-router',
  template: `<app-diagnose-issue
    [networkDiagram]="networkDiagram"
    [etisalatConfig]="etisalatConfig"
    [ontConfig]="ontConfig"
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
export class RouterNotReachableOwnRouterComponent implements OnInit, OnDestroy {
  etisalatConfig = ETISALAT_DEFAULT_CONFIG;
  ontConfig: IOntDetail;
  routerConfig: IRouterDetail;
  subscription: Subscription;
  networkDiagram = NetWorkDiagramIds.ThreeLayer;
  messageSection;
  button1: IMotiveButton = {
    title: 'BUTTONS.DEVICE_CARE',
    type: 'link',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.ISSUE_FIXED',
    type: 'primary',
  };

  button3: IMotiveButton = {
    title: 'BUTTONS.ISSUE_STILL_NOT_RESOLVED',
    type: 'secondary',
  };

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.INTERNET_ISSUES',
    showBackBtn: true,
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

  updateHeader() {
    //this.sharedService.setHeaderConfig('', true);
  }

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.routerNotReachableOwnRouterMessageSection;
  }

  button1Listener() {
    this.router.navigate(['/issues/internet/device-care']);
  }

  button2Listener() {
    this.sharedService.TicketCloseAPICallWithURL('thanks');
  }

  getIssueTilesData() {
    const apiResponse = this.sharedService.getApiResponseData();
    const temp = this.helperService.networkDiagramStylingWrapper(apiResponse?.ontDetails, apiResponse?.routerDetails);
    this.ontConfig = temp?.ontConfig;
    this.routerConfig = temp?.routerConfig;
  }

  button3Listener() {
    this.router.navigate(['issues/internet/book-complaint']);
  }
}
