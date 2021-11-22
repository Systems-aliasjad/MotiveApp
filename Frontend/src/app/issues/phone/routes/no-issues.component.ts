import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { ETISALAT_DEFAULT_CONFIG, networkDiagramClasses, NetWorkDiagramIds, ONT, PHONE, SVGs } from 'src/app/shared/constants/constants';
import { IMotiveButton, IOntDetail, IPageHeader, IRouterDetail } from 'src/app/shared/constants/types';
import { EIssueFlow, IssueListDialog } from 'src/app/shared/dialogs/issue-list-dialog/issue-list-dialog.component';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';
import { RebootConfirmDialogComponent } from './dialogs/reboot-confirm-dialog/reboot-confirm-dialog.component';

@Component({
  selector: 'app-phone-no-issues',
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
export class NoIssuesComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  messageSection;
  networkDiagram = NetWorkDiagramIds.ThreeLayer;
  etisalatConfig = ETISALAT_DEFAULT_CONFIG;
  ontConfig: IOntDetail = { url: SVGs.ont.default, className: networkDiagramClasses.okay, title: ONT };
  routerConfig: IRouterDetail = { url: SVGs.phone.default, className: networkDiagramClasses.okay, title: PHONE };

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

  modal: any;
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
    });
    this.updatePageContent();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateHeader() {
    // this.sharedService.setHeaderConfig('MESSAGES.PHONE_ISSUE', false);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'MESSAGES.PHONE_ISSUE',
    showBackBtn: true,
  };

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.phoneIssuesMainMessageSection;
  }

  button1Listener() {
    // this.sharedService.setLoader(true);
    this.backendService.bookComplaint({ mobileNo: localStorage.getItem('CUS_MOBILE_NO'), remarks: '', ci7: true }).subscribe(() => {
      // this.sharedService.setLoader(false);
    });
    this.router.navigate(['/thanks']);
  }
  async button2Listener() {
    this.modal = await this.modalCtrl.create({
      component: RebootConfirmDialogComponent,
    });
    return await this.modal.present();
    // rebootMyDevice
  }

  button3Listener() {
    this.sharedService.setLoader(true);
    this.backendService.getIssueDiagnositic('continue').subscribe((res) => {
      this.sharedService.setApiResponseData({
        accountDetails: {
          callForwarded: res?.result?.responseData?.callForwarded,
          callForwardedTo: res?.result?.responseData?.callForwardedTo,
          codeControlBarring: res?.result?.responseData?.codeControlBarring,
          clip: res?.result?.responseData?.clip,
          callWaiting: res?.result?.responseData?.callWaiting,
          landLineConnectionStatus: res?.result?.responseData?.landLineConnectionStatus,
          optionToResetPin: res?.result?.responseData?.optionToResetPin,
        },
        ontDetails: res?.result?.responseData?.ontDetails,
        routerDetails: res?.result?.responseData?.phoneDetails,
      });
      this.sharedService.setLoader(false);
      this.router.navigate(['/issues/phone/no-issue-phone-value-added']);
    });
  }

  getIssueTilesData() {}
}
