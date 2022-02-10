import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMotiveButton, IOntDetail, IPageHeader, IRouterDetail } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { SharedService } from 'src/app/shared/shared.service';
import { ETISALAT_DEFAULT_CONFIG, networkDiagramClasses, NetWorkDiagramIds, ONT, ROUTER, SVGs } from 'src/app/shared/constants/constants';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'all-services-outage',
  template: `<app-diagnose-issue
    [networkDiagram]="networkDiagram"
    [ontConfig]="ontConfig"
    [etisalatConfig]="etisalatConfig"
    [routerConfig]="routerConfig"
    [headerConfig]="headerConfig"
    [messageSection]="messageSection"
    [button1]="button1"
    (button1Click)="button1Listener()"
  
  >
  </app-diagnose-issue>`,

    // [button2]="button2"
    // (button2Click)="button2Listener()"
})
export class OutageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messageSection;
  etisalatConfig = { ...ETISALAT_DEFAULT_CONFIG, className: networkDiagramClasses.error };
  ontConfig: IOntDetail = { url: SVGs.ont.default, className: networkDiagramClasses.default, title: ONT };
  routerConfig: IRouterDetail = { url: SVGs.router.default, className: networkDiagramClasses.default, title: ROUTER };
  networkDiagram = NetWorkDiagramIds.ThreeLayer;
  button1: IMotiveButton = {
    title: 'BUTTONS.OK',
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
    });
    this.updatePageContent();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {

    var apiInternetGenericResponse = this.sharedService.getOtherGenericResponse();
    if(apiInternetGenericResponse?.routerDetails?.routerModel){
       this.routerConfig.url= this.sharedService.DynamicSetRouterImages(apiInternetGenericResponse?.routerDetails?.routerModel);
    }

    //this.sharedService.setHeaderConfig('HEADER.ALL_SERVICES', false);
  }

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.outageIssueMessageSection;
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.ALL_SERVICES',
    showBackBtn: true,
  };

  button1Listener() {
    this.sharedService.TicketCloseAPICallWithURL('thanks');
  }

  button2Listener() {
    this.router.navigate(['/issues/internet/book-complaint'], { state: { notCI7: true } });
  }
}
