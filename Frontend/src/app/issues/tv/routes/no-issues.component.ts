import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { ETISALAT_DEFAULT_CONFIG, NetWorkDiagramIds } from 'src/app/shared/constants/constants';
import { IMotiveButton, IOntDetail, IPageHeader, IStbDetail } from 'src/app/shared/constants/types';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { CustomerJourneyConstants } from '../../../shared/constants/CustomerJourneyConstants';
import { SharedService } from '../../../shared/shared.service';
import { DeviceListDialog } from '../dialogs/device-list-dialog/device-list-dialog.component';

@Component({
  selector: 'app-phone-no-issues',
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
    [button3]="button3"
    (button3Click)="button3Listener()"
  >
  </app-diagnose-issue>`,
})
export class NoIssuesComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  etisalatConfig = ETISALAT_DEFAULT_CONFIG;
  ontConfig: IOntDetail;
  networkDiagram = NetWorkDiagramIds.FiveLayer;
  connectedDevices;
  isThirdParty: boolean = false;
  messageSection;
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
    private backendService: BackendService,
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
    //this.sharedService.setHeaderConfig('MESSAGES.INTERNET_ISSUES', false);
  }

  headerConfig: IPageHeader = {
    pageTitle: 'MESSAGES.TV_ISSUES',
    showBackBtn: true,
  };

  // updatePageContent() {
  //   this.messageSection = CustomerJourneyConstants.noIssuesTVMessageSection;
  // }

  updatePageContent() {
    this.messageSection = CustomerJourneyConstants.noIssuesTVMessageSection;
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
    // this.sharedService.setLoader(true);
    this.backendService.bookComplaint({ mobileNo: this.sharedService.getLocalStorage('CUS_MOBILE_NO'), remarks: '', ci7: false, issueResolved: true }).subscribe(() => {
      // this.sharedService.setLoader(false);
    });
    this.router.navigate(['/thanks']);
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
    this.sharedService.setLoader(true);
    this.backendService.serviceDetailsSTB().subscribe((data: any) => {
      this.sharedService.setLoader(false);
      this.sharedService.setApiResponseData(data);
      this.sharedService.setApiResponseDataSTBContinue(data);

      this.router.navigate(['/issues/tv/detail']);
    });

    // this.modal = await this.modalCtrl.create({
    //   component: IssueListDialog,
    //   componentProps: {
    //     flow: EIssueFlow.tvIssue,
    //   },
    // });
    // return await this.modal.present();
  }

  getIssueTilesData() {
    const apiResponse = this.sharedService.getApiResponseData();
    const temp = this.helperService.networkDiagramStylingWrapperSTB(apiResponse?.ontDetails, apiResponse?.stbDetails);
    this.ontConfig = temp?.ontConfig;
    //  this.routerConfig = temp?.stbConfig;
    this.connectedDevices = temp?.stbConfig;
  }
}
