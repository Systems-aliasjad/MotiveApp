import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ETISALAT_DEFAULT_CONFIG, NetWorkDiagramIds } from 'src/app/shared/constants/constants';
import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';
import { HelperService } from '../../../shared/helper/helper.service';

@Component({
  selector: 'app-issue-not-fixed',
  template: `<app-diagnose-issue
    [networkDiagram]="networkDiagram"
    [ontConfig]="ontConfig"
    [etisalatConfig]="etisalatConfig"
    [routerConfig]="routerConfig"
    [headerConfig]="headerConfig"
    [messageSection]="messageSection"
  
    [button2]="button2"
    (button2Click)="button2Listener()"
  >
  </app-diagnose-issue>`,

    // [button1]="button1"
    // (button1Click)="button1Listener()"
})
export class IssueNotFixedComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  etisalatConfig = ETISALAT_DEFAULT_CONFIG;
  ontConfig;
  routerConfig;
  messageSection;
  networkDiagram = NetWorkDiagramIds.ThreeLayer;
  button1: IMotiveButton = {
    title: 'BUTTONS.TRY_AGAIN_LATER',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.BOOK_A_COMPLAINT',
    type: 'link',
  };

  constructor(private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute, private helperService: HelperService) {}

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
    // this.sharedService.setHeaderConfig('MESSAGES.INTERNET_ISSUES', false);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'MESSAGES.INTERNET_ISSUES',
    showBackBtn: true,
  };

  updatePageContent() {
    this.messageSection = {
    header: 'MESSAGES.NO_INTERNET_CONNECTION',
    body: [
      { title: 'MESSAGES.THE_INTERNET_SERVICE_IS_DOWN_WE_ARE_SORRY_TO_BE_HOLDING_YOU_UP_THIS_TIME_PLEASE_PROCEED_TO_BOOK_COMPLAINT' },
    ],
  };
  }

  button1Listener() {
    this.sharedService.TicketCloseAPICallWithURL('thanks');
  }

  button2Listener() {
    this.router.navigate(['issues/internet/book-complaint']);
  }

  getIssueTilesData() {
    const apiResponse = this.sharedService.getApiResponseData();
    const temp = this.helperService.networkDiagramStylingWrapper(apiResponse?.ontDetails, apiResponse?.routerDetails);
    this.ontConfig = temp?.ontConfig;
    this.routerConfig = temp?.routerConfig;
  }
}
