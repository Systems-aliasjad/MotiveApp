import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { SharedService } from 'src/app/shared/shared.service';
import { ETISALAT_DEFAULT_CONFIG, NetWorkDiagramIds } from 'src/app/shared/constants/constants';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'all-services-fiber-box-not-reachable',
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
export class FiberBoxNotReachableComponent implements OnInit, OnDestroy {
  networkDiagram = NetWorkDiagramIds.ThreeLayer;
  subscription: Subscription;
  messageSection;
  ontConfig;
  routerConfig;
  etisalatConfig = ETISALAT_DEFAULT_CONFIG;
  button1: IMotiveButton = {
  title: 'BUTTONS.TRY_AGAIN',
  type: 'primary',
 };
button2: IMotiveButton = {
  title: 'BUTTONS.ISSUE_RESOLVED',
  type: 'link',
};

  constructor(private helperService: HelperService, private sharedService: SharedService, private router: Router, private activatedRoute: ActivatedRoute, private backendService: BackendService) {}

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
    // this.sharedService.setHeaderConfig('HEADER.ISSUES', false);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.ISSUES',
    showBackBtn: true,
  };

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.fiberBoxNotReachableBuilderSection;
  }

  button1Listener() {
    this.sharedService.setLoader(true, ['Checking Ont Reachability']);
    this.backendService.nextSignal('next').subscribe((data) => {
      this.sharedService.setLoader(false);
      this.helperService.otherFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
    })    //this.router.navigate(['/thanks']);
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
}
