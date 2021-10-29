import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import { ETISALAT_DEFAULT_CONFIG, networkDiagramClasses, ONT, PHONE, SVGs } from 'src/app/shared/constants/constants';
import { IOntDetail, IPageHeader, IRouterDetail } from 'src/app/shared/constants/types';
import { EIssueFlow, IssueListDialog } from 'src/app/shared/dialogs/issue-list-dialog/issue-list-dialog.component';
import { HelperService } from 'src/app/shared/helper/helper.service';
import { SharedService } from '../../../../shared/shared.service';

@Component({
  selector: 'app-phone-issues-problem-value-added',
  templateUrl: './phone-issues-problem-value-added.component.html',
  styleUrls: ['./phone-issues-problem-value-added.component.scss'],
})
export class PhoneIssuesProblemValueAddedComponent implements OnInit, OnDestroy {
  codeType;
  subscription: Subscription;
  cardList = [
    {
      title: 'Clip',
      description: '',
      title2: '',
      description2: '',
    },
    {
      title: 'Call forwarding',
      description: '',
      title2: 'Call Forwarded to : *****',
      description2: 'Change',
      link: true,
    },
    {
      title: 'Call waiting',
      description: '',
      title2: '',
      description2: '',
    },
    {
      title: 'CBB',
      description: '',
      title2: '',
      description2: 'Reset pin',
      link: true,
    },
  ];
  @Input()
  isPartialLoaded: boolean = false;
  modal;

  etisalatConfig = { ...ETISALAT_DEFAULT_CONFIG, className: networkDiagramClasses.default };
  ontConfig: IOntDetail = { url: SVGs.ont.default, className: networkDiagramClasses.okay, title: ONT };
  routerConfig: IRouterDetail = { url: SVGs.phone.default, className: networkDiagramClasses.okay, title: PHONE };
  accountDetails;

  constructor(
    private helperService: HelperService,
    private sharedService: SharedService,
    private modalCtrl: ModalController,
    public router: Router,
    private actRoute: ActivatedRoute,
    private backendService: BackendService
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.actRoute.data.subscribe(() => {
      this.updateHeader();
      this.getIssueTilesData();
    });
    this.updatePageContent();
  }

  headerConfig: IPageHeader = {
    pageTitle: 'HEADER.SERVICE_DETAILS',
    showBackBtn: true,
  };

  initialization() {
    if (!this.isPartialLoaded) {
      this.sharedService.setDefaultValues();
      //this.sharedService.setHeaderConfig('HEADER.SERVICE_DETAILS', false);
    }
  }

  updateHeader() {
    if (!this.isPartialLoaded) {
      this.sharedService.setDefaultValues();
      this.sharedService.setHeaderConfig('MESSAGES.SERVICE_DETAILS', true);
    }
  }

  updatePageContent() {
    this.initialization();
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
      component: IssueListDialog,
      componentProps: {
        flow: EIssueFlow.phoneIssue,
      },
    });
    return await this.modal.present();
  }

  getIssueTilesData() {
    const apiResponse = this.sharedService.getApiResponseData();
    this.cardList[0].description = apiResponse?.accountDetails?.clip ? 'MESSAGES.WORKING' : 'MESSAGES.NOT_WORKING';
    this.cardList[1].description = apiResponse?.accountDetails?.callForwarded ? 'MESSAGES.ACTIVE_AND_ENABLED' : 'MESSAGES.NOT_ACTIVE';
    this.cardList[1].title2 += apiResponse?.accountDetails?.callForwardedTo || '';
    this.cardList[2].description = apiResponse?.accountDetails?.callWaiting ? 'MESSAGES.ISSUE_FIXED' : 'MESSAGES.ISSUE_NOT_FIXED';
    this.cardList[3].description = apiResponse?.accountDetails?.optionToResetPin ? 'MESSAGES.ACTIVE_AND_ENABLED' : 'MESSAGES.NOT_ACTIVE';
    this.accountDetails = {
      landLineConnectionStatus: apiResponse?.accountDetails?.landLineConnectionStatus ? 'MESSAGES.WORKING' : 'MESSAGES.NOT_WORKING',
    };
  }
}
