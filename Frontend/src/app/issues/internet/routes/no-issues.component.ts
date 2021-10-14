import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ETISALAT_DEFAULT_CONFIG, NetWorkDiagramIds } from 'src/app/shared/constants/constants';
import { IMotiveButton, IPageHeader } from 'src/app/shared/constants/types';
import { DeviceListDialog } from 'src/app/shared/dialogs/device-list-dialog/device-list-dialog.component';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-no-issues',
  template: `<app-diagnose-issue
    [networkDiagram]="networkDiagram"
    [ontConfig]="ontConfig"
    [etisalatConfig]="etisalatConfig"
    [routerConfig]="routerConfig"
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
export class NoIssuesComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messageSection;
  modal: HTMLIonModalElement;
  networkDiagram = NetWorkDiagramIds.SevenLayer;

  ontConfig;
  routerConfig;
  connectedDevices;
  etisalatConfig = ETISALAT_DEFAULT_CONFIG;

  button1: IMotiveButton = {
    title: 'BUTTONS.ISSUE_FIXED',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.REBOOT_MY_DEVICES',
    type: 'secondary',
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

  headerConfig: IPageHeader = {
    pageTitle: 'MESSAGES.INTERNET_ISSUES',
    showBackBtn: true,
  };

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.noIssueMessageSection;
  }

  button1Listener() {
    this.router.navigate(['issues/internet/service-detail']);
  }

  async button2Listener() {
    this.modal = await this.modalCtrl.create({
      component: DeviceListDialog,
    });
    return await this.modal.present();
  }

  getIssueTilesData() {
    // const temp = this.helperService.networkDiagramStylingWrapper(
    //   {
    //     ontSerial: '485754431E91C19B',
    //     ontType: 'I-240G-A',
    //     isReachable: true,
    //     isRebootRequired: false,
    //     isUpgradeRequired: false,
    //     url: '',
    //     className: '',
    //   },
    //   {
    //     routerSerial: '109461043164',
    //     routerModel: 'DIR850',
    //     isReachable: true,
    //     isRebootRequired: false,
    //     isUpgradeRequired: false,
    //     isManaged: true,
    //     isResetRequired: false,
    //     url: '',
    //     className: '',
    //   }
    // );
    const apiResponse = this.sharedService.getApiResponseData();

    const temp = this.helperService.networkDiagramStylingWrapper(apiResponse?.ontDetails, apiResponse?.routerDetails);
    this.ontConfig = temp?.ontConfig;
    this.routerConfig = temp?.routerConfig;
    this.connectedDevices = this.helperService.connectedDeviceModifier(apiResponse?.connectedDevices);
  }
}
