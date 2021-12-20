import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { SharedService } from 'src/app/shared/shared.service';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { ETISALAT_DEFAULT_CONFIG } from 'src/app/shared/constants/constants';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'phone-not-reachable',
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
export class PhoneNotReachableFirstTimeComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messageSection;
  ontConfig;
  routerConfig;
  etisalatConfig = ETISALAT_DEFAULT_CONFIG;
  Ci9Flag;

  button1: IMotiveButton = {
    title: 'BUTTONS.TRY_AGAIN',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.CLOSE',
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
    if(this.Ci9Flag){
      this.button1.title = 'BUTTONS.CONTINUE';
    } else {
      this.button1.title = 'BUTTONS.TRY_AGAIN';
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
    //this.sharedService.setHeaderConfig('HEADER.PHONE_ISSUES', false);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.PHONE_ISSUES',
    showBackBtn: true,
  };

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.phoneNotReachableAllServicesSection;
  }

  async button1Listener() {
    if (this?.Ci9Flag) {
      const data = this.sharedService.getApiResponseData();
      data.phoneDetails.isReachable = true;
      this.helperService.voiceFlowIdentifier('CI9', data);
    } else {
      this.sharedService.setLoader(true, ['Phone not Reachable']);
      this.backendService.nextSignal('next').subscribe((data) => {
        this.sharedService.setLoader(false);
        this.helperService.voiceFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
      })
    }
  }

  button2Listener() {
    this.sharedService.TicketCloseAPICallWithURL('thanks');
  }
  getIssueTilesData() {
    const apiResponse = this.sharedService.getApiResponseData();
    const temp = this.helperService.networkDiagramStylingWrapper(apiResponse?.ontDetails, apiResponse?.phoneDetails);
    this.ontConfig = temp?.ontConfig;
    this.routerConfig = temp?.routerConfig;
  }
}