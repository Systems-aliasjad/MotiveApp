import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMotiveButton, IOntDetail, IPageHeader, IRouterDetail } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';
import { BackendService } from '../../../services/backend.service';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { ETISALAT_DEFAULT_CONFIG, flowCodes, networkDiagramClasses, NetWorkDiagramIds, ONT, ROUTER, SVGs } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-password-reset',
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
export class PasswordResetComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messageSection;
  ontConfig: IOntDetail = { url: SVGs.ont.default, className: networkDiagramClasses.okay, title: ONT };
  routerConfig: IRouterDetail = { url: SVGs.router.default, className: networkDiagramClasses.pending, title: ROUTER };
  networkDiagram = NetWorkDiagramIds.ThreeLayer;
  quickLinkNextSignal;
  etisalatConfig = ETISALAT_DEFAULT_CONFIG;
  button1: IMotiveButton = {
    title: 'BUTTONS.RESET_NOW',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.CLOSE',
    type: 'link',
  };

  constructor(
    private helperService: HelperService,
    private backendService: BackendService,
    private sharedService: SharedService,
    private router: Router,
    private activatedRoute: ActivatedRoute
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
    const navigation = this.router.getCurrentNavigation();
    this.quickLinkNextSignal = navigation?.extras?.state?.quickLinkNextSignal;
  }

  headerConfig: IPageHeader = {
    pageTitle: 'MESSAGES.INTERNET_ISSUES',
    showBackBtn: true,
  };

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.internetPasswordResetRequiredMessageSection;
  }

  button1Listener() {
    // this.helperService.InternetFlowIdentifier(this.sharedService.getUpsellOpportunity());
    if (this.quickLinkNextSignal) {
      this.sharedService.setLoader(true);
      this.backendService.quickActionsNextStep(this.quickLinkNextSignal).subscribe((res) => {
        this.sharedService.setLoader(false);
        this.verifyResetResponse(res);
      });
    } else {
      this.sharedService.setLoader(true);
      this.backendService.resetInternetPassword().subscribe((data: any) => {
        this.sharedService.setLoader(false);
        this.verifyResetResponse(data);
        // this.helperService.InternetFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
      });
    }
  }

  verifyResetResponse(res) {
    if (res?.result?.screenCode === flowCodes.QAHSIPR) {
      this.router.navigate(['/issues/internet/password-reset-success']);
    } else if (res?.result?.screenCode === flowCodes.QAHSIPR1) {
      this.router.navigate(['/issues/internet/password-reset-faliure']);
    } else {
      this.router.navigate(['/unknown-issue']);
    }
  }

  button2Listener() {
    if (this.quickLinkNextSignal) {
      this.router.navigate(['landing']);
    } else {
      this.sharedService.setLoader(true);
      this.backendService.nextSignal('DontReboot').subscribe((data: any) => {
        this.sharedService.setLoader(false);
        this.helperService.InternetFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
      });
    }
  }
}
