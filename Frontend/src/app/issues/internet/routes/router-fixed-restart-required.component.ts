import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ETISALAT_DEFAULT_CONFIG, NetWorkDiagramIds } from 'src/app/shared/constants/constants';
import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-router-fixed-restart-required',
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
export class RouterFixedRestartRequiredComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messageSection;
  ontConfig;
  routerConfig;
  etisalatConfig = ETISALAT_DEFAULT_CONFIG;
  networkDiagram = NetWorkDiagramIds.ThreeLayer;

  button1: IMotiveButton = {
    title: 'BUTTONS.HOW_DO_I_RESTART',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.CLOSE',
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

  updateHeader() {
    //this.sharedService.setHeaderConfig('MESSAGES.INTERNET_ISSUES', false);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'MESSAGES.INTERNET_ISSUES',
    showBackBtn: true,
  };

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.routerFixedRestartRequired;
  }

  button1Listener() {
    this.router.navigate(['/issues/internet/router-restart']);
  }

  button2Listener() {
    this.router.navigate(['/thanks']);
  }

  getIssueTilesData() {
    const apiResponse = this.sharedService.getApiResponseData();
    const temp = this.helperService.networkDiagramStylingWrapper(apiResponse?.ontDetails, apiResponse?.routerDetails);
    this.ontConfig = temp?.ontConfig;
    this.routerConfig = temp?.routerConfig;
  }
}
