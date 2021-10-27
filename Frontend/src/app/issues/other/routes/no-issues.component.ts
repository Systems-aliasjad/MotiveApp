import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { ETISALAT_DEFAULT_CONFIG, networkDiagramClasses, NetWorkDiagramIds, ONT, ROUTER, SVGs } from 'src/app/shared/constants/constants';
import { IMotiveButton, IOntDetail, IPageHeader, IRouterDetail } from 'src/app/shared/constants/types';
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
    [connectedDevices]="connectedDevices"
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
export class NoIssuesComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messageSection;
  modal: HTMLIonModalElement;
  networkDiagram = NetWorkDiagramIds.sixLayer;
  ontConfig: IOntDetail = { url: SVGs.ont.default, className: networkDiagramClasses.okay, title: ONT };
  connectedDevices = [];
  etisalatConfig = ETISALAT_DEFAULT_CONFIG;
  isThirdParty: boolean = false;

  button1: IMotiveButton = {
    title: 'BUTTONS.ISSUE_FIXED',
    type: 'primary',
  };
  button2: IMotiveButton = {
    title: 'BUTTONS.REBOOT_MY_DEVICES',
    type: 'secondary',
  };
  button3: IMotiveButton = {
    title: 'BUTTONS.CONTINUE_TO_TROUBLESHOOTING',
    type: 'link',
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
    this.subscription = this.activatedRoute.data.subscribe(() => {
      this.updateHeader();
      this.getIssueTilesData();
      this.updatePageContent();
    });
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
    const navigation = this.router.getCurrentNavigation();
    const showRebootButton = navigation?.extras?.state?.showRebootButton;
    this.isThirdParty = navigation?.extras?.state?.isThirdParty;
    if (showRebootButton === false) {
      this.button2 = this.button3;
      this.button2Listener = this.button3Listener;
      this.button3 = undefined;
    }
  }

  button1Listener() {
    this.sharedService.setLoader(true);
    this.backendService.bookComplaint({ mobileNo: localStorage.getItem('CUS_MOBILE_NO'), remarks: '', ci7: true }).subscribe(() => {
      this.sharedService.setLoader(false);
      this.router.navigate(['/thanks']);
    });
  }

  async button2Listener() {
    this.modal = await this.modalCtrl.create({
      component: DeviceListDialog,
      componentProps: {
        isThirdParty: this.isThirdParty,
      },
    });
    return await this.modal.present();
  }

  async button3Listener() {
    this.router.navigate(['issues/internet/service-detail']);
  }

  getIssueTilesData() {
    const apiResponse = this.sharedService.getApiResponseData();
    this.connectedDevices = this.helperService.connectedDeviceModifier(apiResponse?.connectedDevices);
    if (this.connectedDevices) {
      this.connectedDevices = [
        {
          className: networkDiagramClasses.okay,
          url: SVGs.router.default,
          title: ROUTER,
        },
        ...this.connectedDevices,
      ];
    } else {
      this.connectedDevices = [
        {
          className: networkDiagramClasses.okay,
          url: SVGs.router.default,
          title: ROUTER,
        },
      ];
    }
  }
}
