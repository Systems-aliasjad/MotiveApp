import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { SharedService } from 'src/app/shared/shared.service';
import { BackendService } from 'src/app/services/backend.service';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { IMotiveButton, IOntDetail, IPageHeader } from 'src/app/shared/constants/types';
import { CustomerJourneyConstants } from 'src/app/shared/constants/CustomerJourneyConstants';
import { ETISALAT_DEFAULT_CONFIG, networkDiagramClasses, NetWorkDiagramIds, ONT, SVGs } from 'src/app/shared/constants/constants';
import { ResetFactoryDefaultDialog } from 'src/app/issues/internet/dialogs/reset-factory-default-dialog/reset-factory-default-dialog.component';

@Component({
  selector: 'app-router-reset-required',
  template: `<app-diagnose-issue
    [networkDiagram]="networkDiagram"
    [ontConfig]="ontConfig"
    [etisalatConfig]="etisalatConfig"
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
export class RouterResetRequiredComponent implements OnInit, OnDestroy {
  networkDiagram = NetWorkDiagramIds.sixLayer;
  ontConfig: IOntDetail = { url: SVGs.ont.default, className: networkDiagramClasses.okay, title: ONT };
  connectedDevices = [];
  etisalatConfig = { ...ETISALAT_DEFAULT_CONFIG, className: networkDiagramClasses.default };
  subscription: Subscription;
  messageSection;
  button1: IMotiveButton = {
    title: 'BUTTONS.RESET_NOW',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.CLOSE',
    type: 'link',
  };

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private sharedService: SharedService,
    private helperService: HelperService,
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
    // this.sharedService.setHeaderConfig('MESSAGES.INTERNET_ISSUES', false);
  }

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.routerResetRequiredMessageSection;
  }

  headerConfig: IPageHeader = {
    pageTitle: 'MESSAGES.INTERNET_ISSUES',
    showBackBtn: true,
  };

  async button1Listener() {
    const modal = await this.modalCtrl.create({
      component: ResetFactoryDefaultDialog,
    });
    return await modal.present();
  }

  button2Listener() {
    this.sharedService.setLoader(true);
    this.backendService.nextSignal('DontReboot').subscribe((data: any) => {
      this.sharedService.setLoader(false);
      this.helperService.InternetFlowIdentifier(data?.result?.screenCode, data?.result?.responseData);
    });
    // this.router.navigate(['/thanks']);
  }

  getIssueTilesData() {
    const apiResponse = this.sharedService.getApiResponseData();
    const temp = this.helperService.networkDiagramStylingWrapper(apiResponse?.ontDetails, apiResponse?.routerDetails);
    const routerConfig = temp?.routerConfig;
    this.ontConfig = temp?.ontConfig;
    this.connectedDevices = this.helperService.connectedDeviceModifierSTB(apiResponse?.stbDetails);
    if (this.connectedDevices) {
      this.connectedDevices = [{ ...routerConfig }, ...this.connectedDevices];
    } else {
      this.connectedDevices = [{ ...routerConfig }];
    }
  }
}
