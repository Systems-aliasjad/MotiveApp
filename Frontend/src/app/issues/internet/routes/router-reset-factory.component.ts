import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ResetFactoryDefaultDialog } from 'src/app/issues/internet/dialogs/reset-factory-default-dialog/reset-factory-default-dialog.component';
import { ETISALAT_DEFAULT_CONFIG, networkDiagramClasses, NetWorkDiagramIds, ONT, ROUTER, SVGs } from 'src/app/shared/constants/constants';
import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-router-reset-factory',
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
export class RouterResetFactoryComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messageSection;
  ontConfig;
  routerConfig;
  networkDiagram = NetWorkDiagramIds.ThreeLayer;
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
    private sharedService: SharedService,
    private router: Router,
    private modalCtrl: ModalController,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
      this.updatePageContent();
      this.getIssueTilesData();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  headerConfig: IPageHeader = {
    pageTitle: 'MESSAGES.INTERNET_ISSUES',
    showBackBtn: true,
  };

  updateHeader() {
    //this.sharedService.setHeaderConfig('MESSAGES.INTERNET_ISSUES', false);
  }

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.routerResetFactorySection;
  }

  async button1Listener() {
    const modal = await this.modalCtrl.create({
      component: ResetFactoryDefaultDialog,
    });
    return await modal.present();
  }

  button2Listener() {
    this.router.navigate(['/thanks']);
  }

  getIssueTilesData() {
    const apiResponse = this.sharedService.getApiResponseData();
    const temp = this.helperService.networkDiagramStylingWrapper(apiResponse?.ontDetails, apiResponse?.routerDetails);
    this.ontConfig = temp?.ontConfig;
    this.routerConfig = temp?.routerConfig;
  }
}
