import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ETISALAT_DEFAULT_CONFIG } from 'src/app/shared/constants/constants';
import { IMotiveButton, IOntDetail, IPageHeader, IRouterDetail } from 'src/app/shared/constants/types';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-3rd-party-router',
  template: `<app-diagnose-issue
    [etisalatConfig]="etisalatConfig"
    [ontConfig]="ontConfig"
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
export class ThirdPartyRouterComponent implements OnInit, OnDestroy {
  etisalatConfig = ETISALAT_DEFAULT_CONFIG;
  ontConfig: IOntDetail;
  routerConfig: IRouterDetail;
  connectedDevices;
  subscription: Subscription;
  messageSection;
  button1: IMotiveButton = {
    title: 'BUTTONS.ISSUE_FIXED',
    type: 'link',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.BUY_NEW_ROUTER',
    type: 'primary',
  };

  button3: IMotiveButton = {
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
    type: 'link',
  };

  constructor(
    private helperService: HelperService,
    private sharedService: SharedService,
    private router: Router,
    private modalCtrl: ModalController,
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
    //this.sharedService.setHeaderConfig('MESSAGES.INTERNET_ISSUES', false);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'MESSAGES.INTERNET_ISSUES',
    showBackBtn: true,
  };

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.router3rdPartyMessageSection;
  }

  button1Listener() {
    this.router.navigate(['/thanks']);
  }

  button2Listener() {
    this.router.navigate(['/issues/internet/third-party-router-form']);
  }

  button3Listener() {}

  getIssueTilesData() {
    const apiResponse = this.sharedService.getApiResponseData();
    const temp = this.helperService.networkDiagramStylingWrapper(apiResponse?.ontDetails, apiResponse?.routerDetails);
    this.connectedDevices = this.helperService.connectedDeviceModifier(apiResponse?.connectedDevices);
    this.ontConfig = temp?.ontConfig;
    this.routerConfig = temp?.routerConfig;
  }
}
