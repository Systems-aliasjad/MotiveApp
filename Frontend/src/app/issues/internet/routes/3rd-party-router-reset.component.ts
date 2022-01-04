import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { ETISALAT_DEFAULT_CONFIG, NetWorkDiagramIds } from 'src/app/shared/constants/constants';
import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-3rd-party-router-reset',
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
    [button3]="button3"
    (button3Click)="button3Listener()"
  >
  </app-diagnose-issue>`,
})
export class ThirdPartyRouterResetComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messageSection;
  ontConfig;
  routerConfig;
  Ci9Flag;
  otherFlow;
  networkDiagram = NetWorkDiagramIds.ThreeLayer;
  etisalatConfig = ETISALAT_DEFAULT_CONFIG;

  button1: IMotiveButton = {
    title: 'BUTTONS.DEVICE_CARE',
    type: 'link',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.ISSUE_FIXED',
    type: 'primary',
  };

  button3: IMotiveButton = {
    title: 'BUTTONS.BOOK_A_COMPLAINT',
    type: 'secondary',
  };

  constructor(
    private helperService: HelperService,
    private sharedService: SharedService,
    private router: Router,
    private modalCtrl: ModalController,
    private activatedRoute: ActivatedRoute,
    private backendService: BackendService
  ) {}

  ngOnInit() {
    this.Ci9Flag = this.router.getCurrentNavigation()?.extras?.state?.Ci9Flag;
    this.otherFlow = this.router.getCurrentNavigation()?.extras?.state?.otherFlow;
    if(this.otherFlow === undefined){
      this.otherFlow = false
    }
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
    this.messageSection = CustomerJourneyConstants.routerConfig3rdPartyMessageSection;
    if(this?.Ci9Flag){
      this.button3.title = 'BUTTONS.CONTINUE';
    }
  }

  button1Listener() {
    this.router.navigate(['/issues/internet/device-care']);
    // this.router.navigate(['/issues/internet/3rd-party-router-reset/device-care']);
  }

  button2Listener() {
    this.sharedService.TicketCloseAPICallWithURL('thanks');
  }

  button3Listener() {
    if(this?.Ci9Flag){
      this.sharedService.setLoader(true);
      this.backendService.nextSignal('next').subscribe((data)=>{
        this.sharedService.setLoader(false);
        this.sharedService.SetTsOutCome(data?.result?.responseData?.tsOutcome??'');
        if(this.otherFlow){
          this.helperService.otherFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
        } else {
          this.helperService.InternetFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
        }
      })
    } else {
      this.router.navigate(['/issues/internet/unable-to-browse-internet/issue-not-fixed']);
    }
  }

  getIssueTilesData() {
    const apiResponse = this.sharedService.getApiResponseData();
    const temp = this.helperService.networkDiagramStylingWrapper(apiResponse?.ontDetails, apiResponse?.routerDetails);
    this.ontConfig = temp?.ontConfig;
    this.routerConfig = temp?.routerConfig;
  }
}
