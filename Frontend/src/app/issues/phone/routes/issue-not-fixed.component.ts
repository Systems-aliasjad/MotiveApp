import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { ETISALAT_DEFAULT_CONFIG, networkDiagramClasses, NetWorkDiagramIds, ONT, PHONE, SVGs } from 'src/app/shared/constants/constants';
import { IMotiveButton, IOntDetail, IPageHeader, IRouterDetail } from 'src/app/shared/constants/types';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-phone-issue-not-fixed',
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
export class IssueNotFixedComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messageSection;
  networkDiagram = NetWorkDiagramIds.ThreeLayer;
  etisalatConfig = { ...ETISALAT_DEFAULT_CONFIG, className: networkDiagramClasses.error };
  ontConfig: IOntDetail = { url: SVGs.ont.default, className: networkDiagramClasses.default, title: ONT };
  routerConfig: IRouterDetail = { url: SVGs.phone.default, className: networkDiagramClasses.default, title: PHONE };

  button1: IMotiveButton = {
    title: 'BUTTONS.TRY_AGAIN_LATER',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.BOOK_A_COMPLAINT',
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
    // this.sharedService.setHeaderConfig('MESSAGES.PHONE_ISSUES', false);
  }

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.issueNotFixedPhoneMessageSection;
  }

  headerConfig: IPageHeader = {
    pageTitle: 'MESSAGES.PHONE_ISSUES',
    showBackBtn: true,
  };

  button1Listener() {
    this.sharedService.TicketCloseAPICallWithURL('thanks');
  }

  button2Listener() {
    this.router.navigate(['issues/phone/book-appointment']);
  }
  getIssueTilesData() {
    // const apiResponse = this.sharedService.getApiResponseData();
    // const temp = this.helperService.networkDiagramStylingWrapper(apiResponse?.ontDetails, apiResponse?.routerDetails);
    // this.ontConfig = temp?.ontConfig;
    // this.routerConfig = temp?.routerConfig;
  }
}
