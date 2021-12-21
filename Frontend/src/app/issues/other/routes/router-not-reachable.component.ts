import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ApplicableCodes, ERoutingIds, ETISALAT_DEFAULT_CONFIG, networkDiagramClasses, NetWorkDiagramIds, ONT, SVGs } from 'src/app/shared/constants/constants';
import { InternetIssuesDialog } from 'src/app/issues/internet/dialogs/internet-issues-dialog/internet-issues-dialog.component';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';
import { IMotiveButton, IOntDetail, IPageHeader, IRouterDetail } from 'src/app/shared/constants/types';
import { HelperService } from 'src/app/shared/helper/helper.service';

@Component({
  selector: 'app-router-not-reachable',
  template: `<app-diagnose-issue
    [networkDiagram]="networkDiagram"
    [ontConfig]="ontConfig"
    [etisalatConfig]="etisalatConfig"
    [connectedDevices]="connectedDevices"
    [headerConfig]="headerConfig"
    [section1Data]="section1Data"
    [section1Template]="section1Template"
    [messageSection]="messageSection"
    [button1]="button1"
    (button1Click)="button1Listener()"
    [button2]="button2"
    (button2Click)="button2Listener()"
  >
  </app-diagnose-issue>`,
})
export class RouterNotReachableComponent implements OnInit, OnDestroy {
  networkDiagram = NetWorkDiagramIds.sixLayer;
  ontConfig: IOntDetail = { url: SVGs.ont.default, className: networkDiagramClasses.okay, title: ONT };
  connectedDevices = [];
  etisalatConfig = ETISALAT_DEFAULT_CONFIG;
  Ci9Flag = false;
  otherFlow = false;

  subscription: Subscription;
  messageSection;
  section1Template;
  section1Data;
  button1: IMotiveButton = {
    title: 'BUTTONS.YES_I_AM',
    type: 'primary',
    explanatoryNote: 'MESSAGES.ARE_YOU_USING_THE_SAME_ROUTER',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.NO_I_M_USING_MY_OWN_ROUTER',
    type: 'link',
  };

  constructor(
    private helperService: HelperService,
    private sharedService: SharedService,
    private router: Router,
    private modalCtrl: ModalController,
    private activatedRoute: ActivatedRoute
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
    pageTitle: 'HEADER.ALL_SERVICES',
    showBackBtn: true,
  };

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.routerNotReachableMessageSection;
    this.section1Template = ApplicableCodes.routerNotReachableTemplate;
  }

  async button1Listener() {
    const modal = await this.modalCtrl.create({
      component: InternetIssuesDialog,
      componentProps: {
        id: ERoutingIds.routerNotReachable,
        Ci9Flag: this.Ci9Flag,
        otherFlow: this.otherFlow,
      },
    });
    return await modal.present();
  }

  button2Listener() {
    this.router.navigate(['/issues/other/customer-not-using-same-router']);
  }

  getIssueTilesData() {
    const apiResponse = this.sharedService.getApiResponseData();
    const temp = this.helperService.networkDiagramStylingWrapper(apiResponse?.ontDetails, apiResponse?.routerDetails);
    const routerConfig = temp?.routerConfig;
    this.section1Data = {
      routerModel: routerConfig?.routerModel,
      routerName: routerConfig?.routerSerial,
    };
    this.ontConfig = temp?.ontConfig;
    this.connectedDevices = this.helperService.connectedDeviceModifierSTB(apiResponse?.stbDetails, true);
    if (this.connectedDevices) {
      this.connectedDevices = [{ ...routerConfig }, ...this.connectedDevices];
    } else {
      this.connectedDevices = [{ ...routerConfig }];
    }
  }
}
