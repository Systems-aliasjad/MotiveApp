import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ETISALAT_DEFAULT_CONFIG, NetWorkDiagramIds } from 'src/app/shared/constants/constants';
import { IMotiveButton, IOntDetail, IPageHeader, IStbDetail } from 'src/app/shared/constants/types';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-tvBox-not-reachable-try-again',
  template: `<app-diagnose-issue
    [networkDiagram]="networkDiagram"
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
export class TvBoxNotReachableTryAgainComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messageSection;
  etisalatConfig = ETISALAT_DEFAULT_CONFIG;
  ontConfig: IOntDetail;
  routerConfig: IStbDetail;
  networkDiagram = NetWorkDiagramIds.FiveLayer;
  connectedDevices;

  button1: IMotiveButton = {
    title: 'BUTTONS.BOOK_A_COMPLAINT',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.TRY_AGAIN_LATER',
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
    //this.sharedService.setHeaderConfig('MESSAGES.TV_ISSUES', false);
  }

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.tvBoxNotReachableAgainMessageSection;
  }

  headerConfig: IPageHeader = {
    pageTitle: 'MESSAGES.TV_ISSUES',
    showBackBtn: true,
  };

  button1Listener() {
    this.router.navigate(['/issues/tv/tvBox-not-reachable-form']);
  }

  button2Listener() {
    this.sharedService.TicketCloseAPICallWithURL('thanks');
  }

  getIssueTilesData() {
    const apiResponse = this.sharedService.getApiResponseData();
    const temp = this.helperService.networkDiagramStylingWrapperSTB(apiResponse?.ontDetails, apiResponse?.stbDetails);
    this.ontConfig = temp?.ontConfig;
    // this.routerConfig = temp?.stbConfig;
    // this.connectedDevices = this.helperService.connectedDeviceModifierSTB(apiResponse?.stbDetails);
    this.connectedDevices = temp?.stbConfig;
  }
}
