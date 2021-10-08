import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ETISALAT_DEFAULT_CONFIG } from 'src/app/shared/constants/constants';
import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-outage',
  template: `<app-diagnose-issue
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
export class OutageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messageSection;
  ontConfig;
  routerConfig;
  etisalatConfig = ETISALAT_DEFAULT_CONFIG;
  button1: IMotiveButton = {
    title: 'BUTTONS.OK',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.BOOK_A_COMPLAINT',
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
    // this.sharedService.setHeaderConfig('HEADER.TV_ISSUES', false);
  }

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.tvOutageMessageSection;
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.TV_ISSUES',
    showBackBtn: true,
  };

  button1Listener() {
    this.router.navigate(['/thanks']);
  }

  button2Listener() {
    this.router.navigate(['/issues/internet/book-complaint']);
  }

  getIssueTilesData() {
    const apiResponse = this.sharedService.getApiResponseData();
    const temp = this.helperService.networkDiagramStylingWrapper(apiResponse?.ontDetails, apiResponse?.routerDetails);
    this.ontConfig = temp?.ontConfig;
    this.routerConfig = temp?.routerConfig;
  }
}
