import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { ETISALAT_DEFAULT_CONFIG, NetWorkDiagramIds } from 'src/app/shared/constants/constants';
import { IMotiveButton, IOntDetail, IPageHeader } from 'src/app/shared/constants/types';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-issue-not-fixed',
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
export class IssueNotFixedComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messageSection;
  etisalatConfig = ETISALAT_DEFAULT_CONFIG;
  ontConfig: IOntDetail;
  networkDiagram = NetWorkDiagramIds.FiveLayer;
  connectedDevices;
  button1: IMotiveButton = {
    title: 'BUTTONS.TRY_AGAIN_LATER',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.BOOK_A_COMPLAINT',
    type: 'link',
  };

  constructor(
    private backendService: BackendService,
    private helperService: HelperService,
    private sharedService: SharedService,
    private router: Router,
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
    if (this.sharedService.getTryAgainBoxNotReachableFlag() > 3) {
      this.button1.disable = true;
    }
    //this.sharedService.setHeaderConfig('MESSAGES.TV_ISSUES', false);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'MESSAGES.TV_ISSUES',
    showBackBtn: true,
  };

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.issueNotFixedTVMessageSection;
  }

  button1Listener() {
   
   
   this.sharedService.TicketCloseAPICallWithURL('thanks');

    //Comment as requested by shakir
    // this.sharedService.setTryAgainBoxNotReachableFlag(); ///for try again button 3 times

    // this.updateHeader();
    // this.sharedService.setLoader(true);
    // this.backendService.bookComplaint({ mobileNo: this.sharedService.getLocalStorage('CUS_MOBILE_NO'), remarks: '', issueResolved: false }).subscribe(() => {
    //   this.sharedService.setTryAgainBoxNotReachableFlag(); ///for try again button 3 times
    //   this.backendService.getIssueDiagnositic('IPTV').subscribe((data) => {
    //     this.sharedService.setLoader(false);
    //     this.helperService.IptvFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
    //   });
    // });
  }

  button2Listener() {
    this.router.navigate(['/issues/tv/book-complaint']);
  }

  getIssueTilesData() {
    const apiResponse = this.sharedService.getApiResponseData();
    const temp = this.helperService.networkDiagramStylingWrapperSTB(apiResponse?.ontDetails, apiResponse?.stbDetails);
    this.ontConfig = temp?.ontConfig;
    this.connectedDevices = temp?.stbConfig;
  }
}
